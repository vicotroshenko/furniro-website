import ButtonPrimary from "../../../ButtonPrimary/ButtonPrimary";
import "./SliderTitle.css";

const SliderTitle = () => {
  return (
    <div className="sliderTitle">
      <h2>50+ Beautiful rooms inspiration</h2>
      <p>
        Our designer already made a lot of beautiful prototipe of rooms that
        inspire you
      </p>
      <ButtonPrimary width={176} height={48} text="Explore More" />
    </div>
  );
};

export default SliderTitle;
