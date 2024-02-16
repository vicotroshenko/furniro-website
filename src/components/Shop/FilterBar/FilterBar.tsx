import { VscSettings } from "react-icons/vsc";
import { BsGridFill } from "react-icons/bs";
import { TbLayoutDistributeHorizontal } from "react-icons/tb";
import "./FilterBar.css";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import FilterConfig from "./FilterConfig/FilterConfig";

const removeParameter = (
  params: { [x: string]: string },
  values: string[]
): any => {
  let newParameters = {};
  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      if (!values.includes(key)) {
        newParameters = { ...newParameters, [key]: params[key] };
      }
    }
  }
  return newParameters;
};

const FilterBar = () => {
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const goods = useAppSelector((state) => state.goods.allGoods);
  const [searchParams, setSearchParams] = useSearchParams();

  const allParams = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  useEffect(() => {
    if (allParams.show > goods.length) {
      setSearchParams({ ...allParams, show: goods.length });
    }
  }, [allParams.show, allParams, setSearchParams, goods.length]);

  const handleChangeSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    let params = {};
    if (value === "price") {
      params = removeParameter({ ...allParams, price: "-1" }, ["status"]);
    } else if (value === "new" || value === "discount") {
      params = removeParameter({ ...allParams, status: value }, ["price"]);
    } else {
      params = removeParameter(allParams, ["price", "status"]);
    }

    setSearchParams(params);
  };

  const setUpListView = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = event.currentTarget;
    let params = {};
    if (name === "line") {
      params = { view: "line" };
    } else {
      params = { view: "grid" };
    }

    setSearchParams({ ...allParams, ...params });
  };

  const handleShowAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (+value > goods.length) {
      setSearchParams({ ...allParams, show: goods.length });
    } else {
      setSearchParams({ ...allParams, show: value });
    }
  };

  return (
    <section className="filterBar-section">
      <div className="filterBar-container mc-c-flex">
        {showFilter && <FilterConfig />}
        <div className="mc-c-flex filterBar-leftside">
          <div className="filterBar-filterItem mc-c-flex">
            <button
              type="button"
              aria-label="filter"
              className={showFilter ? "headerIconButtons filterBtnActive" : "headerIconButtons"}
              onClick={() => setShowFilter((prev) => !prev)}
            >
              <VscSettings className="fiterBar-icon" />
            </button>
            <span>Filter</span>
          </div>

          <button
            type="button"
            name="grid"
            onClick={setUpListView}
            aria-label="gid view"
            className = {allParams.view === "grid" ? "filterBar-gridBtn headerIconButtons filterBtnActive" : "filterBar-gridBtn headerIconButtons"}
          >
            <BsGridFill className="fiterBar-icon" />
          </button>

          <button
            type="button"
            name="line"
            onClick={setUpListView}
            aria-label="one item in line view"
            className = {allParams.view === "line" ? "headerIconButtons filterBtnActive" : "headerIconButtons"}
          >
            <TbLayoutDistributeHorizontal className="fiterBar-icon" />
          </button>

          <div className="filterBar-divider"></div>
          <div className="filterBar-showIform">
            Showing 1–{allParams.show} of {goods.length} results
          </div>
        </div>

        <div className="mc-c-flex">
          <label className="filterBar-fieldContainer ">
            <span>Show</span>
            <input
              type="number"
              name="showAmount"
              value={allParams.show}
              autoComplete="off"
              className="filterBar-field"
              min="0"
              max={goods.length}
              onChange={handleShowAmount}
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
