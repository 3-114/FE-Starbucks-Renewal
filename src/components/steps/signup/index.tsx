'user client';

import { StepProps } from '@/types/SignUpDataTypes';

import TermsAgreementStep from '@/components/steps/signup/TermsAgreementStep';
import VerifyMethodStep from '@/components/steps/signup/VerifyMethodStep';
import TossCertificationStep from '@/components/steps/signup/TossCertificationStep';
import TossThirdPartyStep from '@/components/steps/signup/TossThirdPartyStep';
import PhoneCertificationStep from '@/components/steps/signup/PhoneCertificationStep';
import CreateUserStep from '@/components/steps/signup/CreateUserStep';
import EmailInputStep from '@/components/steps/signup/EmailInputStep';

export const signupSteps: StepProps[] = [
  {
    id: 1,
    key: 'terms-agreement',
    content: ({ onNext }) => <TermsAgreementStep onNext={onNext} />,
  },
  {
    id: 2,
    key: 'verify-method',
    header: { type: 'SignUpHeader', props: { step: 1 } },
    content: ({ goTo }) => <VerifyMethodStep goTo={goTo} />,
  },
  {
    id: 3,
    key: 'toss-certification',
    header: { type: 'OnlyIconHeader', props: { type: 'identification' } },
    content: ({ onNext }) => <TossCertificationStep onNext={onNext} />,
  },
  {
    id: 4,
    key: 'toss-thirdparty',
    header: { type: 'OnlyIconHeader', props: { type: 'identification' } },
    content: ({ goTo, onInput, onPrev }) => (
      <TossThirdPartyStep goTo={goTo} onInput={onInput} onPrev={onPrev} />
    ),
  },
  {
    id: 5,
    key: 'phone-certification',
    header: { type: 'OnlyIconHeader', props: { type: 'identification' } },
    content: ({ onNext, onInput }) => (
      <PhoneCertificationStep onNext={onNext} onInput={onInput} />
    ),
  },
  {
    id: 6,
    key: 'create-user',
    header: { type: 'SignUpHeader', props: { step: 2 } },
    content: ({ formData, onInput, onNext }) => (
      <CreateUserStep formData={formData} onInput={onInput} onNext={onNext} />
    ),
  },
  {
    id: 7,
    key: 'email-input',
    header: { type: 'SignUpHeader', props: { step: 3 } },
    content: ({ formData, onInput, onNext }) => (
      <EmailInputStep formData={formData} onInput={onInput} onNext={onNext} />
    ),
  },
];
