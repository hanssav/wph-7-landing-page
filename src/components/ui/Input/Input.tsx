import clsx from 'clsx';
import React, { type InputHTMLAttributes } from 'react';

const Input: React.FC<
  { className?: string } & InputHTMLAttributes<HTMLInputElement>
> = ({ className, ...props }) => {
  return (
    <input
      {...props}
      className={clsx(
        'w-full border border-base-border dark:border-base-800 py-2 px-4 rounded-xl font-medium text-sm leading-sm',
        className
      )}
    />
  );
};

export default Input;
