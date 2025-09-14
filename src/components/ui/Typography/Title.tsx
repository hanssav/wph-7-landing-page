import React from 'react';
import Typography from '.';
import type { TitleProps } from './Typography.types';

const Title: React.FC<TitleProps> = ({ children, ...props }) => {
  return (
    <Typography
      as='h1'
      size={{ base: 'display-sm', lg: 'display-xl' }}
      weight='bold'
      {...props}
    >
      {children}
    </Typography>
  );
};

export default Title;
