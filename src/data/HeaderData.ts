import { GnbType,MainHeaderGubType } from '@/types/Initial/InitialDataTypes';
import { ChevronLeft,AlignJustify,Search,ShoppingCart,X  } from 'lucide-react';

export const LoginHeaderData: GnbType[] = [
    {
        id: 1,
        title: 'back',
        icon: ChevronLeft,
      },
]

export const MainHeaderData: MainHeaderGubType = 
  {
    id: 1,
    title: '온라인스토어',
    hamburgericon: AlignJustify,
    searchicon: Search,
    carticon: ShoppingCart,
    xicon: X,
  }