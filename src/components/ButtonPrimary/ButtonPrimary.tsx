import { IButtonProps } from '../../types/types';
import './ButtonPrimary.css';

const ButtonPrimary: React.FC<IButtonProps> = ({
  width,
  height,
  text,
  type,
  onClick,
}) => {
  return (
    <button
      type={type}
      style={{ maxWidth: width, height: height }}
      onClick={onClick}
      className="buttonPrimary"
    >
      {text}
    </button>
  );
};

export default ButtonPrimary;
