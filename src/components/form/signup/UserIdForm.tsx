'use client';

import React from 'react';
import { StepProps } from '@/types/SignUpDataTypes';

export default function UserIdForm({
  formData,
  handleInputChange,
  handleNextStep,
}: StepProps) {
  return (
    <div className="p-4">
      <h2 className="text-lg font-medium text-center mb-2">아이디 입력</h2>
      <p className="text-center mb-6">사용하실 아이디를 입력해주세요</p>

      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium">아이디</label>
        <input
          type="text"
          name="userId"
          value={formData.userId}
          onChange={handleInputChange}
          placeholder="영문, 숫자 5-20자"
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>

      <button
        className={`w-full py-3 rounded-lg ${
          formData.userId.length >= 5
            ? 'bg-green-600 text-white'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
        onClick={handleNextStep}
        disabled={formData.userId.length < 5}
      >
        다음
      </button>
    </div>
  );
}
