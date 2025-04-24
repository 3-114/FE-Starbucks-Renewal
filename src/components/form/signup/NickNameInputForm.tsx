'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { CheckBoxGroup } from '@/components/shared/CheckBoxGroup';
import BottomButtonWrapper from '@/components/layout/Footers/BottomButtonWrapper';
import { Button } from '@/components/ui/button';
import { SignupFormData } from '@/types/SignUpDataTypes';

export default function NickNameInputForm({
  formData,
  onInput,
  onNext,
}: {
  formData: SignupFormData;
  onInput: (
    name: keyof SignupFormData,
    value: string | number | boolean
  ) => void;
  onNext: () => void;
}) {
  const [nickname, setNickname] = useState(formData.nickname);

  const handleNext = () => {
    if (nickname) {
      onInput('nickname', nickname);
      onNext();
    }
  };

  return (
    <section className="flex flex-col px-7 space-y-4">
      <CheckBoxGroup
        label="선택적 개인정보 수집동의 및 이용약관"
        link="/terms/nickname"
        required
        className="data-[state=checked]:text-green-600"
      />

      <Input
        variant="login"
        placeholder="닉네임 (한글 6자리 이내)"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        maxLength={6}
        className="text-sm"
      />

      <p className="text-xs text-muted-foreground">
        매장에서 주문한 음료를 찾으실 때, 등록한 닉네임으로 불러드립니다.
      </p>

      <BottomButtonWrapper className="px-7">
        <Button
          type="button"
          variant="largetpye"
          size="lg"
          disabled={!nickname}
          onClick={handleNext}
          className="w-full text-lg font-bold py-6"
        >
          다음
        </Button>
      </BottomButtonWrapper>
    </section>
  );
}
