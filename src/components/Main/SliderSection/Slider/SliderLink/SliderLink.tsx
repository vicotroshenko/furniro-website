import { IoIosArrowRoundForward } from 'react-icons/io';

import { ISliderLink } from '../../../../../types/types';
import './SliderLink.css';

const SliderLink: React.FC<ISliderLink> = ({
  number = '01',
  place = 'unknown',
  name = 'unknown',
  link = '/',
}) => {
  return (
    <div className="sliderItemIntro">
      <div className="slideUpperText">
        <p className="slideNumber">{number}</p>
        <div className="textDivider"></div>
        <p>{place}</p>
      </div>
      <p>{name}</p>
      <a href={link}>
        <IoIosArrowRoundForward className="sliderArrow" />
      </a>
    </div>
  );
};

export default SliderLink;
