import { createTexture } from "twgl.js";

/**
 * Load Texture
 */
export function loadTexture(gl, src, filtering) {
  const filter = filtering || gl.NEAREST;

  return createTexture(gl, {
    src: src,
    mag: filter,
  });
}

/**
 * Add + Attached Data
 */
export function loadTextureAndData(gl, src, filtering) {
  return new Promise((resolve, reject) => {
    // if (src.complete && src.naturalHeight !== 0) {}

    const filter = filtering || gl.NEAREST;

    const cb = (err, texture, el) => {
      const ratio = calcRatio(src);

      resolve({ texture, ratio });
    };

    // setup promise
    const loaded = createTexture(
      gl,
      {
        src: src ? src.src : [0, 0, 0, 0],
        mag: filter,
        min: filter,
      },
      cb
    );
  });
}

/**
 * -------- CalcRatio
 */

export function calcRatio(src, wrap = null) {
  let wrapper = wrap || src.parentElement;

  // calc wrapper
  const wrapWidth = wrapper.clientWidth;
  const wrapHeight = wrapper.clientHeight;
  const wrapHorizontal = wrapWidth > wrapHeight; // true = ho, false = vertical
  const wrapRatio = wrapWidth / wrapHeight;
  const wrapRevRatio = wrapHeight / wrapWidth;

  // calc image
  const imgWidth = src.naturalWidth || src.width;
  const imgHeight = src.naturalHeight || src.height;
  const imgHorizontal = imgWidth > imgHeight; // true = ho, false = vertical
  const imgRatio = imgWidth / imgHeight;
  const imgRevRatio = imgHeight / imgWidth;

  /** Cases */
  if (!wrapHorizontal && !imgHorizontal) {
    // 1. vertical wrap w vertical image -> (false, false)
    // console.log("case1: v v");
    return [1 * wrapRatio, imgRatio];
  }

  // 2. vertical wrap w horizontal image -> (false, true)
  if (!wrapHorizontal && imgHorizontal) {
    // console.log("case2: v h");
    return [imgRevRatio * wrapRatio, 1];
  }

  // 3. horizontal wrap w vertical image -> (true, false)
  if (wrapHorizontal && !imgHorizontal) {
    // console.log("case3: h v");
    return [imgRevRatio, 1 * wrapRevRatio];
  }

  // 4. horizontal wrap w horizontal image -> (true, true)
  if (wrapHorizontal && imgHorizontal) {
    // console.log("case4: h h");
    return [imgRevRatio, 1 * wrapRevRatio];
  }

  return [1, 1];
}
