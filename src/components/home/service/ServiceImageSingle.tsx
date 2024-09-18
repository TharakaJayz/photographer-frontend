
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  src?: string;
  title?: string;
  Style?: string;
  desc?: string;
}

const ServiceImageSingle: React.FC<Props> = ({ src, title, Style, desc }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    if (!isHovered) {
      setIsHovered(true);
    }
  };
  const navigation = useNavigate();
  const handleMouseLeave = () => {
    if (isHovered) {
      setIsHovered(false);
    }
  };
  return (
    <div
      className={`${Style} overflow-hidden  relative`}
      onClick={() => {
        navigation("/portfolio");
      }}
    >
      <img
        src={src}
        alt={title}
        className={`w-full h-full object-cover object-center transition-all ${
          isHovered ? "blur-[10px]" : ""
        }`}
        onMouseEnter={handleMouseEnter}
      />

      {isHovered && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-[.1] flex  justify-between items-start p-5 text-white"
          onMouseLeave={handleMouseLeave}
        >
          <p>{desc}</p>
        </div>
      )}

      <h2 className="text-4xl absolute bottom-5 left-5  text-white">{title}</h2>
    </div>
  );
};

export default ServiceImageSingle;
