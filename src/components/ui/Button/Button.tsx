import React from 'react';
import clsx from 'clsx';
import type { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  ...props
}) => {
  const variantClasses = {
    primary: 'bg-primary rounded-full text-white',
    ghost: 'bg-transparent rounded-full',
  };

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
