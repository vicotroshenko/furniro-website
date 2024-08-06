import { memo } from 'react';
import { Link } from 'react-router-dom';

import { RoutKey, ViewParam } from '../../../constants';
import { createUrl } from '../../../helpers';
import './FooterLinks.css';

export interface IFooterLinksProps {
  title: string;
  links?: string[];
}

const FooterLinks: React.FC<IFooterLinksProps> = memo(({ title }) => {
  return (
    <ul className="footerList">
      <li className="footerItem linkTitle">{title}</li>
      <li className="footerItem">
        <Link to={RoutKey.HOME}>Home</Link>
      </li>
      <li className="footerItem">
        <Link to={createUrl({ view: ViewParam.GRID, page: 1, limit: 9 })}>
          Show
        </Link>
      </li>
      <li className="footerItem">
        <Link to={RoutKey.HOME}>Contacts</Link>
      </li>
    </ul>
  );
});

export default FooterLinks;
