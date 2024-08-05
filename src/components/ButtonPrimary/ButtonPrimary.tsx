import './ButtonPrimary.css';

export interface IButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style' | 'className'> {
  width: number;
  height: number;
  text: string;
}

const ButtonPrimary: React.FC<IButtonProps> = ({
  width,
  height,
  text,
  ...props
}) => {
  return (
    <button
      style={{ maxWidth: width, height: height }}
      className="buttonPrimary"
      {...props}
    >
      {text}
    </button>
  );
};

export default ButtonPrimary;
