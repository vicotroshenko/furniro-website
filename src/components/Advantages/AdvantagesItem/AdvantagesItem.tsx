import { memo } from 'react';

import './AdvantagesItem.css';

interface IAdvantagesItemProps {
  icon: string;
  title: string;
  text: string;
}

const AdvantagesItem: React.FC<IAdvantagesItemProps> = memo(
  ({ icon, title, text }) => {
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
  }
);

export default AdvantagesItem;
