import "./FooterLinks.css";
import { IFooterLinksProps } from '../../../types/types';
import { Link } from 'react-router-dom';

const FooterLinks:React.FC<IFooterLinksProps> = ({title}) => {
	return (
		<ul className='footerList'>
			<li className="footerItem linkTitle">
				{title}
			</li>
			<li className="footerItem">
					<Link to={"/"}>Home</Link>
			</li>
			<li className="footerItem">
					<Link to={"/shop?view=grid&show=16"}>Show</Link>
			</li>
			<li className="footerItem">
					<Link to={"/contacts"}>Contacts</Link>
			</li>
		</ul>
	)
}

export default FooterLinks