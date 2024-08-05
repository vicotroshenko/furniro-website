export enum RoutKey {
  HOME = '/',
  SHOP = '/shop',
  SHOP_ID = '/shop/:id',
  SHOP_GRID = '?view=grid&page=1&limit=9',
  CONTACTS = 'contacts',
  CART = 'cart',
  CHECKOUT = 'checkout',
  CHECKOUT_ORDER = 'checkout/order',
  NOT_FOUND = '*',
  COMPARISON = '/comparison',
}

export enum DynamicParam {
  TAGS = 'tags',
  CATEGORY = 'category',
  VIEW = 'view',
  PAGE = 'page',
  LIMIT = 'limit',
}

export enum ViewParam {
  GRID = 'grid',
  LINE = 'line',
}

export enum Status {
  loading = 'loading',
  success = 'success',
  error = 'error',
}

export enum ItemStatus {
  NEW = 'new',
  DISCOUNT = 'discount',
}
