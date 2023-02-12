import { generateVars, useColor, type ColorProps } from '@/composables/use-color';
import type { LuButtonVariant } from './types';

type Props = ColorProps & {
  variant?: LuButtonVariant;
  disabled?: boolean;
};

export const useVars = (props?: Props) => {
  const color = useColor(props);
  const colorGray = useColor({ color: 'gray' });

  const vars = {
    buttonColor: color.v(),
    buttonTextColor: color.v(),
    buttonHoverColor: '',
  };

  if (props.disabled) {
    vars.buttonColor = colorGray.v(2, 0.2);
    vars.buttonTextColor = colorGray.v(3);
    return generateVars(vars);
  }

  if (props.variant === 'filled') {
    vars.buttonTextColor = 'white';
    vars.buttonHoverColor = color.v(7);
  } else if (props.variant === 'outlined') {
    vars.buttonHoverColor = color.v(7, 0.15);
  } else if (props.variant === 'light') {
    vars.buttonColor = color.v(7, 0.2);
    vars.buttonHoverColor = color.v(7, 0.3);
  }

  return generateVars(vars);
};
