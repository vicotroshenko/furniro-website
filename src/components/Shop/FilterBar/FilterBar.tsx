import { VscSettings } from "react-icons/vsc";
import { BsGridFill } from "react-icons/bs";
import { TbLayoutDistributeHorizontal } from "react-icons/tb";
import "./FilterBar.css";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { getAllGoods } from "../../../redux/goods/operations";

interface IFilterBarProps {
  onClick: (e:React.MouseEvent<HTMLButtonElement>) => void
}

const FilterBar:React.FC<IFilterBarProps> = ({onClick}) => {

	const goods = useAppSelector(state => state.goods.allGoods);
  const dispatch = useAppDispatch();

  const handleChangeSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    console.log(event.target.value);
    dispatch(getAllGoods({[value]: value}))
  }

  return (
    <section className="filterBar-section">
      <div className="filterBar-container mc-c-flex">
        <div className="mc-c-flex filterBar-leftside">
          <div className="filterBar-filterItem mc-c-flex">
            <button
              type="button"
              aria-label="filter"
              className="headerIconButtons"
            >
              <VscSettings className="fiterBar-icon" />
            </button>
            <span>Filter</span>
          </div>

          <button
            type="button"
            name="grid"
						onClick={onClick}
            aria-label="gid view"
            className="filterBar-gridBtn headerIconButtons"
          >
            <BsGridFill className="fiterBar-icon" />
          </button>

          <button
            type="button"
            name="line"
						onClick={onClick}
            aria-label="one item in line view"
            className="headerIconButtons"
          >
            <TbLayoutDistributeHorizontal className="fiterBar-icon" />
          </button>

          <div className="filterBar-divider"></div>
          <div className="filterBar-showIform">Showing 1–16 of 32 results</div>
        </div>

        <div className="mc-c-flex">
          <label className="filterBar-fieldContainer ">
            <span>Show</span>
            <input
              type="text"
              name="showAmount"
							defaultValue={goods.length}
              autoComplete="off"
              className="filterBar-field"
            />
          </label>
          <div className="filterBar-selectContainer mc-c-flex">
            <span>Sort by</span>
            <select className="filterBar-select" onChange={handleChangeSort}>
              <option value="default">Default</option>
              <option value="price">Price</option>
              <option value="new">New</option>
              <option value="discount">Discount</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterBar;
