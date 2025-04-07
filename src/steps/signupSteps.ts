import { StepProps } from '@/types/StepPropsTypes';
import { DummyAgreementItems } from '@/data/SignUpData';

import PrivacyForm from '@/components/form/PrivacyForm';
import IdentityVerificationForm from '@/components/form/signup/IdentityVerificationForm';
import TossCertification from '@/components/shared/TossCertification';
import TossPrivacyForm from '@/components/form/TossPrivacyForm';
import PhoneCertification from '@/components/shared/PhoneCertification';
import UserIdForm from '@/components/form/signup/UserIdForm';
import PasswordStep from '@/components/form/signup/PasswordForm';
import CompletionForm from '@/components/form/signup/CompletionForm';

import { useRouter } from 'next/navigation';
import WelcomeUserCard from '@/components/shared/WelcomeUserCard';

export const signupSteps: StepProps[] = [
  {
    id: 1,
    header: { type: 'OnlyIconHeader', props: { type: 'identification' } },
    content: ({ onNext }) => (
      <>
        <WelcomeUserCard type="privacyconsent" />
        <PrivacyForm data={DummyAgreementItems} onNext={onNext} />
      </>
    ),
  },
  {
    id: 2,
    header: { type: 'SignUpHeader', props: { step: 1 } },
    content: ({ formData, onInput, onNext }) => (
      <IdentityVerificationForm
        formData={formData}
        handleInputChange={onInput}
        handleNextStep={onNext}
      />
    ),
  },
  {
    id: 3,
    header: { type: 'OnlyIconHeader', props: { type: 'identification' } },
    content: ({ onNext }) => <TossCertification onNext={onNext} />,
  },
  {
    id: 4,
    header: { type: 'OnlyIconHeader', props: { type: 'identification' } },
    content: ({ onNext }) => (
      <section className="px-7">
        <WelcomeUserCard type="tos" size="3.7rem" />
        <TossPrivacyForm
          onAgree={onNext}
          onClose={() => router.back()}
        />
      </section>
    ),
  },
  {
    id: 5,
    header: { type: 'OnlyIconHeader', props: { type: 'identification' } },
    content: ({ onNext }) => (
      <section className="px-7">
        <PhoneCertification onNext={onNext} />
      </section>
    ),
  },
  {
    id: 6,
    header: { type: 'SignUpHeader', props: { step: 2 } },
    content: ({ formData, onInput, onNext }) => (
      <UserIdForm
        formData={formData}
        handleInputChange={onInput}
        handleNextStep={onNext}
      />
    ),
  },
  {
    id: 7,
    header: { type: 'SignUpHeader', props: { step: 3 } },
    content: ({ formData, onInput, onNext }) => (
      <PasswordStep
        formData={formData}
        handleInputChange={onInput}
        handleNextStep={onNext}
      />
    ),
  },
  {
    id: 8,
    header: { type: 'SignUpHeader', props: { step: 4 } },
    content: ({ formData }) => <CompletionForm formData={formData} />,
  },
];
