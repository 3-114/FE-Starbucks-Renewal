'use client';

import BottomButtonWrapper from '@/components/layout/Footers/BottomButtonWrapper';
import { Button } from '@/components/ui/button';
import { SignupFormData } from '@/types/SignUpDataTypes';
import { useRouter } from 'next/navigation';

interface CompletionStepProps {
  formData: SignupFormData;
}

export default function CompletionStep({ formData }: CompletionStepProps) {
  const router = useRouter();
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
      <BottomButtonWrapper className="px-7">
        <Button
          type="button"
          variant="largetpye"
          size="lg"
          onClick={() => router.push('/')}
          className="w-full text-lg font-bold py-6"
        >
          다음
        </Button>
      </BottomButtonWrapper>
    </div>
  );
}
