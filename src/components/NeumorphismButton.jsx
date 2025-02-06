import React from "react";

const NeumorphismButton = ({ onClick, children, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[rgb(212,93,0)] text-white py-3 px-8 rounded-full transition duration-300 
      shadow-[6px_6px_12px_rgba(0,0,0,0.2),_-6px_-6px_12px_rgba(255,255,255,0.7)] 
      hover:shadow-[4px_4px_8px_rgba(0,0,0,0.3),_-4px_-4px_8px_rgba(255,255,255,0.6)] 
      active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.3),_inset_-4px_-4px_8px_rgba(255,255,255,0.6)] 
      hover:bg-[rgba(212,100,10,1)] ${className}`}
    >
      {children}
    </button>
  );
};

export default NeumorphismButton;
