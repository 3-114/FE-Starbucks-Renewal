'use client';

import { useState, useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SignupFormData } from '@/types/SignUpDataTypes';
import BottomButtonWrapper from '@/components/layout/Footers/BottomButtonWrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface EmailInputFormProps {
  formData: SignupFormData;
  onInput: (
    name: keyof SignupFormData,
    value: string | boolean | number
  ) => void;
  onNext: () => void;
}

export default function EmailInputForm({
  formData,
  onInput,
  onNext,
}: EmailInputFormProps) {
  const [localPart, setLocalPart] = useState('');
  const [domain, setDomain] = useState('');

  useEffect(() => {
    if (formData.email.includes('@')) {
      const [local, dom] = formData.email.split('@');
      setLocalPart(local);
      setDomain(dom);
    }
  }, [formData.email]);

  useEffect(() => {
    if (localPart && domain && domain !== 'custom') {
      onInput('email', `${localPart}@${domain}`);
    }
  }, [localPart, domain]);

  return (
    <section className="flex flex-col gap-4 px-7">
      <div className="flex items-center gap-2 w-full">
        <Input
          variant="login"
          placeholder="이메일"
          value={localPart}
          onChange={(e) => setLocalPart(e.target.value)}
        />
        <span className="text-lg">@</span>
        <Select value={domain} onValueChange={setDomain}>
          <SelectTrigger
            size="sm"
            className="border-none font-black text-[14px]"
          >
            <SelectValue placeholder="도메인 선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="naver.com">naver.com</SelectItem>
            <SelectItem value="gmail.com">gmail.com</SelectItem>
            <SelectItem value="daum.net">daum.net</SelectItem>
            <SelectItem value="hanmail.net">hanmail.net</SelectItem>
            <SelectItem value="custom">직접입력</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <BottomButtonWrapper className="px-7 pt-5 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
        <Button
          type="button"
          variant="largetpye"
          size="lg"
          onClick={onNext}
          className="w-full text-lg font-bold py-6 data-[valid=false]:bg-[#E0E0E0] data-[valid=false]:pointer-events-none"
        >
          다음
        </Button>
      </BottomButtonWrapper>
    </section>
  );
}
