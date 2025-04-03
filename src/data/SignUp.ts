import { WelcomeUserCardProps } from '@/types/Initial/InitialDataTypes';
import { AgreementItemsProp } from '@/types/ResponseDataTypes';

export const DummyUserInfo: WelcomeUserCardProps = {
  avatarname: '환영합니다!',
  avatarUrl: '/avatarUrl.png',
  greeting: '고객님',
};

export const DummyAgreementItems: AgreementItemsProp[] = [
  {
    id: 1,
    label: '[필수] 이용약관 동의',
    content: '이용약관 상세 내용입니다. 서비스 이용 시 필수로 동의해야 합니다.',
  },
  {
    id: 2,
    label: '[필수] 개인정보 수집 및 이용 동의',
    content: '개인정보 수집 항목, 목적, 보유 기간 등을 포함한 상세 설명입니다.',
  },
  {
    id: 3,
    label: '[필수] 스타벅스 카드 이용약관',
    content: '카드 사용에 따른 책임, 한도, 유효기간 등의 정보를 포함합니다.',
  },
  {
    id: 4,
    label: '[필수] 마케팅 활용 수집 이용 동의',
    content: '마케팅 정보 수집에 대한 목적과 활용 범위에 대한 설명입니다.',
  },
];
