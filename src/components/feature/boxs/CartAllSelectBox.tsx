'use client';

import { useOptimistic, useTransition } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { allToggleCheckbox, removeAllItems } from '@/actions/cart-service';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cartStore';
import { useDebouncedFetch } from '@/hooks/useDebouncedFetch';

export default function CartAllSelectBox({ cartType }: { cartType: string }) {
  const isAllChecked = useCartStore((state) => state.isAllChecked());
  const setAllRemoved = useCartStore((state) => state.setAllRemoved);
  const toggleAll = useCartStore((state) => state.toggleAll);

  const [isRemovedAll, setRemovedAll] = useOptimistic<boolean, boolean>(
    false,
    (_current, next) => next
  );

  const [isPending, startTransition] = useTransition();

  const [debouncedAllChecked, updateAllChecked] = useDebouncedFetch<boolean>(
    isAllChecked,
    async () => {
      await allToggleCheckbox(cartType);
    }
  );

  const handleCheckChange = () => {
    const next = !debouncedAllChecked;
    toggleAll(next);
    updateAllChecked(next);
  };

  const handleDeleteAll = () => {
    setAllRemoved(true);
    startTransition(async () => {
      setRemovedAll(true);
      try {
        await removeAllItems(cartType);
      } catch (error) {
        console.error('전체 삭제 실패 → 롤백', error);
        setRemovedAll(false);
        setAllRemoved(true);
      }
    });
  };

  if (isRemovedAll) return null;

  return (
    <div className="flex justify-between items-center py-6 pl-4 pr-10 bg-white text-sm font-medium">
      <div className="flex items-center gap-[10px]">
        <Checkbox
          checked={isAllChecked}
          onCheckedChange={handleCheckChange}
          variant="green"
          size="lg"
          disabled={isPending}
        />
        <p>전체 선택</p>
      </div>
      <Button
        variant="ghost"
        size="icon"
        color="transparent"
        disabled={isPending}
        onClick={handleDeleteAll}
        className="text-sm text-gray-500"
      >
        전체 삭제
      </Button>
    </div>
  );
}
