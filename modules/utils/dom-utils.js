/**
 * Position and Scale + images/quads
 */
export function calcDomPosition(ref, viewport) {
  const { px, inner, scroll } = viewport;
  if (ref) {
    const { x, y, width, height } = ref.getBoundingClientRect();

    return {
      x: (x - inner[0] / 2 + width / 2) * px,
      y: -(y - inner[1] / 2 + height / 2) * px - scroll,
      width: width * px,
      height: height * px,
    };
  }
  return {};
}
