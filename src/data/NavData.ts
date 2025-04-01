import { NavMenuType,EventNavMenuType } from "@/types/Initial/InitialDataTypes"

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
]

export const EventNavData: EventNavMenuType[] = [
  {
      id: 1,
      title: 'Way of Working',
    },
  {
      id: 2,
      title: 'FLower Market',
    },
  {
      id: 3,
      title: 'LOVE DAZE',
    },
  {
      id: 4,
      title: 'NEW DAY, NEW PAGE',
    },
  {
      id: 5,
      title: '각인 큐레이션',
    },
  {
      id: 6,
      title: '조선, 커피를 만나다',
    },
]