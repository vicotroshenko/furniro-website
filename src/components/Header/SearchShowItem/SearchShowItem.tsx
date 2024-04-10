import { Link } from "react-router-dom";
import { ISearchShowItemProps } from "../../../types/types";
import "./SearchShowItem.css";

const SearchShowItem: React.FC<ISearchShowItemProps> = ({
  title,
  image,
  id,
}) => {
  return (
    <li className="searchItem">
      <Link to={`/shop/${id}`}>
        <div>
          <img src={image} alt={title} className="image" />
        </div>
        <p>{title}</p>
      </Link>
    </li>
  );
};

export default SearchShowItem;
