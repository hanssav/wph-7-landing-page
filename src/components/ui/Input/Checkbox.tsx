import React from 'react';
import clsx from 'clsx';

type CheckboxProps = {
  label: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <label className='inline-flex items-center gap-2 cursor-pointer relative'>
      <input
        type='checkbox'
        className={clsx(
          'peer appearance-none w-5 h-5 border border-gray-400 rounded-sm bg-white',
          'checked:bg-primary checked:border-primary',
          'dark:bg-base-950 dark:border-base-800'
        )}
        checked={checked}
        onChange={onChange}
      />
      {/* Custom check icon */}
      <svg
        className='absolute w-5 h-5 text-white hidden peer-checked:block pointer-events-none'
        fill='none'
        stroke='currentColor'
        strokeWidth='3'
        viewBox='0 0 24 24'
      >
        <path d='M5 13l4 4L19 7' />
      </svg>
      <span className='font-medium text-sm leading-sm lg:text-md lg:leading-md'>
        {label}
      </span>
    </label>
  );
};

export default Checkbox;
