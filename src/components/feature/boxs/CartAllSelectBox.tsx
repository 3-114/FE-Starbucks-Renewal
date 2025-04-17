'use client';

import { useState, useTransition } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import {
  fetchCartProductUuids,
  ToggleCheckbox,
  getCartProductByUuid,
  removeItem,
} from '@/actions/cart-service';

export default function CartAllSelectBox({
  isChecked,
}: {
  isChecked: boolean;
}) {
  const [localChecked, setLocalChecked] = useState(isChecked);
  const [isPending, startTransition] = useTransition();

  const handleCheckChange = () => {
    const optimistic = !localChecked;
    setLocalChecked(optimistic);

    startTransition(async () => {
      try {
        const uuids = await fetchCartProductUuids();

        await Promise.all(
          uuids.map((uuid) => ToggleCheckbox(uuid.productUuid, optimistic))
        );

        await Promise.all(
          uuids.map((uuid) => getCartProductByUuid(uuid.productUuid))
        );
      } catch {
        console.error('전체 선택 실패 → 롤백');
        setLocalChecked(!optimistic);
        const uuids = await fetchCartProductUuids();
        await Promise.all(
          uuids.map((uuid) => getCartProductByUuid(uuid.productUuid))
        );
      }
    });
  };

  const handleDelete = () => {
    startTransition(async () => {
      try {
        const uuids = await fetchCartProductUuids();

        const results = await Promise.allSettled(
          uuids.map((uuid) => removeItem(uuid.productUuid))
        );

        const hasFailure = results.some(
          (result) => result.status === 'rejected'
        );

        if (hasFailure) {
          console.error('일부 삭제 실패 → 상태 복구');
          const uuids = await fetchCartProductUuids();
          await Promise.all(
            uuids.map((uuid) => getCartProductByUuid(uuid.productUuid))
          );
        } else {
          console.log('전체 삭제 성공');
        }
      } catch {
        console.error('전체 삭제 중 예외 발생 → 상태 복구');
        const uuids = await fetchCartProductUuids();
        await Promise.all(
          uuids.map((uuid) => getCartProductByUuid(uuid.productUuid))
        );
      }
    });
  };

  return (
    <div className="flex justify-between items-center py-6 px-4 bg-white text-sm font-medium">
      <div className="flex items-center gap-[10px]">
        <Checkbox
          checked={localChecked}
          onCheckedChange={handleCheckChange}
          variant="green"
          size="lg"
          disabled={isPending}
        />
        <p>전체 선택</p>
      </div>
      <button
        onClick={handleDelete}
        className="text-sm text-gray-500"
        disabled={isPending}
      >
        전체 삭제
      </button>
    </div>
  );
}
