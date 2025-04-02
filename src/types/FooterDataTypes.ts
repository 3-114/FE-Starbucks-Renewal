export interface MainFooterType {
    logoUrl: string;
    terms: TermsMeta[];
    companyInfo: CompanyInfo;
    copyright:string;
}

export interface TermsMeta {
    id: number;
    title: string;
    content: string;
    Link: '/',
  }

  export interface CompanyInfo {
    ceoName: string;
    businessNumber: string;
    phone: string;
    dataProtectionOfficer: string;
    eCommerceRegistrationNumber: string;
    address: string;
  }