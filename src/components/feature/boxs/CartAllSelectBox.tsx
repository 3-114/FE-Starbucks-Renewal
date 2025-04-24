'use client';

import { useEffect, useOptimistic, useTransition } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { allToggleCheckbox, removeAllItems } from '@/actions/cart-service';
import { Button } from '@/components/ui/button';
import { useAllSelected } from '@/context/AllSelectedContext';

export default function CartAllSelectBox({
  isChecked,
  cartType,
}: {
  isChecked: boolean;
  cartType: string;
}) {
  const [optimisticChecked, setOptimisticChecked] = useOptimistic<
    boolean,
    boolean
  >(isChecked, (_current, next) => next);

  const [isRemovedAll, setRemovedAll] = useOptimistic<boolean, boolean>(
    false,
    (_current, next) => next
  );

  const [isPending, startTransition] = useTransition();
  const { setAllSelected } = useAllSelected();

  useEffect(() => {
    setAllSelected(isChecked);
  }, [isChecked, setAllSelected]);

  const handleCheckChange = () => {
    const next = !optimisticChecked;
    setAllSelected(next);

    startTransition(async () => {
      setOptimisticChecked(next);
      try {
        await allToggleCheckbox(cartType);
      } catch (error) {
        console.error('전체 선택 실패 → 롤백', error);
        setOptimisticChecked(!next);
      }
    });
  };

  const handleDeleteAll = () => {
    startTransition(async () => {
      setRemovedAll(true);
      try {
        await removeAllItems(cartType);
      } catch (error) {
        console.error('전체 삭제 실패 → 롤백', error);
        setRemovedAll(false);
      }
    });
  };

  if (isRemovedAll) return null;

  return (
    <div className="flex justify-between items-center py-6 pl-4 pr-10 bg-white text-sm font-medium">
      <div className="flex items-center gap-[10px]">
        <Checkbox
          checked={optimisticChecked}
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
