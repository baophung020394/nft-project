import React, { useState, useEffect } from "react";
import "./Image.scss";

interface ImageProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  border?: string;
  className?: string;
  borderRadius?: string;
  boxShadow?: string;
}

const ImageCustom: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  border,
  className,
  borderRadius,
  boxShadow,
}) => {
  const [imageSrc, setImageSrc] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = src;

    image.onload = () => {
      setIsLoading(false);
      setImageSrc(src);
    };

    image.onerror = () => {
      setIsLoading(false);
    };

    return () => {
      image.onload = null;
      image.onerror = null;
    };
  }, [src]);

  const handleError = () => {
    setImageSrc("");
  };

  const imageStyle: React.CSSProperties = {
    width: width || "auto",
    height: height || "auto",
    border: border || "none",
    borderRadius: borderRadius || "0",
    boxShadow: boxShadow || "none",
    display: "block",
  };
  console.log("isLoading", isLoading);
  return (
    <div className={className}>
      {isLoading ? (
        <div className="skeleton"></div>
      ) : (
        <img
          src={imageSrc}
          alt={alt}
          onError={handleError}
          style={imageStyle}
        />
      )}
    </div>
  );
};

export default ImageCustom;
