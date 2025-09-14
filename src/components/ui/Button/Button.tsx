import React from 'react';
import clsx from 'clsx';
import type { ButtonProps } from './Button.types';

const variantClasses = {
  primary: 'bg-primary rounded-full text-white',
  ghost: 'bg-transparent rounded-full',
};

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  ...props
}) => {
  return (
    <button
      className={clsx('p-2 ', variantClasses[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
