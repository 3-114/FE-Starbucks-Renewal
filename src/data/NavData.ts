import { NavMenuType } from '@/types/Initial/InitialDataTypes';

export const MainNavData: NavMenuType[] = [
  {
    id: 1,
    title: '메인',
    link: '/',
  },
  {
    id: 2,
    title: '기획전',
    link: '/event',
  },
  {
    id: 3,
    title: '베스트',
    link: '/best',
  },
  {
    id: 4,
    title: '마이페이지',
    link: '/mypage',
  },
];

export const MainTagData: { id: number; title: string }[] = [
  {
    id: 1,
    title: 'TREND TAG',
  },
  {
    id: 2,
    title: 'Ways of Working',
  },
  {
    id: 3,
    title: 'Flower Market',
  },
  {
    id: 4,
    title: 'Love DAZE MD',
  },
  {
    id: 5,
    title: '스테디셀러 텀블러',
  },
];
