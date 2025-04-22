'use client';

import { useEffect, useOptimistic, useTransition } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { ToggleCheckbox } from '@/actions/cart-service';

export default function ItemCheckbox({
  cartUuid,
  checked,
}: {
  cartUuid: string;
  checked: boolean;
}) {
  const [optimisticChecked, addOptimisticChecked] = useOptimistic<
    boolean,
    boolean
  >(checked, (_current, next) => next);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      addOptimisticChecked(checked);
    });
  }, [checked, addOptimisticChecked]);

  const handleChange = async (newChecked: boolean) => {
    startTransition(() => {
      addOptimisticChecked(newChecked);
    });
    try {
      await ToggleCheckbox(cartUuid);
    } catch (error) {
      console.error('Failed to toggle checkbox:', error);
      startTransition(() => {
        addOptimisticChecked(checked);
      });
    }
  };

  return (
    <Checkbox
      checked={optimisticChecked}
      variant="green"
      size="lg"
      disabled={isPending}
      onCheckedChange={handleChange}
    />
  );
}
