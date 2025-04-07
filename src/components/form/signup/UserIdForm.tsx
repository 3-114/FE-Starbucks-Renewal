'use client';

import BottomButtonWrapper from '@/components/layout/Footers/BottomButtonWrapper';
import { Button } from '@/components/ui/button';
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
          onChange={(e) => handleInputChange('userId', e.target.value)}
          placeholder="영문, 숫자 5-20자"
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>

      <BottomButtonWrapper className="px-7 pt-5 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
        <Button
          type="submit"
          variant="largetpye"
          size="lg"
          onClick={handleNextStep}
          disabled={formData.userId.length < 5}
          className="
            w-full text-lg font-bold py-6
            group-has-[button[data-state=unchecked][data-required=true]]:bg-[#E0E0E0]
            group-has-[button[data-state=unchecked][data-required=true]]:pointer-events-none
            "
        >
          다음
        </Button>
      </BottomButtonWrapper>
    </div>
  );
}
