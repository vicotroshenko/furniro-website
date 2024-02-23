import { Link, useLocation } from "react-router-dom"
import "./HeaderNav.css"

const HeaderNav = () => {
	const { pathname } = useLocation();


	return (
		<nav className='nav'>
			<ul className='navList'>
				<li>
					<Link to={"/"} className={pathname === "/" ? "active" : ""}>home</Link>
				</li>
				<li>
					<Link to={"/shop?view=grid&page=1&limit=9"} className={pathname === "/shop" ? "active" : ""}>shop</Link>
				</li>
				<li>
					<Link to={"/contacts"} className={pathname === "/contacts" ? "active" : ""}>contact</Link>
				</li>
			</ul>
		</nav>
	)
}

export default HeaderNav