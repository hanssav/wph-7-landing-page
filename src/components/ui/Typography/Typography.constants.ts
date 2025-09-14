import type { TextSize } from './Typography.types';

const weightClassMap = {
  thin: 'font-thin', // 100
  extralight: 'font-extralight', // 200
  light: 'font-light', // 300
  normal: 'font-normal', // 400
  medium: 'font-medium', // 500
  semibold: 'font-semibold', // 600
  bold: 'font-bold', // 700
  extrabold: 'font-extrabold', // 800
  black: 'font-black', // 900
} as const;

const sizeClassMap: Record<TextSize, string> = {
  xs: 'text-xs leading-xs',
  sm: 'text-sm leading-sm',
  md: 'text-md leading-md',
  lg: 'text-lg leading-lg',
  xl: 'text-xl leading-xl',

  'display-xs': 'text-display-xs leading-display-xs',
  'display-sm': 'text-display-sm leading-display-sm',
  'display-md': 'text-display-md leading-display-md',
  'display-lg': 'text-display-lg leading-display-lg',
  'display-xl': 'text-display-xl leading-display-xl',
  'display-2xl': 'text-display-2xl leading-display-2xl',
  'display-3xl': 'text-display-3xl leading-display-3xl',
};

export { weightClassMap, sizeClassMap };
