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
