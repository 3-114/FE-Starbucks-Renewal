'use client';

import { signupSteps } from '@/steps/signupSteps';
import { useFunnel } from '@/hooks/useFunnel';
import OnlyIconHeader from '@/components/layout/headers/OnlyIconHeader';
import SignUpHeader from '@/components/layout/headers/SignUpHeader';

export default function SignUpPage() {
  const { stepIndex, formData, next, onInput } = useFunnel();
  const current = signupSteps[stepIndex];

  const renderHeader = () => {
    if (!current.header) return null;

    const { type, props } = current.header;
    if (type === 'OnlyIconHeader') return <OnlyIconHeader {...props} />;
    if (type === 'SignUpHeader') return <SignUpHeader {...props} />;
    return null;
  };

  return (
    <main>
      {renderHeader()}
      {current.content({ formData, onNext: next, onInput })}
    </main>
  );
}
