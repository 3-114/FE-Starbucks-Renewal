import { MainFooterType } from "@/types/FooterDataTypes";

export const MainFooterDummyData: MainFooterType = {
    logoUrl: "/logoUrl.png",
    terms: [
      {
        id: 1,
        title: "개인정보처리방침",
        Link: '/',
      },
      {
        id: 2,
        title: "홈페이지 이용약관",
        Link: '/',
      },
      {
        id: 3,
        title: "스타벅스카드 이용약관",
        Link: '/',
      }
    ],
    companyInfo: {
      ceoName: "홍길동",
      businessNumber: "123-45-67890",
      phone: "02-1234-5678",
      dataProtectionOfficer: "김보호",
      eCommerceRegistrationNumber: "제2025-서울강남-00001호",
      address: "서울특별시 강남구 테헤란로 123"
    },
    copyright:
      "© 2025 Starbucks Coffee Company. All Rights Reserved. Hosting By (주)신세계아이앤씨"
  };