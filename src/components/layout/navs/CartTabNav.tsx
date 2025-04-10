'use client';

import { useEffect, useRef, useState, useTransition } from 'react';
import { cn } from '@/lib/utils';
import { CartTabType } from '@/types/ResponseDataTypes';
import {
  fetchCartProductUuids,
  setActiveCartTab,
} from '@/actions/cart-service';

export default function CartTabNav({
  CartTabData,
}: {
  CartTabData: CartTabType[];
}) {
  const [activeTab, setActiveTab] = useState<number>(CartTabData[0].id);
  const [navData] = useState<CartTabType[]>(CartTabData);
  const [isPending, startTransition] = useTransition();

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
    return () => window.removeEventListener('resize', updateActiveTabStyle);
  }, [activeTab, navData]);

  const handleTabClick = (tabId: number) => {
    if (tabId === activeTab || isPending) return;

    const prevTabId = activeTab;
    setActiveTab(tabId);

    startTransition(async () => {
      try {
        await setActiveCartTab(prevTabId, tabId);
        await fetchCartProductUuids(tabId);
      } catch {
        console.error('탭 변경 실패. 이전 상태로 롤백합니다.');
        setActiveTab(prevTabId);
      }
    });
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
              'data-[state=active]:pb-[2px]',
              isPending && 'pointer-events-none text-gray-400',
              menu.id === activeTab && isPending && 'opacity-70'
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
