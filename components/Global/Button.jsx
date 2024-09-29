import React from "react";

const Button = ({ onclick }) => {
  return (
    <button
      type="button"
      onClick={onclick}
      className="relative overflow-hidden bg-primary text-white font-medium py-2 px-4 rounded-full w-40 h-12"
    >
      <span className="absolute inset-0 flex items-center justify-center transition-transform duration-[0.4s] ease-in-out transform button-text1">
        Donate Us
      </span>
      <span className="absolute inset-0 flex items-center justify-center transition-transform duration-[0.4s] ease-in-out transform button-text2">
        Join the Cause
      </span>
    </button>
  );
};

export default Button;
