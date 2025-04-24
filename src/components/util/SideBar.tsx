'use client';

import { cn } from '@/lib/utils';
import { ChevronRight, XIcon } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSidebarContext } from '@/context/SideBarContext';
import { Button } from '../ui/button';
import Image from 'next/image';

interface Category {
  mainCategoryUuid: string;
  mainCategoryName: string;
  mainCategoryImage: string;
}

export function Sidebar() {
  const { isOpen, setIsOpen } = useSidebarContext();
  const router = useRouter();
  const onClick = () => setIsOpen((prev) => !prev);
  const fetchedRef = useRef(false);
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = useCallback(async () => {
    if (fetchedRef.current) return;
    try {
      const res = await fetch(
        `${process.env.API_BASE_URL}/main-category/side-bar`
      );
      const data = await res.json();
      setCategories(data.result);
      fetchedRef.current = true;
    } catch (e) {
      console.error('카테고리 fetch 실패', e);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      fetchCategories();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, fetchCategories]);

  const handleRouteChange = (category: string | '/promotions' | '/best') => {
    setIsOpen(false);

    if (category.startsWith('/')) {
      router.push(category);
    } else if (category === '') {
      router.push('/products');
    } else {
      const encoded = encodeURIComponent(category);
      router.push(`/products?category=${encoded}`);
    }
  };

  return (
    <aside
      className={cn(
        'fixed top-0 left-0 z-[3000] size-full pt-4 transition-all overflow-hidden',
        'flex flex-col justify-between items-start',
        isOpen ? 'translate-x-0' : '-translate-x-full',
        'backdrop-filter backdrop-blur-xl backdrop-opacity-95 overflow-y-auto'
      )}
      style={{
        animation: 'gradient-bg 3s infinite',
        backgroundColor: 'white',
        backgroundSize: '200% 100%',
      }}
    >
      <header className="w-full flex justify-end items-start px-2 pt-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={onClick}
          color="transparent"
          aria-label="사이드바 닫기"
        >
          <XIcon className="w-5 h-5 text-gray-700" />
        </Button>
      </header>

      <div className="w-full py-4 px-4">
        <h1 className="text-xl font-bold">Welcome !</h1>
        <p className="text-sm text-gray-600 pt-1">
          온라인 스토어에서 오신 것을 환영합니다.
        </p>

        <div className="border-t border-gray-200 py-3 flex justify-end items-center mt-4">
          <p className="text-sm font-medium">전체 상품 보기</p>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleRouteChange('')}
            aria-label="전체 상품 보기"
            className="p-1"
            color="transparent"
          >
            <ChevronRight size={18} />
          </Button>
        </div>
      </div>

      <nav className="w-full pb-20 px-2">
        <div className="grid grid-cols-3 gap-3 py-2">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => handleRouteChange(category.mainCategoryName)}
            >
              <div className="bg-gray-100 rounded-full p-1 mb-1 relative w-28 h-28">
                <Image
                  src={category.mainCategoryImage}
                  alt={category.mainCategoryName}
                  fill
                  sizes="80px"
                  className="object-cover rounded-full"
                />
              </div>
              <p className="text-xs text-center">{category.mainCategoryName}</p>
            </div>
          ))}
        </div>
      </nav>

      <div className="w-full bg-gray-50">
        <Button
          variant="ghost"
          color="gray"
          className="flex justify-between items-center w-full py-3 px-4 border-t border-gray-200 rounded-none"
          onClick={() => handleRouteChange('/event')}
        >
          <p>기획전</p>
          <div className="flex items-center gap-2">
            <p className="text-xs text-gray-500">
              진행중인 기획전을 확인하세요.
            </p>
            <ChevronRight size={18} className="ml-1" />
          </div>
        </Button>

        <Button
          variant="ghost"
          className="flex justify-between items-center w-full py-3 px-4 border-t border-gray-200 rounded-none"
          onClick={() => handleRouteChange('/best')}
          color="gray"
        >
          <span>베스트</span>
          <div className="flex items-center gap-2">
            <p className="text-xs text-gray-500">
              스타벅스 베스트 MD 상품만 모아보세요.
            </p>
            <ChevronRight size={18} className="ml-1" />
          </div>
        </Button>
      </div>
    </aside>
  );
}
