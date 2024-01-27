import HeaderButtonsBar from "../HeaderButtonsBar/HeaderButtonsBar";
import HeaderNav from "../HeaderNav/HeaderNav";
import logo from "../../../images/svg/logo.svg";
import "./HeaderMain.css";
import { Link } from "react-router-dom";

const HeaderMain = () => {
  return (
    <header className="header">
      <div className="headerContainer">
        <Link to={"/"} style={{textDecoration: "none", color: "inherit"}}>
          <div className="headerLogo">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <p>furniro</p>
          </div>
        </Link>
        <HeaderNav />
        <HeaderButtonsBar />
      </div>
    </header>
  );
};

export default HeaderMain;
