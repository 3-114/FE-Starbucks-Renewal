'use client';

import { useState } from 'react';
import SignUpHeader from '@/components/layout/headers/SignUpHeader';
import IdentityVerificationForm from '@/components/form/signup/IdentityVerificationForm';
import UserIdForm from '@/components/form/signup/UserIdForm';
import PasswordStep from '@/components/form/signup/PasswordForm';
import CompletionForm from '@/components/form/signup/CompletionForm';
import { FormData } from '@/types/SignUpDataTypes';
import PrivacyForm from '@/components/form/PrivacyForm';
import WelcomeUserCard from '@/components/shared/WelcomeUserCard';
import OnlyIconHeader from '@/components/layout/headers/OnlyIconHeader';

import { DummyAgreementItems } from '@/data/SignUpData';
import TossCertification from '@/components/shared/TossCertification';
import TossPrivacyForm from '@/components/form/TossPrivacyForm';
import PhoneCertification from '@/components/shared/PhoneCertification';
import router from 'next/router';

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
          <>
            <OnlyIconHeader type="identification" />
            <WelcomeUserCard type="privacyconsent" />
            <PrivacyForm data={DummyAgreementItems} onNext={handleNextStep} />
          </>
        );
      case 2:
        return (
          <>
            <SignUpHeader step={1} />
            <IdentityVerificationForm
              formData={formData}
              handleInputChange={handleInputChange}
              handleNextStep={handleNextStep}
            />
          </>
        );
      case 3:
        return (
          <>
            <OnlyIconHeader type="identification" />
            <TossCertification onNext={handleNextStep} />
          </>
        );
      case 4:
        return (
          <>
            <OnlyIconHeader type="identification" />
            <section className="px-7">
              <WelcomeUserCard type="tos" size="3.7rem" />
              <TossPrivacyForm
                onAgree={handleNextStep}
                onClose={() => router.back()}
              />
            </section>
          </>
        );
      case 5:
        return (
          <>
            <OnlyIconHeader type="identification" />
            <section className="px-7">
              <PhoneCertification onNext={handleNextStep} />
            </section>
          </>
        );
      case 6:
        return (
          <>
            <SignUpHeader step={2} />
            <UserIdForm
              formData={formData}
              handleInputChange={handleInputChange}
              handleNextStep={handleNextStep}
            />
          </>
        );
      case 7:
        return (
          <>
            <SignUpHeader step={3} />
            <PasswordStep
              formData={formData}
              handleInputChange={handleInputChange}
              handleNextStep={handleNextStep}
            />
          </>
        );
      case 8:
        return (
          <>
            <SignUpHeader step={4} />
            <CompletionForm formData={formData} />;
          </>
        );
      default:
        return (
          <>
            <OnlyIconHeader type="identification" />
            <WelcomeUserCard type="privacyconsent" />
            <PrivacyForm data={DummyAgreementItems} onNext={handleNextStep} />
          </>
        );
    }
  };

  return <main>{renderStep()}</main>;
}
