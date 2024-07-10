import { IAdvantagesItemProps } from '../../../types/types';
import './AdvantagesItem.css';

const AdvantagesItem: React.FC<IAdvantagesItemProps> = ({
  icon,
  title,
  text,
}) => {
  return (
    <div className="advantageItem">
      <div className="advantageImage">
        <img
          src={icon}
          alt="tt"
        />
      </div>
      <div className="advantageText">
        <p>{title}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default AdvantagesItem;
