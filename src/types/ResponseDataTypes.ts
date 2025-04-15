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
  id: number;
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
  count: number;
};

export type AddressDetailType ={
  id: string;
  name: string;
  zipcode: number;
  addressLine: string;
  isDefault?: boolean;
}
