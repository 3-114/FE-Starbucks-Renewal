'use client';

import { SignupFormData } from '@/types/SignUpDataTypes';
import BottomButtonWrapper from '@/components/layout/Footers/BottomButtonWrapper';
import { Button } from '@/components/ui/button';

interface PasswordFormProps {
  formData: SignupFormData;
  handleInputChange: (name: keyof SignupFormData, value: string | number | boolean) => void;
  handleNextStep: () => void;
}

export default function PasswordForm({
  formData,
  handleInputChange,
  handleNextStep,
}: PasswordFormProps) {
  const isValid =
    formData.password.length >= 8 &&
    formData.password === formData.passwordConfirm;

  return (
    <div className="p-4">
      <h2 className="text-lg font-medium text-center mb-2">비밀번호 입력</h2>
      <p className="text-center mb-6">사용하실 비밀번호를 입력해주세요</p>

      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium">비밀번호</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={(e) => handleInputChange('password', e.target.value)}
          placeholder="영문, 숫자, 특수문자 조합 8-20자"
          className="w-full px-3 py-2 border rounded-lg mb-3"
        />

        <label className="block mb-1 text-sm font-medium">비밀번호 확인</label>
        <input
          type="password"
          name="passwordConfirm"
          value={formData.passwordConfirm}
          onChange={(e) => handleInputChange('passwordConfirm', e.target.value)}
          placeholder="비밀번호를 한번 더 입력해주세요"
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>

      <BottomButtonWrapper className="px-7 pt-5 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
        <Button
          type="submit"
          variant="largetpye"
          size="lg"
          onClick={handleNextStep}
          disabled={!isValid}
          className={`w-full text-lg font-bold py-6 ${
            !isValid ? 'bg-[#E0E0E0] pointer-events-none' : ''
          }`}
        >
          다음
        </Button>
      </BottomButtonWrapper>
    </div>
  );
}
