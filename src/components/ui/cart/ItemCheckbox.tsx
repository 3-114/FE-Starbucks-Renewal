'use client';

import { useCartStore } from '@/store/cartStore';
import { Checkbox } from '@/components/ui/checkbox';
import { ToggleCheckbox } from '@/actions/cart-service';
import { useTransition } from 'react';

export default function ItemCheckbox({ cartUuid }: { cartUuid: string }) {
  const checked = useCartStore((state) => state.itemStates[cartUuid]?.checked);
  const setChecked = useCartStore((state) => state.setChecked);

  const [isPending, startTransition] = useTransition();

  const handleChange = async (newChecked: boolean) => {
    setChecked(cartUuid, newChecked);

    startTransition(async () => {
      try {
        await ToggleCheckbox(cartUuid);
      } catch (error) {
        console.error('토글 실패 → 롤백', error);
        setChecked(cartUuid, !newChecked);
      }
    });
  };

  return (
    <Checkbox
      checked={checked}
      variant="green"
      size="lg"
      disabled={isPending}
      onCheckedChange={handleChange}
    />
  );
}
