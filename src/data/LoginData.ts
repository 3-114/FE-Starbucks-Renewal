import {
  LoginUnderMenuType,
  WelcomeUserCardProps,
} from '@/types/Initial/InitialDataTypes';

export const LoginUnderMenuData: LoginUnderMenuType[] = [
  {
    id: 1,
    title: '아이디 찾기',
    Link: '/',
  },
  {
    id: 2,
    title: '비밀번호 찾기',
    Link: '/',
  },
  {
    id: 3,
    title: '회원가입',
    Link: '/privacyconsent',
  },
];

export const DummyUserInfo: WelcomeUserCardProps = {
  avatarname: '스타벅스입니다.',
  avatarUrl: '/avatarUrl.png',
  greeting: '안녕하세요.',
  message: '회원 서비스 이용을 위해 로그인 해주세요.',
};
