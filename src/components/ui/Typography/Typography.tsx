import { type ElementType } from 'react';
import clsx from 'clsx';
import type { FontWeight, TextSize, TypographyProps } from './Typography.types';
import { sizeClassMap, weightClassMap } from './Typography.constants';

const Typography = <T extends ElementType = 'p'>({
  size = 'md',
  className,
  as,
  children,
  weight = 'normal',
  ...props
}: TypographyProps<T>) => {
  const Component = as || 'p';

  const fontWeight = weightClassMap[weight as FontWeight];

  const fontSize =
    typeof size === 'string'
      ? sizeClassMap[size]
      : Object.entries(size)
          .map(([breakpoint, sz]) =>
            breakpoint === 'base'
              ? sizeClassMap[sz as TextSize]
              : `${breakpoint}:${sizeClassMap[sz as TextSize]}`
          )
          .join(' ');

  return (
    <Component className={clsx(fontSize, fontWeight, className)} {...props}>
      {children}
    </Component>
  );
};

export default Typography;
