import clsx from 'clsx';
import React from 'react';

type ImageProps = {
  src?: string;
  id: string;
  className?: string;
  alt?: string;
} & React.ImgHTMLAttributes<HTMLImageElement>;

const Image: React.FC<ImageProps> = ({
  src,
  id,
  className = '',
  alt,
  ...props
}) => {
  return (
    <img
      src={src}
      id={id}
      alt={alt ?? id}
      className={clsx(className)}
      loading='lazy'
      {...props}
    />
  );
};

export default Image;
