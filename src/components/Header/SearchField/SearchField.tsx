import { useMemo, useState } from "react";
import { IDataSlice, ISearchField } from "../../../types/types";
import { IoMdClose } from "react-icons/io";
import "./SearchField.css";
import SearchShowItem from "../SearchShowItem/SearchShowItem";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { nanoid } from "nanoid";

const getSearchedData = (items: IDataSlice[], value: string) => {
  return items.filter((item) =>
    item.title.toLowerCase().split(" ").includes(value)
  );
};

const SearchField: React.FC<ISearchField> = ({ onClick }) => {
  const [value, setValue] = useState<string>("");

  const goods = useAppSelector((state) => state.goods.allGoods);

  const searchedData = useMemo(
    () => getSearchedData(goods, value),
    [goods, value]
  );

  return (
    <div className="searchFieldContainer">
      <input
        type="text"
        name="search"
        className="search-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        autoComplete="off"
      />
      <button
        type="button"
        className="headerIconButtons searchCloseBtn"
        onClick={onClick}
      >
        <IoMdClose style={{ width: "100%", height: "100%" }} />
      </button>
      {searchedData.length !== 0 && (
        <ul className="searchedResult">
          {searchedData.map((item: IDataSlice) => (
            <SearchShowItem
              key={nanoid()}
              title={item.title}
              image={item.pictures[0]}
              id={item._id}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchField;
