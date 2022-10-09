precision mediump float;
#define PI 3.14159265359

uniform vec2 u_res;
uniform float u_time;

uniform vec2 u_mouse;
uniform float u_speed;

varying vec2 v_pos;

// animation
uniform vec2 u_trans;

uniform sampler2D u_diff;
uniform sampler2D u_checker;


// ->> scanlines
vec3 scanLines(in float uv, in float resolution, in float opacity) {
  float intensity = sin((uv) * resolution * PI * 2.0);
  intensity = ((0.5 * intensity) + 0.5) * 0.9 + 0.1;
  return vec3(vec3(pow(intensity, opacity)));
}


 // >> noise
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

float cnoise(vec3 P){
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

// ->> uv remapping curvature
vec2 curveRemapUV(in vec2 uv, in vec2 curv) {
    uv *= 2.;
    uv -= 1.;
    
    vec2 offset = abs(uv.yx) / vec2(
      curv.x, 
      curv.y
    );

    uv = uv + uv * offset * offset;
    uv = uv * 0.5 + .5;
    return uv;
}

// ->> blend modes
float blendOverlay(float base, float blend) {
	return base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));
}
vec3 blendOverlay(vec3 base, vec3 blend) {
	return vec3(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b));
}
vec3 blendOverlay(vec3 base, vec3 blend, float opacity) {
	return (blendOverlay(base, blend) * opacity + base * (1.0 - opacity));
}



void main() {
  vec2 uv = gl_FragCoord.xy / u_res;

  float abs_speed = abs(u_speed);
  float a_trans = sin(u_trans.x * 2. * PI);


  // curvature
  vec2 curv = vec2(5., 5.);
  vec2 d_uv = curveRemapUV(uv, curv);
  

  // distortion
  float checker = texture2D(u_checker, d_uv).r;

  // mouse
  float dist = distance(u_mouse, v_pos);
  dist = 1. - dist;
  dist = smoothstep(.9, 1., dist);

  // noise
  float ns = cnoise(vec3(v_pos.x, v_pos.y, u_time));


  /* >> texture */
  // float checker_dist = checker * u_speed * .02;
  float mouse_dist = dist * .003;

  // texture
  vec2 mouse_uv = d_uv;
  vec3 img = texture2D(u_diff, mouse_uv + mouse_dist).rgb;
  

  // final image
  vec3 final_img = img.rgb;

  /* >> Scanlines */
  float banding = .9 - cos((sin(mouse_uv.y * 10.) + (u_time)) * 20. + (u_time * 10.)) * .1;
  vec3 scalnline_diff = scanLines(
    mouse_uv.y + u_time * 10., 
    500. - (abs_speed + a_trans * (u_trans.y + a_trans * 3.)) * 500., 
    banding
  );

  final_img.rgb = blendOverlay(
    final_img, 
    scalnline_diff, 
    .6 + abs(sin(u_time) * .2)
  );

  final_img.rgb += (scalnline_diff) * .3 * a_trans;


  gl_FragColor.rgb = final_img.rgb;
  // gl_FragColor.rgb = (scalnline_diff);
  gl_FragColor.a = 1.;
}
  


  // vec3 bw_img = vec3((img.r + img.g + img.b) / 3.3333);