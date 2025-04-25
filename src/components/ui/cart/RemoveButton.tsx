'use client';

import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { removeItem } from '@/actions/cart-service';
import { useCartStore } from '@/store/cartStore';
import { useTransition } from 'react';

export default function RemoveButton({
  cartUuid,
  cartType,
}: {
  cartUuid: string;
  cartType: string;
}) {
  const removed = useCartStore((state) => state.itemStates[cartUuid]?.removed);
  const setRemoved = useCartStore((state) => state.setRemoved);
  const [isPending, startTransition] = useTransition();

  const handleRemove = () => {
    setRemoved(cartUuid, true);

    startTransition(async () => {
      try {
        await removeItem(cartUuid, cartType);
      } catch (error) {
        console.error('삭제 실패 → 롤백', error);
        setRemoved(cartUuid, false);
      }
    });
  };

  if (removed) return null;

  return (
    <Button
      variant="ghost"
      size="icon"
      color="transparent"
      disabled={isPending}
      className="border size-6"
      onClick={handleRemove}
    >
      <X size={16} className="text-gray-400" />
    </Button>
  );
}
