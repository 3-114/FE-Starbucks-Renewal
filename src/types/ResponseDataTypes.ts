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
