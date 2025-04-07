'use client';

import { StepProps } from '@/types/SignUpDataTypes';

export default function PasswordForm({
  formData,
  handleInputChange,
  handleNextStep,
}: StepProps) {
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
          onChange={handleInputChange}
          placeholder="영문, 숫자, 특수문자 조합 8-20자"
          className="w-full px-3 py-2 border rounded-lg mb-3"
        />

        <label className="block mb-1 text-sm font-medium">비밀번호 확인</label>
        <input
          type="password"
          name="passwordConfirm"
          value={formData.passwordConfirm}
          onChange={handleInputChange}
          placeholder="비밀번호를 한번 더 입력해주세요"
          className="w-full px-3 py-2 border rounded-lg"
        />
      </div>

      <button
        className={`w-full py-3 rounded-lg ${
          formData.password.length >= 8 &&
          formData.password === formData.passwordConfirm
            ? 'bg-green-600 text-white'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
        onClick={handleNextStep}
        disabled={
          formData.password.length < 8 ||
          formData.password !== formData.passwordConfirm
        }
      >
        다음
      </button>
    </div>
  );
}
