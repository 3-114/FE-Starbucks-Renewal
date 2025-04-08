'user client';

import { StepProps } from '@/types/SignUpDataTypes';

import TermsAgreementStep from '@/components/steps/signup/TermsAgreementStep';
import VerifyMethodStep from '@/components/steps/signup/VerifyMethodStep';
import TossCertificationStep from '@/components/steps/signup/TossCertificationStep';
import TossThirdPartyStep from '@/components/steps/signup/TossThirdPartyStep';
import PhoneCertificationStep from '@/components/steps/signup/PhoneCertificationStep';
import CreateUserStep from '@/components/steps/signup/CreateUserStep';

export const signupSteps: StepProps[] = [
  {
    id: 1,
    key: 'terms-agreement',
    content: ({ Next }) => <TermsAgreementStep onNext={Next} />,
  },
  {
    id: 2,
    key: 'verify-method',
    header: { type: 'SignUpHeader', props: { step: 1 } },
    content: ({ GoTo }) => <VerifyMethodStep GoTo={GoTo} />,
  },
  {
    id: 3,
    key: 'toss-certification',
    header: { type: 'OnlyIconHeader', props: { type: 'identification' } },
    content: ({ Next }) => <TossCertificationStep Next={Next} />,
  },
  {
    id: 4,
    key: 'toss-thirdparty',
    header: { type: 'OnlyIconHeader', props: { type: 'identification' } },
    content: ({ GoTo, Input, Prev }) => (
      <TossThirdPartyStep GoTo={GoTo} Input={Input} Prev={Prev} />
    ),
  },
  {
    id: 5,
    key: 'phone-certification',
    header: { type: 'OnlyIconHeader', props: { type: 'identification' } },
    content: ({ Next, Input }) => (
      <PhoneCertificationStep Next={Next} Input={Input} />
    ),
  },
  {
    id: 6,
    key: 'create-user',
    header: { type: 'SignUpHeader', props: { step: 2 } },
    content: ({ formData, Input, Next }) => (
      <CreateUserStep formData={formData} Input={Input} Next={Next} />
    ),
  },
];
