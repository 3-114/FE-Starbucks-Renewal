'use client';
import React from 'react';

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
    <div className="flex justify-between items-center py-2 px-3 border-b">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckChange}
          className="h-5 w-5 text-green-500 rounded border-gray-300 focus:ring-green-500"
        />
        <span className="text-sm font-medium">전체 선택</span>
      </div>
      <button onClick={handleDelete} className="text-sm text-gray-500">
        전체 삭제
      </button>
    </div>
  );
}
