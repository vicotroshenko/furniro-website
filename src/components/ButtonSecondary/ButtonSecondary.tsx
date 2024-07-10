import React from 'react';

import { IButtonProps } from '../../types/types';
import './ButtonSecondary.css';

const ButtonSecondary: React.FC<IButtonProps> = ({
  width,
  height,
  text,
  onClick,
  disabled,
}) => {
  return (
    <button
      type="button"
      className="buttonSecondary"
      style={{ maxWidth: width, height }}
      onClick={(e) => {
        e.preventDefault();
        if (onClick) {
          return onClick();
        }
      }}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default ButtonSecondary;
