import React from "react";
import { IButtonProps } from "../../types/types";
import "./ButtonSecondary.css";

const ButtonSecondary: React.FC<IButtonProps> = ({
  width,
  height,
  text,
  onClick,
}) => {
  return (
    <button
      type="button"
      className="buttonSecondary"
      style={{ maxWidth: width, height }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonSecondary;
