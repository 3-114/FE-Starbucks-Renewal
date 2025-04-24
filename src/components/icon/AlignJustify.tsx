'use client';

import { AlignJustify as LucideAlignJustify } from 'lucide-react';
import { useSidebarContext } from '@/context/SideBarContext';

export default function AlignJustify() {
  const { setIsOpen } = useSidebarContext();

  return (
    <button
      onClick={() => setIsOpen(true)}
      className="cursor-pointer p-1"
      aria-label="사이드바 열기"
    >
      <LucideAlignJustify className="w-6 h-6 text-gray-700" />
    </button>
  );
}
