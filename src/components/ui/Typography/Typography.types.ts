import type { ElementType } from 'react';
import type { weightClassMap } from './Typography.constants';

type TextSize =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'display-xs'
  | 'display-sm'
  | 'display-md'
  | 'display-lg'
  | 'display-xl'
  | 'display-2xl'
  | 'display-3xl';

type ResponsiveType = {
  base?: TextSize;
  sm?: TextSize;
  md?: TextSize;
  lg?: TextSize;
  xl?: TextSize;
};

type FontWeight = keyof typeof weightClassMap;

type TypographyProps<T extends ElementType = 'p'> = {
  /**
   * @example singgle size
   * <Typograpy size='display-3xl'
   * or
   * @example responsive type
   * <Typography size= 'sm' | 'md' | 'lg' | 'display-md' /> → single size for all screens
   * <Typograpy size={ base: 'md', lg: 'display-md' } /> → responsive sizes per breakpoint,
   * <Typograpy size={{ base: 'display-3xl' }}  /> can use
   */

  size?: TextSize | ResponsiveType;

  /**
   * @example
   * set fontWeight
   * <Typograpy weight='bold'  /> can
   */

  weight?: FontWeight;
  className?: string;
  children: React.ReactNode;
  as?: T;
} & React.ComponentPropsWithoutRef<T>;

export type { TypographyProps, TextSize, FontWeight };
