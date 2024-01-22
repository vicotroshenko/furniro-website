import { IButtonProps } from "../../types/types";
import "./ButtonPrimary.css";

const ButtonPrimary: React.FC<IButtonProps> = ({
  width,
  height,
  text,
  onClick,
}) => {
  return (
    <button
      type="button"
      style={{ maxWidth: width, height: height }}
      onClick={onClick}
      className="buttonPrimary"
    >
      {text}
    </button>
  );
};

export default ButtonPrimary;
