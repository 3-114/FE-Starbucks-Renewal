'use client';

import { useOptimistic, useTransition } from 'react';
import { Plus, Minus } from 'lucide-react';
import { increaseQuantity, decreaseQuantity } from '@/actions/cart-service';
import { Button } from '@/components/ui/button';

export default function QuantityControl({
  cartUuid,
  quantity,
}: {
  cartUuid: string;
  quantity: number;
}) {
  const [optimisticQty, addOptimisticQty] = useOptimistic<number, number>(
    quantity,
    (_current, next) => next
  );
  const [isPending, startTransition] = useTransition();

  const changeQuantity = (delta: number) => {
    const previousQty = optimisticQty;
    const newQty = previousQty + delta;
    if (newQty < 1) return;
    startTransition(async () => {
      addOptimisticQty(newQty);
      try {
        if (delta > 0) {
          await increaseQuantity(cartUuid);
        } else {
          await decreaseQuantity(cartUuid);
        }
      } catch (error) {
        console.error('수량 변경 실패:', error);
        addOptimisticQty(previousQty);
      }
    });
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="icon"
        className="border border-gray-500 size-6"
        color="transparent"
        disabled={isPending || optimisticQty <= 1}
        onClick={() => changeQuantity(-1)}
      >
        <Minus
          size={16}
          className={optimisticQty <= 1 ? 'text-gray-500' : 'text-black'}
        />
      </Button>

      <span className="w-6 text-center text-base">{optimisticQty}</span>

      <Button
        variant="outline"
        size="icon"
        color="transparent"
        className="border border-gray-500 size-6"
        disabled={isPending}
        onClick={() => changeQuantity(1)}
      >
        <Plus size={16} className="text-black" />
      </Button>
    </div>
  );
}
