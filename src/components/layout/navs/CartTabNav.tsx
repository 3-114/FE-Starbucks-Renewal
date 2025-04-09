'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

type CartTabType = {
  id: number;
  title: string;
  count: number;
};

export default function CartTabNav({
  CartTabData,
}: {
  CartTabData: CartTabType[];
}) {
  const [activeTab, setActiveTab] = useState<number>(CartTabData[0].id);
  const [navData] = useState<CartTabType[]>(CartTabData);

  const [activeMenuStyle, setActiveMenuStyle] = useState({ left: 0, width: 0 });
  const menuRefs = useRef<(HTMLLIElement | null)[]>([]);
  const navRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const updateActiveTabStyle = () => {
      const activeMenu = menuRefs.current.find(
        (el, index) => navData[index].id === activeTab && el
      );

      if (activeMenu && navRef.current) {
        const { offsetLeft, offsetWidth } = activeMenu;
        setActiveMenuStyle({ left: offsetLeft, width: offsetWidth });
      }
    };

    updateActiveTabStyle();

    window.addEventListener('resize', updateActiveTabStyle);

    return () => {
      window.removeEventListener('resize', updateActiveTabStyle);
    };
  }, [activeTab, navData]);

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <ul
        ref={navRef}
        className="grid grid-cols-2 relative text-center shadow-sm"
      >
        {navData.map((menu, index) => (
          <li
            key={menu.id}
            ref={(el) => {
              menuRefs.current[index] = el;
            }}
            data-state={menu.id === activeTab ? 'active' : 'inactive'}
            className={cn(
              'text-sm tracking-normal font-semibold py-[19px] text-nowrap cursor-pointer relative',
              'data-[state=active]:pb-[2px]'
            )}
            onClick={() => handleTabClick(menu.id)}
          >
            <div className="inline-block relative">
              <span className="absolute -top-1 -right-5 bg-green-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                {menu.count}
              </span>
              <span>{menu.title}</span>
            </div>
          </li>
        ))}
        <div
          className="absolute bottom-0 h-[3px] bg-[#01A862] transition-all duration-300"
          style={{ left: activeMenuStyle.left, width: activeMenuStyle.width }}
        ></div>
      </ul>
    </div>
  );
}
