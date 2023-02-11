import { generateVars, useColor } from '@/composables/use-color';

export const useVars = () => {
  const color = useColor({ color: 'gray' });

  return generateVars({
    backgroundColor: color.v(0),
    iconColor: color.v(4),
    captionColor: color.v(9),
  });
};
