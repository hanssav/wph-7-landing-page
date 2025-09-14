import React from 'react';
import Typography from '.';
import type { SubtitleProps } from './Typography.types';
import clsx from 'clsx';

const Subtitle: React.FC<SubtitleProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Typography
      size={{ base: 'sm', lg: 'lg' }}
      weight='normal'
      className={clsx('text-base-400', className)}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default Subtitle;
