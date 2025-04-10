'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { useTransition } from 'react';

export default function ItemCheckbox({
  id,
  checked,
}: {
  id: string;
  checked: boolean;
}) {
  const [isPending, startTransition] = useTransition();

  return (
    <Checkbox
      checked={checked}
      variant="green"
      size="md"
      disabled={isPending}
      onCheckedChange={(newChecked) => {
        // 낙관적 UI 업데이트
        startTransition(async () => {
          // 서버 액션 호출 예정
          // await updateItemCheck(id, Boolean(newChecked));
        });
      }}
    />
  );
}
