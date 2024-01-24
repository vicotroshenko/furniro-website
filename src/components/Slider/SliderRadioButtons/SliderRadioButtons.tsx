import { ISliderRadioButtonsProps } from "../../../types/types";
import "./SliderRadioButton.css";



const SliderRadioButtons: React.FC<ISliderRadioButtonsProps> = ({
  onChange, slide="slider-1"
}) => {


  return (
    <div className="slideBtnContainer">
      <input
        type="radio"
        id="slider-1"
        name="slider"
        value="0"
        onChange={onChange}
        checked={slide === "0"}
      />
      <label htmlFor="slider-1"></label>

      <input
        type="radio"
        id="slider-2"
        name="slider"
        value="1"
        onChange={onChange}
        checked={slide === "1"}
      />
      <label htmlFor="slider-2"></label>

      <input
        type="radio"
        id="slider-3"
        name="slider"
        value="2"
        onChange={onChange}
        checked={slide === "2"}
      />
      <label htmlFor="slider-3"></label>

      <input
        type="radio"
        id="slider-4"
        name="slider"
        value="3"
        onChange={onChange}
        checked={slide === "3"}
      />
      <label htmlFor="slider-4"></label>
    </div>
  );
};

export default SliderRadioButtons;
