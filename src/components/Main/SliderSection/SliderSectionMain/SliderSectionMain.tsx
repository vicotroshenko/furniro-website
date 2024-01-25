import SliderMain from "../Slider/SliderMain/SliderMain";
import SliderTitle from "../SliderTitle/SliderTitle";
import "./SliderSectionMain.css";

const SliderSectionMain = () => {
	return (
		<section className="sliderSection">
			<div className="sliderSectionContainer">
				<SliderTitle/>
				<SliderMain/>
			</div>
		</section>
	)
}

export default SliderSectionMain