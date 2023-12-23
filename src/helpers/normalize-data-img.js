export const makeNormalizedDataImg = arr => {
  return arr.map(({ id, alt, avg_color, src: { medium, large } }) => ({
    id,
    alt,
    avg_color,
    medium,
    large,
  }));
};
