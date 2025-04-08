'user client';

import { StepProps } from '@/types/SignUpDataTypes';

import TermsAgreementStep from '@/components/steps/signup/TermsAgreementStep';
import VerifyMethodStep from '@/components/steps/signup/VerifyMethodStep';
import TossCertificationStep from '@/components/steps/signup/TossCertificationStep';

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
    content: ({ GoTo, Next }) => <VerifyMethodStep GoTo={GoTo} Next={Next} />,
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
    content: ({ Next }) => <TossCertificationStep Next={Next} />,
  },
  {
    id: 5,
    key: '',
    header: { type: 'OnlyIconHeader', props: { type: 'identification' } },
    content: ({ Next }) => <TossCertificationStep Next={Next} />,
  },
];
