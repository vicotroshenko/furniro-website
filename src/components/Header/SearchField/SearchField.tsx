import { nanoid } from 'nanoid';
import { memo, useMemo, useState } from 'react';
import { IoMdClose } from 'react-icons/io';

import { useAppSelector } from '../../../hooks/useAppSelector';
import { IDataSlice } from '../../../types/types';
import SearchShowItem from '../SearchShowItem/SearchShowItem';
import './SearchField.css';

const getSearchedData = (items: IDataSlice[], value: string) => {
  return items.filter((item) =>
    item.title.toLowerCase().split(' ').includes(value)
  );
};

interface SearchFieldProps {
  onClick: () => void;
}
const SearchField: React.FC<SearchFieldProps> = memo(({ onClick }) => {
  const [value, setValue] = useState<string>('');

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
        <IoMdClose />
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
});

export default SearchField;
