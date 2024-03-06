import React from "react";

const ValoButton = ({ text }) => {
  return (
    <button className="btn btn--light min-w-52 text-lg">
      <span className="btn__inner">
        <span className="btn__slide"></span>
        <span className="btn__content">{text}</span>
      </span>
    </button>
  );
};

export default ValoButton;
