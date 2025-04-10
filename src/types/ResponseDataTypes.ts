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
