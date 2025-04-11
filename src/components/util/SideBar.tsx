'use client';
import { cn } from '@/lib/utils';
import { XIcon } from 'lucide-react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSidebarContext } from '@/context/SideBarContext';

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
        'fixed top-0 left-0 z-[3000] size-full px-4 py-16 transition-all overflow-hidden',
        'flex flex-col justify-between items-start',
        isOpen ? 'translate-x' : '-translate-x-full',
        'backdrop-filter backdrop-blur-xl -backdrop-hue-rotate=90 backdrop-opacity-95'
      )}
      // style={{
      //   animation: 'gradient-bg 3s infinite',
      //   background: 'linear-gradient(35deg, #000000, #722AF8)',
      //   backgroundSize: '200% 100%',
      // }}
    >
      <header
        className="
        w-full
        z-[150]
        flex flex-col gap-[1rem] justify-start items-start
        "
      >
        <div className="flex justify-between items-center w-full">
          <h1
            className="w-[60px] lg:w-[80px] 2xl:w-[90px] h-auto"
            onClick={() => handleRouteChange('/')}
          >
            logo
            <span className="sr-only">TheUNIONGraphix</span>
          </h1>
          <button type="button" {...{ onClick }}>
            <XIcon className="stroke-black" />
          </button>
        </div>
      </header>
      <nav className="flex flex-col gap-3">
        <p
          onClick={() => handleRouteChange('/')}
          className="cursor-pointer text-white text-3xl font-semibold"
        >
          TUG
        </p>
        <p
          onClick={() => handleRouteChange('/about')}
          className="cursor-pointer text-white text-3xl font-semibold"
        >
          about
        </p>
        <p
          onClick={() => handleRouteChange('/works')}
          className="cursor-pointer text-white text-3xl font-semibold"
        >
          works
        </p>
        <p
          onClick={() => handleRouteChange('/service')}
          className="cursor-pointer text-white text-3xl font-semibold"
        >
          service
        </p>
        <p
          onClick={() => handleRouteChange('/contact')}
          className="cursor-pointer text-white text-3xl font-semibold"
        >
          contact
        </p>
      </nav>
      <div className="text-start">
        <p className="text-[#ffffff50]">© 2025, TheUNIONGraphix </p>
      </div>
    </aside>
  );
}
