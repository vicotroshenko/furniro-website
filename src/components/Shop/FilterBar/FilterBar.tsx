import { VscSettings } from "react-icons/vsc";
import { BsGridFill } from "react-icons/bs";
import { TbLayoutDistributeHorizontal } from "react-icons/tb";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import FilterConfig from "./FilterConfig/FilterConfig";
import "./FilterBar.css";

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
  const { stats } = useAppSelector((state) => state.goods);
  const [searchParams, setSearchParams] = useSearchParams();

  const allParams = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  useEffect(() => {
    let limit =
    stats < allParams.limit
        ? stats
        : allParams.limit;
    setSearchParams({ ...allParams, limit });

  }, [allParams, setSearchParams, allParams.limit, stats])

  const handleChangeSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    let params = {};
    if (value === "price") {
      params = removeParameter({ ...allParams, page: "1", price: "-1" }, [
        "status",
      ]);
    } else if (value === "new" || value === "discount") {
      params = removeParameter({ ...allParams, page: "1", status: value }, [
        "price",
      ]);
    } else {
      params = removeParameter({ ...allParams, page: "1" }, [
        "price",
        "status",
      ]);
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

  const configToggle = () => {
    setShowFilter((prev) => !prev);
  };

  const configPageLimit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    let limit =
    stats < value
        ? stats
        : value;
    setSearchParams({ ...allParams, limit });
  };

  return (
    <section className="filterBar-section">
      <div className="filterBar-container mc-c-flex">
        <FilterConfig visible={showFilter} />
        <div className="mc-c-flex filterBar-leftside">
          <div className="filterBar-filterItem mc-c-flex">
            <button
              type="button"
              aria-label="filter"
              className={
                showFilter
                  ? "headerIconButtons filterBtnActive"
                  : "headerIconButtons"
              }
              onClick={configToggle}
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
            className={
              allParams.view === "grid"
                ? "filterBar-gridBtn headerIconButtons filterBtnActive"
                : "filterBar-gridBtn headerIconButtons"
            }
          >
            <BsGridFill className="fiterBar-icon" />
          </button>

          <button
            type="button"
            name="line"
            onClick={setUpListView}
            aria-label="one item in line view"
            className={
              allParams.view === "line"
                ? "headerIconButtons filterBtnActive"
                : "headerIconButtons"
            }
          >
            <TbLayoutDistributeHorizontal className="fiterBar-icon" />
          </button>

          <div className="filterBar-divider"></div>
          <div className="filterBar-showIform">
            Showing 1–{allParams.limit} of {stats}{" "}
            results
          </div>
        </div>

        <div className="mc-c-flex">
          <label className="filterBar-fieldContainer ">
            <span>Show</span>
            <input
              type="number"
              name="showAmount"
              value={allParams.limit}
              autoComplete="off"
              className="filterBar-field"
              onChange={configPageLimit}
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
