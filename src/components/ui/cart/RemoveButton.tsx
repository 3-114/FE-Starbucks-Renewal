'use client';

import { X } from 'lucide-react';
import { useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { removeItem, getCartProductByUuid } from '@/actions/cart-service';

export default function RemoveButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      variant="ghost"
      size="icon"
      color="transparent"
      disabled={isPending}
      className='border size-6'
      onClick={() => {
        startTransition(async () => {
          try {
            await removeItem(id);
            await getCartProductByUuid(id);
          } catch (e) {
            console.error('삭제 실패', e);
          }
        });
      }}
    >
      <X size={16} className='text-gray-400'/>
    </Button>
  );
}
