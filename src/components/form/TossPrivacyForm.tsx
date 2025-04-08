'use client';

import { CheckBoxGroup } from '@/components/shared/CheckBoxGroup';
import WelcomeUserCard from '@/components/shared/WelcomeUserCard';
import BottomButtonWrapper from '@/components/layout/Footers/BottomButtonWrapper';
import { Button } from '@/components/ui/button';
import { SignupFormData } from '@/types/SignUpDataTypes';

export default function TossPrivacyForm({
  goTo,
  onInput,
  onPrev,
}: {
  goTo: (stepKey: string) => void;
  onInput: (
    name: keyof SignupFormData,
    value: string | number | boolean
  ) => void;
  onPrev: () => void;
}) {
  const handleAgree = () => {
    onInput('verified', true);
    goTo('create-user');
  };

  return (
    <section className="px-7">
      <WelcomeUserCard type="tos" size="3.7rem" />
      <BottomButtonWrapper className="group space-y-2 px-7 pt-6">
        <CheckBoxGroup
          label="[필수] 개인정보 제 3자 제공 동의"
          className="text-lg font-bold border border-blue-600 data-[state=checked]:bg-transparent data-[state=checked]:border-transparent data-[state=checked]:text-blue-600"
          link="/"
          required
        />
        <Button
          variant="largetpye"
          size="agree"
          className="w-full group-has-[button[data-state=unchecked][data-required=true]]:bg-[#E0E0E0] group-has-[button[data-state=unchecked][data-required=true]]:pointer-events-none"
          color="blue"
          onClick={handleAgree}
        >
          동의하기
        </Button>
        <Button
          variant="largetpye"
          size="agree"
          className="w-full text-black shadow-none"
          color="white"
          onClick={onPrev}
        >
          닫기
        </Button>
      </BottomButtonWrapper>
    </section>
  );
}
