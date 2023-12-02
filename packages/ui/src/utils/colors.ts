import Values from 'values.js';

export const getColorVariations = (color: string): string[] => {
  return new Values(color).all(16).map((value) => value.rgb.join(', '));
};
