export const LuFlexDirection = ['row', 'row-reverse', 'column', 'column-reverse'] as const;
export type LuFlexDirection = (typeof LuFlexDirection)[number];

export const LuFlexWrap = ['wrap', 'nowrap', 'wrap-reverse'] as const;
export type LuFlexWrap = (typeof LuFlexWrap)[number];

export const LuFlexJustify = [
  'flex-start',
  'flex-end',
  'center',
  'space-between',
  'space-around',
  'space-evenly',
] as const;
export type LuFlexJustify = (typeof LuFlexJustify)[number];

export const LuFlexAlign = ['flex-start', 'flex-end', 'center', 'stretch', 'baseline'] as const;
export type LuFlexAlign = (typeof LuFlexAlign)[number];
