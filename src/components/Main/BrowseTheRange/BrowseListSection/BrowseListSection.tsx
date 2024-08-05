import { ViewParam } from '../../../../constants';
import { createUrl } from '../../../../helpers';
import rangeImage1 from '../../../../images/jpeg/range1.jpg';
import rangeImage2 from '../../../../images/jpeg/range2.jpg';
import rangeImage3 from '../../../../images/jpeg/range3.jpg';
import RangeItem from '../RangeItem/RangeItem';
import './BrowseListSection.css';

const BrowseListSection = () => {
  return (
    <section className="browseSection">
      <div className="browseSectionContainer">
        <h2>Browse The Range</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <ul className="browseList">
          <RangeItem
            image={rangeImage1}
            text="dining"
            link={createUrl({
              view: ViewParam.GRID,
              page: 1,
              limit: 9,
              tags: 'dining',
            })}
          />
          <RangeItem
            image={rangeImage2}
            text="living"
            link={createUrl({
              view: ViewParam.GRID,
              page: 1,
              limit: 9,
              tags: 'living',
            })}
          />
          <RangeItem
            image={rangeImage3}
            text="bedroom"
            link={createUrl({
              view: ViewParam.GRID,
              page: 1,
              limit: 9,
              tags: 'bedroom',
            })}
          />
        </ul>
      </div>
    </section>
  );
};

export default BrowseListSection;
