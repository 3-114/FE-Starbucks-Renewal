import { MainFooterType } from "@/types/FooterDataTypes";

export const MainFooterDummyData: MainFooterType = {
    logoUrl: "https://image.starbucks.co.kr/common/img/common/logo.png",
    terms: [
      {
        id: 1,
        title: "개인정보처리방침",
        content: "당사는 이용자의 개인정보를 중요시하며, 관련 법령을 준수합니다...",
        Link: '/',
      },
      {
        id: 2,
        title: "홈페이지 이용약관",
        content: "본 웹사이트 이용에 앞서 다음 약관을 반드시 확인하시기 바랍니다...",
        Link: '/',
      },
      {
        id: 3,
        title: "스타벅스카드 이용약관",
        content: "스타벅스카드 이용과 관련된 세부 내용은 다음과 같습니다...",
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