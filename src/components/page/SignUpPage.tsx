'use client';

import { signupSteps } from '@/components/steps/signup';
import { useFunnel } from '@/hooks/useFunnel';
import OnlyIconHeader from '@/components/layout/headers/OnlyIconHeader';
import SignUpHeader from '@/components/layout/headers/SignUpHeader';

export default function SignUpPage() {
  const {
    stepIndex,
    formData,
    next: Next,
    prev: Prev,
    goTo: GoTo,
    onInput: Input,
  } = useFunnel();
  const current = signupSteps[stepIndex];

  if (!current) {
    return <main>존재하지 않는 단계입니다. 처음으로 돌아가 주세요.</main>;
  }

  const renderHeader = () => {
    if (!current.header) return null;

    const { type, props } = current.header;
    if (type === 'OnlyIconHeader') return <OnlyIconHeader {...props} />;
    if (type === 'SignUpHeader') return <SignUpHeader {...props} />;
    return null;
  };

  return (
    <>
      {renderHeader()}
      {current.content({
        formData,
        Input,
        Next,
        Prev,
        GoTo,
      })}
    </>
  );
}
