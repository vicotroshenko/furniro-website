import HeaderButtonsBar from "../HeaderButtonsBar/HeaderButtonsBar"
import HeaderNav from "../HeaderNav/HeaderNav";
import logo from "../../../images/svg/logo.svg";
import "./HeaderMain.css"

const HeaderMain = () => {
	return (
		<header className="header">
			<div className="headerContainer">
				<div className="headerLogo">
					<div>
						<img src={logo} alt="logo"/>
					</div>
					<p>furniro</p>
				</div>
				<HeaderNav/>
				<HeaderButtonsBar/>
			</div>
		</header>
	)
}

export default HeaderMain