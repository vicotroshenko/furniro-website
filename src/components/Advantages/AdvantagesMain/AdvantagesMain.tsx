import iconQuality from "../../../images/svg/cup.svg";
import iconGuarantee from "../../../images/svg/guarantee.svg";
import iconShipping from "../../../images/svg/shipping.svg";
import iconSupport from "../../../images/svg/support.svg";
import AdvantagesItem from "../AdvantagesItem/AdvantagesItem";
import "./AdvantagesMain.css";

const AdvantagesMain = () => {
  return (
    <section className="advantage">
      <div className="advantageContainer">
        <AdvantagesItem
          icon={iconQuality}
          title="High Quality"
          text="crafted from top materials"
        />
        <AdvantagesItem
          icon={iconGuarantee}
          title="Warranty Protection"
          text="Over 2 years"
        />
        <AdvantagesItem
          icon={iconShipping}
          title="Free Shipping"
          text="Order over 150 $"
        />
        <AdvantagesItem
          icon={iconSupport}
          title="24 / 7 Support"
          text="Dedicated support"
        />
      </div>
    </section>
  );
};

export default AdvantagesMain;
