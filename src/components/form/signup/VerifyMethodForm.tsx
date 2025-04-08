'use client';

import { useState } from 'react';
import WelcomeUserCard from '@/components/shared/WelcomeUserCard';
import BottomButtonWrapper from '@/components/layout/Footers/BottomButtonWrapper';
import { ToggleSelectionBox } from '@/components/shared/ToggleBoxGroup';
import { CheckBoxGroup } from '@/components/shared/CheckBoxGroup';

import { Button } from '@/components/ui/button';
import { MessageCircle, Smartphone } from 'lucide-react';

export default function VerifyMethodForm({
  goTo,
}: {
  goTo: (stepKey: string) => void;
}) {
  const [verificationMethod, setVerificationMethod] = useState<
    'toss' | 'phone' | null
  >(null);

  const handleSelectMethod = (method: 'toss' | 'phone') => {
    setVerificationMethod(method);
  };

  const handleConfirm = () => {
    if (verificationMethod === 'toss') goTo('toss-certification');
    if (verificationMethod === 'phone') goTo('phone-certification');
  };

  return (
    <section className="px-7 pt-16">
      <WelcomeUserCard
        type="identification"
        className="text-[22px]/normal tracking-[-0.02em]"
      />
      <div className="space-y-3 mt-8 mb-36">
        <ToggleSelectionBox
          icon={<MessageCircle className="h-5 w-5" />}
          title="토스로 회원 가입하기"
          description="5초만에 간편하게 인증할 수 있어요."
          checked={verificationMethod === 'toss'}
          onClick={() => handleSelectMethod('toss')}
          className="shadow-md"
        />
        <ToggleSelectionBox
          icon={<Smartphone className="h-5 w-5" />}
          title="휴대폰 본인 인증하기"
          description="본인 명의 휴대폰으로 인증할 수 있어요."
          checked={verificationMethod === 'phone'}
          onClick={() => handleSelectMethod('phone')}
          data-selected={verificationMethod === 'phone'}
        />
      </div>
      <div
        data-selected={verificationMethod === 'phone'}
        className="font-semibold data-[selected=true]:hidden"
      >
        <CheckBoxGroup label="같은 인증방식을 다음에도 이용하기" />
      </div>
      <BottomButtonWrapper className="px-7 pt-5 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
        <Button
          type="button"
          variant="largetpye"
          size="lg"
          color={!verificationMethod ? 'gray' : 'default'}
          onClick={handleConfirm}
          disabled={!verificationMethod}
          className={`w-full text-lg font-bold py-6 ${
            !verificationMethod ? 'pointer-events-none' : ''
          }`}
        >
          다음
        </Button>
      </BottomButtonWrapper>
    </section>
  );
}
