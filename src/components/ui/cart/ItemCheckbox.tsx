'use client';

import { useState, useTransition } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { ToggleCheckbox } from '@/actions/cart-service';

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
      checked={checked}
      variant="green"
      size="md"
      disabled={isPending}
      onCheckedChange={(newChecked) => {
        const optimistic = Boolean(newChecked);
        setLocalChecked(optimistic);
        startTransition(async () => {
          try {
            await ToggleCheckbox(id, optimistic);
          } catch {
            setLocalChecked(!optimistic);
          }
        });
      }}
    />
  );
}
