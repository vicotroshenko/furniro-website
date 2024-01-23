import { ISliderRadioButtonsProps } from "../../types/types";
import "./SliderRadioButton.css";
import { useState } from "react";


const SliderRadioButtons: React.FC<ISliderRadioButtonsProps> = ({
  onChange,
}) => {
  const [slide, setslide] = useState<string>("slider-1");

  const handleSlideNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setslide(value);
    if (onChange !== undefined) {
      onChange(value);
    }
  };

  return (
    <div className="slideBtnContainer">
      <input
        type="radio"
        id="slider-1"
        name="slider"
        value="slider-1"
        onChange={handleSlideNumber}
        checked={slide === "slider-1"}
      />
      <label htmlFor="slider-1"></label>

      <input
        type="radio"
        id="slider-2"
        name="slider"
        value="slider-2"
        onChange={handleSlideNumber}
        checked={slide === "slider-2"}
      />
      <label htmlFor="slider-2"></label>

      <input
        type="radio"
        id="slider-3"
        name="slider"
        value="slider-3"
        onChange={handleSlideNumber}
        checked={slide === "slider-3"}
      />
      <label htmlFor="slider-3"></label>

      <input
        type="radio"
        id="slider-4"
        name="slider"
        value="slider-4"
        onChange={handleSlideNumber}
        checked={slide === "slider-4"}
      />
      <label htmlFor="slider-4"></label>
    </div>
  );
};

export default SliderRadioButtons;
