import React, { memo } from 'react';

import './ButtonSecondary.css';

export interface IButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  width: number;
  height: number;
  text: string;
}

const ButtonSecondary: React.FC<IButtonProps> = memo(
  ({ width, height, text, onClick, ...props }) => {
    const handleMouseClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      onClick?.(e);
    };
    return (
      <button
        className="buttonSecondary"
        style={{ maxWidth: width, height }}
        onClick={handleMouseClick}
        {...props}
      >
        {text}
      </button>
    );
  }
);

export default ButtonSecondary;
