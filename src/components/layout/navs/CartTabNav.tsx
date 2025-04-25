'use client';

import { useEffect, useRef, useState, useTransition } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import { CartTabType } from '@/types/ResponseDataTypes';

export default function CartTabNav({
  CartTabData,
  generalCartCount,
  reservationCartCount,
}: {
  CartTabData: CartTabType[];
  generalCartCount: number;
  reservationCartCount: number;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const typeParam = searchParams.get('type') ?? 'general';

  const [activeTab, setActiveTab] = useState<number>(() => {
    return (
      CartTabData.find((tab) => tab.cartType === typeParam)?.id ??
      CartTabData[0].id
    );
  });

  const [isPending, startTransition] = useTransition();
  const [activeMenuStyle, setActiveMenuStyle] = useState({ left: 0, width: 0 });

  const menuRefs = useRef<(HTMLLIElement | null)[]>([]);
  const navRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const updateActiveTabStyle = () => {
      const activeMenu = menuRefs.current.find(
        (el, index) => CartTabData[index]?.id === activeTab && el
      );
      if (activeMenu && navRef.current) {
        const { offsetLeft, offsetWidth } = activeMenu;
        setActiveMenuStyle({ left: offsetLeft, width: offsetWidth });
      }
    };

    updateActiveTabStyle();
    window.addEventListener('resize', updateActiveTabStyle);
    return () => window.removeEventListener('resize', updateActiveTabStyle);
  }, [activeTab, CartTabData]);

  const handleTabClick = (tabId: number) => {
    if (tabId === activeTab || isPending) return;

    const nextTab = CartTabData.find((tab) => tab.id === tabId);
    if (!nextTab) return;

    const prevTabId = activeTab;
    setActiveTab(tabId);

    startTransition(async () => {
      try {
        router.push(`?type=${nextTab.cartType}`);
      } catch {
        console.error('탭 변경 실패. 이전 상태로 롤백합니다.');
        setActiveTab(prevTabId);
      }
    });
  };

  const getCountByType = (cartType: string): number => {
    switch (cartType) {
      case 'general':
        return generalCartCount;
      case 'reservation':
        return reservationCartCount;
      default:
        return 0;
    }
  };

  return (
    <nav>
      <ul
        ref={navRef}
        className="grid grid-cols-2 relative text-center shadow-sm"
      >
        {CartTabData.map((menu, index) => (
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
                {getCountByType(menu.cartType)}
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
    </nav>
  );
}
