import { IoIosArrowRoundForward } from "react-icons/io";
import "./SliderLink.css";
import { ISliderLink } from "../../../../../types/types";
import { memo } from "react";

const SliderLink: React.FC<ISliderLink> = memo(function SliderLink ({
  number = "01",
  place = "unknown",
  name = "unknown",
  link = "/",
}) {
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
});

export default SliderLink;
