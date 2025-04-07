'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { StepProps } from '@/types/SignUpDataTypes';
import WelcomeUserCard from '@/components/shared/WelcomeUserCard';
import BottomButtonWrapper from '@/components/layout/Footers/BottomButtonWrapper';
import { MessageCircle, Smartphone } from 'lucide-react';

const ToggleSelectionBox = ({
  icon,
  title,
  description,
  checked = false,
  onClick,
  className = '',
}) => {
  return (
    <div
      className={`
        relative flex items-center gap-3 rounded-lg border p-4 transition-all cursor-pointer
        ${checked ? 'border-primary bg-primary/5' : 'border-border bg-background hover:bg-accent/5'}
        ${className || ''}
      `}
      onClick={onClick}
    >
      <div
        className={`
        flex h-10 w-10 shrink-0 items-center justify-center rounded-full
        ${checked ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}
      `}
      >
        {icon}
      </div>

      <div className="flex-1">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      <div
        className={`
        flex h-5 w-5 items-center justify-center rounded-full border transition-all
        ${
          checked
            ? 'border-primary bg-primary text-primary-foreground'
            : 'border-muted-foreground/30 bg-transparent'
        }
      `}
      >
        {checked && (
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        )}
      </div>
    </div>
  );
};

export default function IdentityVerificationForm({
  formData,
  handleInputChange,
  handleNextStep,
}: StepProps) {
  const [verificationMethod, setVerificationMethod] = useState<
    'toss' | 'phone' | null
  >(null);

  // Update the verified status when a method is selected
  const handleSelectMethod = (method: 'toss' | 'phone') => {
    setVerificationMethod(method);
    // Update the formData.verified status
    handleInputChange({
      target: {
        name: 'verified',
        value: true,
      },
    });
  };

  return (
    <section className="px-7 pt-16">
      <WelcomeUserCard
        data={{
          avatarname: '인증을 진행해 주세요',
          greeting: '본인확인을 위해',
        }}
        className="text-[22px]/normal tracking-[-0.02em]"
      />
      <div className="space-y-3 mt-8">
        {/* Toggle Selection Boxes */}
        <ToggleSelectionBox
          icon={<MessageCircle className="h-5 w-5" />}
          title="토스로 회원 가입하기"
          description="5초만에 간편하게 인증할 수 있어요."
          checked={verificationMethod === 'toss'}
          onClick={() => handleSelectMethod('toss')}
        />

        <ToggleSelectionBox
          icon={<Smartphone className="h-5 w-5" />}
          title="휴대폰 본인 인증하기"
          description="본인 명의 휴대폰으로 인증할 수 있어요."
          checked={verificationMethod === 'phone'}
          onClick={() => handleSelectMethod('phone')}
        />
      </div>
      <BottomButtonWrapper className="px-7 pt-5 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
        <Button
          type="submit"
          variant="largetpye"
          size="lg"
          onClick={handleNextStep}
          disabled={!formData.verified}
          className="
            w-full text-lg font-bold py-6
            group-has-[button[data-state=unchecked][data-required=true]]:bg-[#E0E0E0]
            group-has-[button[data-state=unchecked][data-required=true]]:pointer-events-none
            "
        >
          다음
        </Button>
      </BottomButtonWrapper>
    </section>
  );
}
