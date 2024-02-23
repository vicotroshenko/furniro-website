import "./SliderMain.css";
import image1 from "../../../../../images/jpeg/slider-1.jpg";
import image2 from "../../../../../images/jpeg/slider-2.jpg";
import image3 from "../../../../../images/jpeg/slider-3.jpg";
import image4 from "../../../../../images/jpeg/slider-4.jpg";
import SliderLink from "../SliderLink/SliderLink";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import SliderRadioButtons from "../SliderRadioButtons/SliderRadioButtons";
import { useState } from "react";
import { nanoid } from "nanoid";

interface ISlides {
  slide: number;
  place: string;
  name: string;
  image: string;
  link: string;
}

const slides = [
  {
    slide: 1,
    place: "Bed Room 1",
    name: "Inner Place 1",
    image: image1,
    link: "/",
  },
  {
    slide: 2,
    place: "Bed Room 2",
    name: "Inner Place 2",
    image: image2,
    link: "/",
  },
  {
    slide: 3,
    place: "Bed Room 3",
    name: "Inner Place 3",
    image: image3,
    link: "/",
  },
  {
    slide: 4,
    place: "Bed Room 4",
    name: "Inner Place 4",
    image: image4,
    link: "/",
  },
];

const SliderMain = () => {
  const [slide, setSlide] = useState<string>("0");
  const [newArray, setNewArray] = useState<ISlides[]>(slides);

  const getArray = (position: number) => {
    if (position === 0) {
      setNewArray(slides);
    }

    let futureNewArray = [];
    for (let i = position; i <= slides.length - 1; i++) {
      futureNewArray.push(slides[i]);
    }

    let number = slides.length - 1 - (slides.length - 1 - position);
    for (let i = 0; i < number; i++) {
      futureNewArray.push(slides[i]);
    }
    setNewArray(futureNewArray);
  };

  const handleSlideNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSlide(value);
    getArray(+value);
  };

  const handleNextClick = () => {
    setSlide((prev) => {
      if (+prev >= slides.length - 1) {
        getArray(0);
        return "0";
      } else {
        getArray(+prev + 1);
        return (+prev + 1).toString();
      }
    });
  };

  return (
    <div className="slider">
      <ul className="sliderList">
        {newArray.map(({ slide, place, name, image, link }) => (
          <li className="sliderItem" key={nanoid()}>
            <img src={image} alt={name} className="image" />
            <SliderLink name={name} place={place} link={link} number={slide} />
          </li>
        ))}
      </ul>
      <button type="button" className="sliderBtnNext" onClick={handleNextClick} aria-label="next slide button">
        <MdOutlineKeyboardArrowRight />
      </button>
      <div className="siderBtn">
        <SliderRadioButtons onChange={handleSlideNumber} slide={slide} />
      </div>
    </div>
  );
};

export default SliderMain;
