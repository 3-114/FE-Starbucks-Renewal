'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState, useMemo } from 'react';

import { NavMenuType } from '@/types/Initial/InitialDataTypes';

export default function MainNav({NavData}: {NavData:NavMenuType[]}) {

  const pathName = usePathname();

  const [activeMenuStyle, setActiveMenuStyle] = useState({ left: 0, width: 0 });

  const menuRefs = useRef<(HTMLLIElement | null)[]>([]);

  const navDataMemo = useMemo(() => NavData, [NavData]);

  useEffect(() => {
    const activeMenu = menuRefs.current.find(
      (el, index) => navDataMemo[index].link === pathName && el
    );
  
    if (activeMenu) {
      const { offsetLeft, offsetWidth } = activeMenu;
      setActiveMenuStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [pathName, navDataMemo]);

  return (
    <div>
      <ul className="grid grid-cols-4 relative  text-center shadow-sm">
        {NavData.map((menu, index) => (
          <Link key={menu.id} href={menu.link}>
            <li
              ref={(el) => {
                menuRefs.current[index] = el;
              }}
              data-state={menu.link === pathName ? 'active' : 'inactive'}
              className={cn(
                'text-sm tracking-normal font-semibold py-[19px] text-nowrap cursor-pointer',
                'data-[state=active]:pb-[2px]'
              )}
            >
              {menu.title}
            </li>
          </Link>
        ))}
        <div
          className="absolute bottom-0 h-[3px] bg-[#01A862] transition-all duration-300"
          style={{ left: activeMenuStyle.left, width: activeMenuStyle.width }}
        ></div>
      </ul>
    </div>
  );
}
