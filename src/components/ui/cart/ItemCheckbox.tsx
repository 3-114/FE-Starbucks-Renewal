'use client';

import { useState, useTransition } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { ToggleCheckbox, getCartProductByUuid } from '@/actions/cart-service';

export default function ItemCheckbox({
  id,
  checked,
}: {
  id: string;
  checked: boolean;
}) {
  const [isPending, startTransition] = useTransition();
  const [localChecked, setLocalChecked] = useState(checked);

  return (
    <Checkbox
      checked={localChecked}
      variant="green"
      size="lg"
      disabled={isPending}
      onCheckedChange={(newChecked) => {
        const optimistic = Boolean(newChecked);
        setLocalChecked(optimistic);

        startTransition(async () => {
          try {
            await ToggleCheckbox(id, optimistic);

            const updatedProduct = await getCartProductByUuid(id);
            setLocalChecked(updatedProduct);
          } catch {
            setLocalChecked(!optimistic);
          }
        });
      }}
    />
  );
}
