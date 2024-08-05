import { useEffect } from 'react';
import { Puff } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';

import {
  ItemBottomInform,
  ItemTopInform,
  Loader,
  NotFoundPage,
} from '../components';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { getOneById } from '../redux/goods/operations';

const ItemPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { itemById, status } = useAppSelector((state) => state.goods);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) {
      dispatch(getOneById({ id }));
    }
  }, [dispatch, id]);

  if (itemById._id === id && status === 'success') {
    return (
      <>
        <Loader />
        <div>
          <ItemTopInform item={itemById} />
          <ItemBottomInform item={itemById} />
        </div>
      </>
    );
  } else if (status === 'error') {
    return <NotFoundPage status="error" />;
  } else {
    return (
      <div
        style={{
          width: '100%',
          height: 'calc(100vh - 100px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Puff
          visible={true}
          height="100"
          width="100"
          color="#b88e2f"
          ariaLabel="item-loading"
        />
      </div>
    );
  }
};

export default ItemPage;
