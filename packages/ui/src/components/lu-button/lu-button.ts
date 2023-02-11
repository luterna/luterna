import { generateVars, useColor, type ColorProps } from '@/composables/use-color';

export const useVars = (props?: ColorProps) => {
  const color = useColor(props);
  const colorGray = useColor({ color: 'gray' });

  return generateVars({
    baseButtonColor: color.v(),
    filledButtonHoverColor: color.v(7),
    outlinedButtonHoverColor: color.v(7, 0.15),
    lightButtonColor: color.v(7, 0.2),
    lightButtonHoverColor: color.v(7, 0.3),
    disabledButtonColor: colorGray.v(2, 0.2),
    disabledButtonTextColor: colorGray.v(3),
  });
};
