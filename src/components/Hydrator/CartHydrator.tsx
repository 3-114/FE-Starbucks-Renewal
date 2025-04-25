'use client';

import { useEffect } from 'react';
import { useCartStore } from '@/store/cartStore';
import { CartItemType } from '@/types/ResponseDataTypes';

export default function CartHydrator({ items }: { items: CartItemType[] }) {
  const initialize = useCartStore((state) => state.initialize);

  useEffect(() => {
    const mapped = items.map((item) => ({
      uuid: item.cartUuid,
      checked: item.selected,
      removed: false,
    }));

    initialize(mapped);
  }, [items, initialize]);

  return null;
}
