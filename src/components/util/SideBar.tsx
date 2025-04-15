'use client';
import { cn } from '@/lib/utils';
import { ChevronRight, XIcon } from 'lucide-react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSidebarContext } from '@/context/SideBarContext';
import { Button } from '../ui/button';
import Image from 'next/image';

const categories = [
  {
    name: '텀블러/보온병',
    image: '/avatarUrl.png',
    link: '/products/tumblers',
  },
  { name: '머그/컵', image: '/avatarUrl.png', link: '/products/mugs' },
  {
    name: '라이프스타일',
    image: '/avatarUrl.png',
    link: '/products/lifestyle',
  },
  {
    name: '티/커피용품',
    image: '/avatarUrl.png',
    link: '/products/tea-coffee',
  },
  { name: '케이크', image: '/avatarUrl.png', link: '/products/cakes' },
  { name: '초콜릿/스낵', image: '/avatarUrl.png', link: '/products/snacks' },
  { name: '세트', image: '/avatarUrl.png', link: '/products/sets' },
];

export function Sidebar() {
  const { isOpen, setIsOpen } = useSidebarContext();
  const route = useRouter();
  const onClick = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const handleRouteChange = (link: string) => {
    setIsOpen(false);
    route.push(link);
  };

  return (
    <aside
      className={cn(
        'fixed top-0 left-0 z-[3000] size-full pt-4 transition-all overflow-hidden',
        'flex flex-col justify-between items-start',
        isOpen ? 'translate-x-0' : '-translate-x-full',
        'backdrop-filter backdrop-blur-xl -backdrop-hue-rotate=90 backdrop-opacity-95'
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
          <p className="text-sm font-medium mr-4">전체 상품 보기</p>
          <ChevronRight size={18} />
        </div>
      </div>

      <nav className="w-full pb-20 px-2">
        <div className="grid grid-cols-3 gap-3 py-2">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => handleRouteChange(category.link)}
            >
              <div className="bg-gray-100 rounded-full p-1 mb-1 relative w-28 h-28">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="80px"
                  className="object-cover rounded-full"
                />
              </div>
              <p className="text-xs text-center">{category.name}</p>
            </div>
          ))}
        </div>
      </nav>

      <div className="w-full bg-gray-50">
        <Button
          variant="ghost"
          color="gray"
          className="flex justify-between items-center w-full py-3 px-4 border-t border-gray-200 rounded-none"
          onClick={() => handleRouteChange('/promotions')}
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
