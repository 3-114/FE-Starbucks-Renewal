'use client';

import { StepProps } from '@/types/SignUpDataTypes';

export default function CompletionStep({
  formData,
}: Pick<StepProps, 'formData'>) {
  return (
    <div className="p-4 text-center">
      <div className="mb-6">
        <svg
          className="mx-auto h-16 w-16 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      </div>
      <h2 className="text-xl font-bold mb-2">회원가입 완료!</h2>
      <p className="mb-6 text-gray-600">
        {formData.userId}님, 회원가입이 성공적으로 완료되었습니다.
      </p>
      <button className="w-full py-3 rounded-lg bg-green-600 text-white">
        로그인 페이지로 이동
      </button>
    </div>
  );
}
