import { nanoid } from 'nanoid'
import "./FooterLinks.css";
import { IFooterLinksProps } from '../../../types/types';

const FooterLinks:React.FC<IFooterLinksProps> = ({title, links=[]}) => {
	return (
		<ul className='footerList'>
			<li className="footerItem linkTitle">
				{title}
			</li>
			{links.map((link)=> (
				<li className="footerItem" key={nanoid()}>
					<a href="/">{link}</a>
				</li>
			))}
		</ul>
	)
}

export default FooterLinks