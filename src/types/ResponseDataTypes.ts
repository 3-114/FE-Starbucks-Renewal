export interface commonResponseType<T> {
  httpStatus: string;
  isSuccess: boolean;
  message: string;
  code: number;
  result: T;
}

export interface signInDataType {
  accessToken: string;
  name: string;
  uuid: string;
}

export type NavItem = {
  uuid: number;
  eventName: string;
};

export type AgreementItemsProp = {
  id: number;
  label: string;
  link?: string;
};

export type CartAddressProp = {
  id: string;
  name: string;
  zipcode: number;
  addressLine: string;
  isDefault?: boolean;
};

export type CartContextState = {
  address: CartAddressProp;
  selectedTab: 'general' | 'reservation';
};

export type ProductData = {
  uuid: string;
  name: string;
  image: string;
  checked: boolean;
  quantity: number;
  price: number;
  shippingFee: number;
};

export type CartTabType = {
  id: number;
  title: string;
  cartType: string;
};

export type AddressDetailType = {
  deliveryUuid: string;
  alias: string;
  recipient: string;
  zoneCode: string;
  mainAddress: string;
  detailAddress: string;
  defaultAddress: boolean;
  selected: boolean;
};
export interface shippingAddressType {
  deliveryUuid: string;
}

export interface CartItemType {
  quantity: number;
  selected: boolean;
  productName: string;
  productPrice: number;
  productThumbnailUrl: string;
  isThumbnail: boolean;
  shippingFee: number;
  cartUuid: string;
}

export type Thumbnail = {
  productId: number;
  productThumbnailUrl: string;
  productThumbnailIndex: number;
  isThumbnail: boolean;
};

export type ProductDetail = {
  productUuid: string;
  productName: string;
  brand: string;
  productPrice: number;
  productDescription: string;
  shippingFee: number;
  productStatus: '판매 중' | '판매 완료' | string;
  thumbnailList: Thumbnail[];
};

export type ProductDetailResponse = {
  result: ProductDetail;
};

export type ProductUuidItem = {
  productUuid: string;
};

export type Pageable = {
  pageNumber: number;
  pageSize: number;
  offset: number;
  paged: boolean;
  unpaged: boolean;
  sort: Sort;
};

export type Sort = {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
};

export type ProductListByCategoryResponse = {
  content: ProductUuidItem[];
  pageable: Pageable;
  totalElements: number;
  totalPages: number;
  last: boolean;
  size: number;
  number: number;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
};
