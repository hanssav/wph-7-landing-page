import React, { useEffect, useState } from 'react';
import type { ModalProps } from './Modal.types';
import clsx from 'clsx';

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className,
  ...props
}) => {
  const [show, setShow] = useState<boolean>(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
    } else {
      const timer = setTimeout(() => setShow(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!show) return null;

  return (
    <div
      className={clsx(
        'fixed inset-0 z-50 flex items-center justify-center transition-colors duration-300',
        isOpen ? 'bg-black/80' : 'bg-black/0',
        className
      )}
      onClick={onClose}
      {...props}
    >
      <div
        className={`bg-white dark:bg-neutral-950 rounded-2xl shadow-lg w-full relative transform transition-all duration-300 max-w-[353px] lg:max-w-[518px]
          ${
            isOpen
              ? 'opacity-100 scale-100 translate-y-0'
              : 'opacity-0 scale-95 translate-y-4'
          }
        `}
        // prevent closing when clicking inside
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
