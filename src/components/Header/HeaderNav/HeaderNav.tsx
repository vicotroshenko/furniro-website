import "./HeaderNav.css"

const HeaderNav = () => {
	return (
		<nav className='nav'>
			<ul className='navList'>
				<li>
					<a href='/'>home</a>
				</li>
				<li>
					<a href='/'>shop</a>
				</li>
				<li>
					<a href='/'>about</a>
				</li>
				<li>
					<a href='/'>contact</a>
				</li>
			</ul>
		</nav>
	)
}

export default HeaderNav