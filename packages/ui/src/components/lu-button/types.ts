export const luButtonVariant = ['filled', 'outlined', 'light'] as const;
export type LuButtonVariant = (typeof luButtonVariant)[number];

export const luButtonGroupOrientation = ['horizontal', 'vertical'] as const;
export type LuButtonGroupOrientation = (typeof luButtonGroupOrientation)[number];
