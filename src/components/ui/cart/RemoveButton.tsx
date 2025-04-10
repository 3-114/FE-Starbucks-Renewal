'use client';

import { X } from 'lucide-react';
import { useTransition } from 'react';
// 서버 액션 import 추가 예정

export default function RemoveButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      className="text-gray-400"
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          // 서버 액션 호출 예정
          // await removeItem(id);
        });
      }}
    >
      <X size={18} />
    </button>
  );
}
