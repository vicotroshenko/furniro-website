import { Link } from 'react-router-dom';

import './FooterLinks.css';

export interface IFooterLinksProps {
  title: string;
  links?: string[];
}

const FooterLinks: React.FC<IFooterLinksProps> = ({ title }) => {
  return (
    <ul className="footerList">
      <li className="footerItem linkTitle">{title}</li>
      <li className="footerItem">
        <Link to={'/'}>Home</Link>
      </li>
      <li className="footerItem">
        <Link to={'/shop?view=grid&page=1&limit=9'}>Show</Link>
      </li>
      <li className="footerItem">
        <Link to={'/contacts'}>Contacts</Link>
      </li>
    </ul>
  );
};

export default FooterLinks;
