import clsx from 'clsx';
import React, { type TextareaHTMLAttributes } from 'react';

type TextareaProps = {
  className: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea: React.FC<TextareaProps> = ({ className, ...props }) => {
  return (
    <textarea
      className={clsx(
        'w-full border border-base-border dark:border-base-800 py-2 px-4 rounded-xl font-medium text-sm leading-sm',
        className
      )}
      {...props}
    />
  );
};

export default Textarea;
