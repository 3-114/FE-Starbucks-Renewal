'use client';

import { Checkbox } from '@/components/ui/checkbox';

interface CartSelectionHeaderProps {
  isChecked: boolean;
}

export default function CartSelectionHeader({
  isChecked,
}: CartSelectionHeaderProps) {
  const handleCheckChange = async () => {
    console.log('전체 선택 상태 변경 API 호출:', !isChecked);
    // 나중에 서버 액션으로 대체
  };

  const handleDelete = async () => {
    console.log('전체 삭제 API 호출');
    // 나중에 서버 액션으로 대체
  };

  return (
    <div className="flex justify-between items-center py-6 px-4 bg-white text-sm font-medium">
      <div className="flex items-center gap-[10px]">
        <Checkbox
          checked={isChecked}
          onCheckedChange={handleCheckChange}
          variant="green"
          size="lg"
        />
        <p>전체 선택</p>
      </div>
      <button onClick={handleDelete} className="text-sm text-gray-500">
        전체 삭제
      </button>
    </div>
  );
}
