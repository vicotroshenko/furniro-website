import { memo } from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';

import { RoutKey } from '../../../../../constants';
import './SliderLink.css';

interface ISliderLink {
  number: number | string;
  place: string;
  name: string;
  link: string;
}

const SliderLink: React.FC<ISliderLink> = memo(
  ({
    number = '01',
    place = 'unknown',
    name = 'unknown',
    link = RoutKey.HOME,
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
  }
);

export default SliderLink;
