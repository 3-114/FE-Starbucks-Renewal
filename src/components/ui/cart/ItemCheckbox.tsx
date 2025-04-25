'use client';

import { useCartStore } from '@/store/cartStore';
import { Checkbox } from '@/components/ui/checkbox';
import { ToggleCheckbox } from '@/actions/cart-service';
import { useDebouncedFetch } from '@/hooks/useDebouncedFetch';

export default function ItemCheckbox({ cartUuid }: { cartUuid: string }) {
  const checked = useCartStore((state) => state.itemStates[cartUuid]?.checked);
  const setChecked = useCartStore((state) => state.setChecked);

  const [debouncedChecked, updateChecked] = useDebouncedFetch<boolean>(
    checked,
    async () => {
      await ToggleCheckbox(cartUuid);
    }
  );

  const handleChange = () => {
    const next = !debouncedChecked;
    setChecked(cartUuid, next);
    updateChecked(next);
  };

  return (
    <Checkbox
      checked={checked}
      variant="green"
      size="lg"
      onCheckedChange={handleChange}
    />
  );
}
