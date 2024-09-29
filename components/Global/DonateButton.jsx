import React from "react";

const DonateButton = () => {
  return (
    <button
      type="button"
      className={`w-20 h-10 bg-primary text-white text-sm fixed right-12 lg:right-20 bottom-4 z-50 animate-bounce font-medium rounded-full`}
    >
      Donate
    </button>
  );
};

export default DonateButton;
