'use client';

import { useOptimistic, useTransition } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { ToggleCheckbox, getProductByCartUuid } from '@/actions/cart-service';

export default function ItemCheckbox({
  cartUuid,
  checked,
}: {
  cartUuid: string;
  checked: boolean;
}) {
  const [optimisticChecked, addOptimisticChecked] = useOptimistic<boolean, boolean>(
    checked,
    (_current, next) => next
  );
  const [isPending, startTransition] = useTransition();

  const handleChange = async (newChecked: boolean) => {
    startTransition(() => {
            addOptimisticChecked(newChecked);
      });
  
    try {
      await ToggleCheckbox(cartUuid);
      await getProductByCartUuid(cartUuid);
    } catch {
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
