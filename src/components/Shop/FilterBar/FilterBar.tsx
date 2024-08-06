import classNames from 'classnames';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { BsGridFill } from 'react-icons/bs';
import { TbLayoutDistributeHorizontal } from 'react-icons/tb';
import { VscSettings } from 'react-icons/vsc';
import { useSearchParams } from 'react-router-dom';

import { ViewParam } from '../../../constants';
import { useAppSelector } from '../../../hooks/useAppSelector';
import './FilterBar.css';
import FilterConfig from './FilterConfig/FilterConfig';

enum SortName {
  DEFAULT = 'default',
  PRICE = 'price',
  DISCOUNT = 'discount',
  NEW = 'new',
}

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
    let limit = stats < allParams.limit ? stats : allParams.limit;
    setSearchParams({ ...allParams, limit });
  }, [allParams, setSearchParams, allParams.limit, stats]);

  const handleChangeSort = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const { value } = event.target;
      let params = {};
      if (value === SortName.PRICE) {
        params = removeParameter({ ...allParams, page: '1', price: '-1' }, [
          'status',
        ]);
      } else if (value === SortName.NEW || value === SortName.DISCOUNT) {
        params = removeParameter({ ...allParams, page: '1', status: value }, [
          'price',
        ]);
      } else {
        params = removeParameter({ ...allParams, page: '1' }, [
          'price',
          'status',
        ]);
      }

      setSearchParams(params);
    },
    [allParams, setSearchParams]
  );

  const setUpListView = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const { name } = event.currentTarget;
      let params = {};
      if (name === ViewParam.LINE) {
        params = { view: ViewParam.LINE };
      } else {
        params = { view: ViewParam.GRID };
      }

      setSearchParams({ ...allParams, ...params });
    },
    [allParams, setSearchParams]
  );

  const configToggle = () => {
    setShowFilter((prev) => !prev);
  };

  const configPageLimit = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      let limit = stats < value ? stats : value;
      setSearchParams({ ...allParams, limit });
    },
    [allParams, stats, setSearchParams]
  );

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
                  ? 'headerIconButtons filterBtnActive'
                  : 'headerIconButtons'
              }
              onClick={configToggle}
            >
              <VscSettings className="fiterBar-icon" />
            </button>
            <span>Filter</span>
          </div>

          <button
            type="button"
            name={ViewParam.GRID}
            onClick={setUpListView}
            aria-label="gid view"
            className={classNames('filterBar-gridBtn headerIconButtons', {
              filterBtnActive: allParams.view === ViewParam.GRID,
            })}
          >
            <BsGridFill className="fiterBar-icon" />
          </button>

          <button
            type="button"
            name={ViewParam.LINE}
            onClick={setUpListView}
            aria-label="one item in line view"
            className={classNames('headerIconButtons', {
              filterBtnActive: allParams.view === ViewParam.LINE,
            })}
          >
            <TbLayoutDistributeHorizontal className="fiterBar-icon" />
          </button>

          <div className="filterBar-divider"></div>
          <div className="filterBar-showIform">
            Showing 1–{allParams.limit} of {stats} results
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
            <select
              className="filterBar-select"
              onChange={handleChangeSort}
            >
              <option value={SortName.DEFAULT}>Default</option>
              <option value={SortName.PRICE}>Price</option>
              <option value={SortName.NEW}>New</option>
              <option value={SortName.DISCOUNT}>Discount</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterBar;
