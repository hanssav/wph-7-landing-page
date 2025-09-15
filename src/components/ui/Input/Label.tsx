import clsx from 'clsx';
import type { LabelHTMLAttributes } from 'react';

type Label = {
  children: React.ReactNode;
} & LabelHTMLAttributes<HTMLLabelElement>;

const Label: React.FC<Label> = ({ children, className, ...props }) => {
  return (
    <label
      htmlFor='name'
      className={clsx('font-bold text-sm leading-sm', className)}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
