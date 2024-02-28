import React from "react";

const ValoButton = ({ text }) => {
  return (
    <span className="btn__inner">
      <span className="btn__slide"></span>
      <span className="btn__content">{text}</span>
    </span>
  );
};

export default ValoButton;
