import { GnbType } from '@/types/Initial/InitialDataTypes';
import ChevronLeft from '@/components/icon/ChevronLeft';
import AlignJustify from '@/components/icon/AlignJustify';
import Search from '@/components/icon/Search';
import ShoppingCart from '@/components/icon/ShoppingCart';
import X from '@/components/icon/X';

// import { ChevronLeft, AlignJustify, Search, ShoppingCart, X  } from 'lucide-react';

export const LoginHeaderData: GnbType[] = [
    {
        id: 1,
        title: 'back',
        icon: ChevronLeft,
      },
]

export const MainHeaderData: GnbType[] =  [
  {
      id: 1,
      title: 'hamburger',
      icon: AlignJustify,
    },
  {
      id: 2,
      title: 'search',
      icon: Search,
    },
  {
      id: 3,
      title: 'shoppingcart',
      icon: ShoppingCart,
    },
  {
      id: 4,
      title: 'x',
      icon: X ,
    },
]