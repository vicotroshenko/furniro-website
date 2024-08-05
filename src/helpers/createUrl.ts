import { DynamicParam, RoutKey, ViewParam } from '../constants';

interface CreateUrlParams {
  view?: ViewParam.GRID | ViewParam.LINE;
  page?: number;
  limit?: number;
  tags?: string;
}

const createUrl = ({ view, page, limit, tags }: CreateUrlParams) => {
  const checkParam = (name: string, value: string | number | undefined) => {
    return value ? `${name}=${value}` : '';
  };
  const viewParam = checkParam(DynamicParam.VIEW, view);
  const pageParam = checkParam(DynamicParam.PAGE, page);
  const limitParam = checkParam(DynamicParam.LIMIT, limit);
  const tagParam = checkParam(DynamicParam.TAGS, tags);

  return (
    RoutKey.SHOP +
    '?' +
    viewParam +
    '&' +
    pageParam +
    '&' +
    limitParam +
    '&' +
    tagParam
  );
};

export default createUrl;
