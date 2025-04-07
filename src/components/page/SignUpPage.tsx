'use client';

import { useState } from 'react';
import SignUpHeader from '@/components/layout/headers/SignUpHeader';
import IdentityVerificationForm from '@/components/form/signup/IdentityVerificationForm';
import UserIdForm from '@/components/form/signup/UserIdForm';
import PasswordStep from '@/components/form/signup/PasswordForm';
import CompletionForm from '@/components/form/signup/CompletionForm';
import { FormData } from '@/types/SignUpDataTypes';

export default function SignUpPage() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    verified: false,
    userId: '',
    password: '',
    passwordConfirm: '',
    agreeTerms: false,
  });

  const handleInputChange = (
    name: string,
    value: string | number | boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <IdentityVerificationForm
            formData={formData}
            handleInputChange={handleInputChange}
            handleNextStep={handleNextStep}
          />
        );
      case 2:
        return (
          <UserIdForm
            formData={formData}
            handleInputChange={handleInputChange}
            handleNextStep={handleNextStep}
          />
        );
      case 3:
        return (
          <PasswordStep
            formData={formData}
            handleInputChange={handleInputChange}
            handleNextStep={handleNextStep}
          />
        );
      case 4:
        return <CompletionForm formData={formData} />;
      default:
        return (
          <IdentityVerificationForm
            formData={formData}
            handleInputChange={handleInputChange}
            handleNextStep={handleNextStep}
          />
        );
    }
  };

  return (
    <main>
      <SignUpHeader step={currentStep} />
      {renderStep()}
    </main>
  );
}
