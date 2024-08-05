import { Tooltip } from '@mui/material';
import { nanoid } from 'nanoid';
import { IoIosCloseCircle } from 'react-icons/io';
import { MdOutlineClose } from 'react-icons/md';

import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { deletFromFavotite } from '../../../redux/goods/goodsSlice';
import { IDataSlice } from '../../../types/types';
import './ModalFavorite.css';

interface IModalFavoriteProps {
  onClick: () => void;
}

const ModalFavorite: React.FC<IModalFavoriteProps> = ({ onClick }) => {
  const favorite = useAppSelector((state) => state.goods.favorite);

  const dispatch = useAppDispatch();

  const deleteFavorite = (item: IDataSlice) => {
    dispatch(deletFromFavotite({ id: item._id }));
  };

  return (
    <div className="modalFavoriteContainer">
      <div className="mf-top-title mc-c-flex">
        <h2>Favorite</h2>
        <Tooltip
          title="Close"
          placement="bottom"
          arrow
          enterDelay={500}
        >
          <button
            type="button"
            aria-label="close modal favorite items"
            className="mf-closeModalButton"
            onClick={onClick}
          >
            <MdOutlineClose style={{ width: '100%', height: '100%' }} />
          </button>
        </Tooltip>
      </div>
      {favorite.length !== 0 ? (
        <ul>
          {favorite.map((item: IDataSlice) => (
            <li
              className="mf-favoriteItem mc-c-flex"
              key={nanoid()}
            >
              <div className="mf-imageContainer">
                <img
                  src={item.pictures[0]}
                  className="image"
                  alt={item.title}
                  loading="lazy"
                />
              </div>
              <div className="mf-itemInfo">
                <h3>{item.title}</h3>
                <p>${item.price}</p>
              </div>
              <Tooltip
                title="Delete"
                placement="bottom"
                arrow
                enterDelay={500}
              >
                <button
                  type="button"
                  aria-label="delete item from favorite"
                  className="mf-deleteButton"
                  onClick={() => deleteFavorite(item)}
                >
                  <IoIosCloseCircle
                    style={{ width: '20px', height: '20px', fill: '#9F9F9F' }}
                  />
                </button>
              </Tooltip>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mf-absence">No one liked</p>
      )}
    </div>
  );
};

export default ModalFavorite;
