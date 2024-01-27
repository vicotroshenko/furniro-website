import { nanoid } from 'nanoid'
import "./FooterLinks.css";
import { IFooterLinksProps } from '../../../types/types';
import { Link } from 'react-router-dom';

const FooterLinks:React.FC<IFooterLinksProps> = ({title, links=[]}) => {
	return (
		<ul className='footerList'>
			<li className="footerItem linkTitle">
				{title}
			</li>
			{links.map((link)=> (
				<li className="footerItem" key={nanoid()}>
					<Link to={"/"}>{link}</Link>
				</li>
			))}
		</ul>
	)
}

export default FooterLinks