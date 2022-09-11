attribute vec4 position;

varying vec2 v_pos;

void main() {
  vec4 pos = position;
  gl_Position = position;

  v_pos = pos.xy;
}
  