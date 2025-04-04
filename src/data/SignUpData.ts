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
    link: '/',
  },
  {
    id: 2,
    label: '[필수] 개인정보 수집 및 이용 동의',
    link: '/',
  },
  {
    id: 3,
    label: '[필수] 스타벅스 카드 이용약관',
    link: '/',
  },
  {
    id: 4,
    label: '[필수] 마케팅 활용 수집 이용 동의',
    link: '/',
  },
];

export const DummyTossInfo: WelcomeUserCardProps = {
  avatarname: '토스로 인증할께요',
  avatarUrl: '/TossLogo.png',
  greeting: '스타벅스에서',
};
