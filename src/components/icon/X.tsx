'use client';

import { useRouter } from 'next/navigation';
import { X as LucideX } from 'lucide-react';

export default function X() {
  const router = useRouter();
  return (
    <LucideX className="w-6 h-6 text-gray-700 " onClick={() => router.back()} />
  );
}
