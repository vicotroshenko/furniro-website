import { Link } from 'react-router-dom';

import { RoutKey } from '../../../constants';
import './SearchShowItem.css';

interface ISearchShowItemProps {
  title: string;
  image: string;
  id: string;
}

const SearchShowItem: React.FC<ISearchShowItemProps> = ({
  title,
  image,
  id,
}) => {
  return (
    <li className="searchItem">
      <Link to={RoutKey.SHOP + `/${id}`}>
        <div>
          <img
            src={image}
            alt={title}
            className="image"
          />
        </div>
        <p>{title}</p>
      </Link>
    </li>
  );
};

export default SearchShowItem;
