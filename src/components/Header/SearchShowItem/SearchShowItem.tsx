import { Link } from 'react-router-dom';

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
      <Link to={`/shop/${id}`}>
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
