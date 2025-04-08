'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { signupSteps } from '@/components/steps/signup';
import { SignupFormData } from '@/types/SignUpDataTypes';

type InputValue = string | boolean | number;

export const useFunnel = () => {
  const pathname = usePathname();
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [formData, setFormData] = useState<SignupFormData>({
    verified: false,
    userId: '',
    password: '',
    passwordConfirm: '',
    email: '',
    nickname: '',
  });

  const reset = () => {
    setStepIndex(0);
    setFormData({
      verified: false,
      userId: '',
      password: '',
      passwordConfirm: '',
      email: '',
      nickname: '',
    });
  };

  const next = () => setStepIndex((prev) => prev + 1);

  const prev = () => setStepIndex((curr) => (curr > 0 ? curr - 1 : curr));

  const goTo = (stepKey: string) => {
    const index = signupSteps.findIndex((step) => step.key === stepKey);
    if (index !== -1) {
      setStepIndex(index);
    }
  };

  const onInput = (name: keyof SignupFormData, value: InputValue) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (!pathname.startsWith('/signup')) {
      reset();
    }
  }, [pathname]);

  return {
    stepIndex,
    formData,
    onNext: next,
    onPrev: prev,
    goTo,
    onInput,
  };
};
