import { useAppSelector } from '../../hooks/useAppSelector';
import './Loader.css';

const Loader = () => {
  const { status } = useAppSelector((state) => state.goods);

  if (status === 'loading') {
    return (
      <div className="spinner-wrapper">
        <div className="spinner">
          <div className="sk-folding-cube">
            <div className="sk-cube1 sk-cube"></div>
            <div className="sk-cube2 sk-cube"></div>
            <div className="sk-cube4 sk-cube"></div>
            <div className="sk-cube3 sk-cube"></div>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Loader;
