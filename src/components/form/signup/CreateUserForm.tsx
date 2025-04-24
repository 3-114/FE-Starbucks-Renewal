'use client';

import BottomButtonWrapper from '@/components/layout/Footers/BottomButtonWrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

import { Check, Eye, EyeOff, X } from 'lucide-react';
import { SignupFormData } from '@/types/SignUpDataTypes';

export default function CreateUserForm({
  formData,
  onInput: updateFormData,
  onNext,
}: {
  formData: SignupFormData;
  onInput: (
    name: keyof SignupFormData,
    value: string | boolean | number
  ) => void;
  onNext: () => void;
}) {
  const [validation, setValidation] = useState({
    userId: null as null | boolean,
    password: null as null | boolean,
    passwordConfirm: null as null | boolean,
  });

  const [showPassword, setShowPassword] = useState({
    password: false,
    passwordConfirm: false,
  });

  const validateField = (name: keyof SignupFormData, value: string) => {
    if (value === '') {
      setValidation((prev) => ({ ...prev, [name]: null }));
      return;
    }

    if (name === 'userId') {
      const isValid = value.length >= 4 && value.length <= 13;
      setValidation((prev) => ({ ...prev, userId: isValid }));
    } else if (name === 'password') {
      const isValid = value.length >= 10 && value.length <= 20;
      setValidation((prev) => ({ ...prev, password: isValid }));

      if (formData.passwordConfirm) {
        const confirmValid = formData.passwordConfirm === value && value !== '';
        setValidation((prev) => ({ ...prev, passwordConfirm: confirmValid }));
      }
    } else if (name === 'passwordConfirm') {
      const confirmValid = value === formData.password && value !== '';
      setValidation((prev) => ({ ...prev, passwordConfirm: confirmValid }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateFormData(name as keyof SignupFormData, value);
    validateField(name as keyof SignupFormData, value);
  };

  const togglePasswordVisibility = (field: 'password' | 'passwordConfirm') => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const isFormValid = () => {
    return (
      validation.userId === true &&
      validation.password === true &&
      validation.passwordConfirm === true
    );
  };

  return (
    <section className="group w-full px-7 space-y-6">
      <div className="relative">
        <Input
          id="userId"
          name="userId"
          value={formData.userId}
          onChange={handleChange}
          onBlur={(e) => validateField('userId', e.target.value)}
          placeholder="아이디 (4~13자리 이내)"
          required
          minLength={4}
          maxLength={13}
          variant="login"
          className="pb-2"
          data-valid={validation.userId === true}
        />
        {validation.userId === true && (
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-500">
            <Check size={20} />
          </div>
        )}
        {validation.userId === false && (
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-500">
            <X size={20} />
          </div>
        )}
      </div>

      <div className="relative">
        <Input
          id="password"
          name="password"
          type={showPassword.password ? 'text' : 'password'}
          value={formData.password}
          onChange={handleChange}
          onBlur={(e) => validateField('password', e.target.value)}
          placeholder="비밀번호 (10~20자리 이내)"
          required
          minLength={10}
          maxLength={20}
          variant="login"
          className="pb-2 pr-12"
          data-valid={validation.password === true}
        />
        {formData.password.length > 0 && (
          <div
            className="absolute right-8 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
            onClick={() => togglePasswordVisibility('password')}
          >
            {showPassword.password ? <EyeOff size={18} /> : <Eye size={18} />}
          </div>
        )}
        {validation.password === true && (
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-500">
            <Check size={20} />
          </div>
        )}
        {validation.password === false && (
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-500">
            <X size={20} />
          </div>
        )}
      </div>

      <div className="relative">
        <Input
          id="passwordConfirm"
          name="passwordConfirm"
          type={showPassword.passwordConfirm ? 'text' : 'password'}
          value={formData.passwordConfirm}
          onChange={handleChange}
          onBlur={(e) => validateField('passwordConfirm', e.target.value)}
          placeholder="비밀번호 확인"
          required
          variant="login"
          className="pb-2 pr-12"
          data-valid={validation.passwordConfirm === true}
        />
        {formData.passwordConfirm.length > 0 && (
          <div
            className="absolute right-8 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
            onClick={() => togglePasswordVisibility('passwordConfirm')}
          >
            {showPassword.passwordConfirm ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </div>
        )}
        {validation.passwordConfirm === true && (
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-500">
            <Check size={20} />
          </div>
        )}
        {validation.passwordConfirm === false && (
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-red-500">
            <X size={20} />
          </div>
        )}
      </div>

      <BottomButtonWrapper className="px-7 pt-5 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
        <Button
          type="button"
          variant="largetpye"
          size="lg"
          onClick={onNext}
          className="w-full text-lg font-bold py-6 data-[valid=false]:bg-[#E0E0E0] data-[valid=false]:pointer-events-none"
          data-valid={isFormValid()}
        >
          다음
        </Button>
      </BottomButtonWrapper>
    </section>
  );
}
