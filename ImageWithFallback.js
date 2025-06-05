import React, { useState, useCallback } from 'react';

const PLACEHOLDER_IMAGE = 'https://placehold.co/600x400/e2e8f0/cbd5e0?text=Property+Image';

const ImageWithFallback = ({ src, alt, className }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const handleError = useCallback(() => {
    setImgSrc(PLACEHOLDER_IMAGE);
  }, []);

  return <img src={imgSrc} alt={alt} className={className} onError={handleError} />;
};

export default ImageWithFallback;
