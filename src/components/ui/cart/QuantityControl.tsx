'use client';

import { useState, useTransition } from 'react';
import { Plus, Minus } from 'lucide-react';
import { updateQuantity, getProductByUuid } from '@/actions/cart-service';
import { Button } from '@/components/ui/button';

export default function QuantityControl({
  id,
  quantity,
}: {
  id: string;
  quantity: number;
}) {
  const [localQuantity, setLocalQuantity] = useState(quantity);
  const [isPending, startTransition] = useTransition();

  const changeQuantity = (newQty: number) => {
    const previousQty = localQuantity;

    setLocalQuantity(newQty); 

    startTransition(async () => {
      try {
        await updateQuantity(id, newQty);

        const updated = await getProductByUuid(id);
        setLocalQuantity(updated.quantity);
      } catch (e) {
        console.error('수량 업데이트 실패', e);
        setLocalQuantity(previousQty);
      }
    });
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="icon"
        className="border border-gray-500 size-6"
        color = "transparent"
        disabled={isPending || localQuantity <= 1}
        onClick={() => changeQuantity(localQuantity - 1)}
      >
        <Minus
          size={16}
          className={localQuantity <= 1 ? 'text-gray-500' : 'text-black'}
        />
      </Button>

      <span className="w-6 text-center text-base">{localQuantity}</span>

      <Button
        variant="outline"
        size="icon"
        className="border border-gray-500 size-6"
        color = "transparent"
        disabled={isPending}
        onClick={() => changeQuantity(localQuantity + 1)}
      >
        <Plus size={16} className="text-black" />
      </Button>
    </div>
  );
}
