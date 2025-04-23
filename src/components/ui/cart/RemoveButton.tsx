'use client';

import { X } from 'lucide-react';
import { useOptimistic, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { removeItem } from '@/actions/cart-service';

export default function RemoveButton({
  cartUuid,
  cartType,
}: {
  cartUuid: string;
  cartType: string;
}) {
  const [isRemoved, setOptimisticRemoved] = useOptimistic<boolean, boolean>(
    false,
    (_current, next) => next
  );
  const [isPending, startTransition] = useTransition();

  const handleRemove = () => {
    const prev = isRemoved;
    startTransition(async () => {
      setOptimisticRemoved(true);
      try {
        await removeItem(cartUuid, cartType);
      } catch (error) {
        console.error('삭제 실패:', error);
        setOptimisticRemoved(prev);
      }
    });
  };
  if (isRemoved) return null;

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
