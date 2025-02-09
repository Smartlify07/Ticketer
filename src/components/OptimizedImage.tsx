import { useState } from 'react';
import { cn } from '../utils/utils';

const OptimizedImage = ({
  className,
  src,
  alt,
  containerClassName,
}: {
  className: string;
  src: string;
  alt: string;
  containerClassName?: string;
}) => {
  const [loaded, setLoaded] = useState(false);
  const blurredSrc = src.replace('/upload', '/upload/e_blur:1000,w_10/');
  return (
    <div className={cn(`relative `, containerClassName!)}>
      <img
        src={blurredSrc}
        alt={alt}
        className={cn(
          `absolute top-0 left-0  object-cover transition-opacity duration-500 ${
            loaded ? 'opacity-0' : 'opacity-100'
          }`,
          className
        )}
      />

      <img
        className={cn(
          `object-cover transition-opacity duration-500 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`,
          className
        )}
        loading="lazy"
        src={src}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default OptimizedImage;
