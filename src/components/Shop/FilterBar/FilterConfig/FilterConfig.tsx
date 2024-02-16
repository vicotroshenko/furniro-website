import "./FilterConfig.css";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { getAllGoods } from "../../../../redux/goods/operations";

const FilterConfig = () => {
  const [categoriesCheck, setCategoriesCheck] = useState<string[]>([]);
  const [tagsCheck, setTagsCheck] = useState<string[]>([]);

  const { category, tags } = useAppSelector((state) => state.goods);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllGoods({tags: tagsCheck, category: categoriesCheck}))
  }, [dispatch, categoriesCheck, tagsCheck])
  


  const handleCheckItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked, name } = e.target;
    if (name === "category") {
      if (checked) {
        setCategoriesCheck([...categoriesCheck, value]);
      } else {
        setCategoriesCheck(categoriesCheck.filter((item) => item !== value));
      }
    }
    if (name === "tags") {
      if (checked) {
        setTagsCheck([...tagsCheck, value]);
      } else {
        setTagsCheck(tagsCheck.filter((item) => item !== value));
      }
    }
  };

  return (
    <div className="filterConfigContainer">
      <h3>Categories</h3>
      <ul className="filterConfigList">
        {category.map((item: string, index: number) => (
          <li key={nanoid()} className="filterConfigItem">
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
          <li key={nanoid()} className="filterConfigItem">
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
