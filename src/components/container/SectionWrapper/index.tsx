import React from 'react';

type SectionWrapprProps = {
  children: React.ReactNode;
  className?: string;
  id: string;
};

const SectionWrapper: React.FC<SectionWrapprProps> = ({
  children,
  className = '',
  id,
  ...props
}) => {
  return (
    <section
      id={id}
      className={`py-6 px-4 lg:px-[140px] ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
