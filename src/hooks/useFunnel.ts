'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
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
    agreeTerms: false,
  });

  const reset = () => {
    setStepIndex(0);
    setFormData({
      verified: false,
      userId: '',
      password: '',
      passwordConfirm: '',
      agreeTerms: false,
    });
  };

  const next = () => setStepIndex((prev) => prev + 1);

  const onInput = (name: keyof SignupFormData, value: InputValue) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (!pathname.startsWith('/signup')) {
      reset();
    }
  }, [pathname]);

  return { stepIndex, formData, next, onInput };
};
