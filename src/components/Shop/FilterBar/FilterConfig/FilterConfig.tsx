import { nanoid } from 'nanoid';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useAppSelector } from '../../../../hooks/useAppSelector';
import './FilterConfig.css';

interface FilterConfigProps {
  visible: boolean;
}

const FilterConfig: React.FC<FilterConfigProps> = ({ visible }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const allParams = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const [categoriesCheck, setCategoriesCheck] = useState<string[]>(
    allParams.category ? allParams.category.split(',') : []
  );
  const [tagsCheck, setTagsCheck] = useState<string[]>(
    allParams.tags ? allParams.tags.split(',') : []
  );

  const { category, tags } = useAppSelector((state) => state.goods);

  useEffect(() => {
    setSearchParams({
      ...allParams,
      tags: tagsCheck.join(','),
      category: categoriesCheck.join(','),
    });
  }, [setSearchParams, tagsCheck, categoriesCheck, allParams]);

  const handleCheckItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked, name } = e.target;
    if (name === 'category') {
      if (checked) {
        setCategoriesCheck([...categoriesCheck, value]);
      } else {
        setCategoriesCheck(categoriesCheck.filter((item) => item !== value));
      }
    }
    if (name === 'tags') {
      if (checked) {
        setTagsCheck([...tagsCheck, value]);
      } else {
        setTagsCheck(tagsCheck.filter((item) => item !== value));
      }
    }
  };

  return (
    <div
      className={
        visible ? 'filterConfigContainer' : 'filterConfigContainer configHidden'
      }
    >
      <h3>Categories</h3>
      <ul className="filterConfigList">
        {category.map((item: string, index: number) => (
          <li
            key={nanoid()}
            className="filterConfigItem"
          >
            <input
              type="checkbox"
              name="category"
              id={item + index}
              value={item}
              onChange={handleCheckItem}
              checked={categoriesCheck.includes(item)}
            />
            <label htmlFor={item + index}>{item}</label>
          </li>
        ))}
      </ul>
      <h3>Tags</h3>
      <ul className="filterConfigList">
        {tags.map((item: string) => (
          <li
            key={nanoid()}
            className="filterConfigItem"
          >
            <input
              type="checkbox"
              name="tags"
              id={item}
              value={item}
              onChange={handleCheckItem}
              checked={tagsCheck.includes(item)}
            />
            <label htmlFor={item}>{item}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterConfig;
