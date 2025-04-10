'use client';

import { Plus, Minus } from 'lucide-react';
import { useTransition } from 'react';
// 서버 액션 import 추가 예정

export default function QuantityControl({
  id,
  quantity,
}: {
  id: string;
  quantity: number;
}) {
  const [isPending, startTransition] = useTransition();

  return (
    <div className="flex items-center border rounded-md">
      <button
        className="px-2 py-1"
        disabled={isPending || quantity <= 1}
        onClick={() => {
          startTransition(async () => {
            // 서버 액션 호출 예정
            // await updateQuantity(id, quantity - 1);
          });
        }}
      >
        <Minus size={16} />
      </button>
      <span className="px-3">{quantity}</span>
      <button
        className="px-2 py-1"
        disabled={isPending}
        onClick={() => {
          startTransition(async () => {
            // 서버 액션 호출 예정
            // await updateQuantity(id, quantity + 1);
          });
        }}
      >
        <Plus size={16} />
      </button>
    </div>
  );
}
