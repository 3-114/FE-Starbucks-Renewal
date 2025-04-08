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

export default function EmailInputForm({
  formData,
  onInput,
  onNext,
}: {
  formData: SignupFormData;
  onInput: (
    name: keyof SignupFormData,
    value: string | boolean | number
  ) => void;
  onNext: () => void;
}) {
  const [localPart, setLocalPart] = useState('');
  const [domain, setDomain] = useState('');
  const [customDomain, setCustomDomain] = useState('');

  useEffect(() => {
    if (formData.email.includes('@')) {
      const [local, dom] = formData.email.split('@');
      setLocalPart(local);
      setDomain(dom);
    }
  }, [formData.email]);

  useEffect(() => {
    const finalDomain = domain === 'custom' ? customDomain : domain;
    if (localPart && finalDomain) {
      onInput('email', `${localPart}@${finalDomain}`);
    }
  }, [localPart, domain, customDomain, onInput]);

  return (
    <section className="flex flex-col gap-4 px-7">
      <div className="flex items-center gap-2 w-full">
        <Input
          variant="login"
          placeholder="이메일"
          value={localPart}
          onChange={(e) => setLocalPart(e.target.value)}
        />
        <p className="text-lg">@</p>

        {domain === 'custom' ? (
          <div className="flex items-center gap-2">
            <Input
              variant="login"
              placeholder="직접 입력"
              value={customDomain}
              onChange={(e) => setCustomDomain(e.target.value)}
              className="h-9 w-[140px] text-sm px-2"
            />
            <Select
              value={domain}
              onValueChange={(value) => {
                setDomain(value);
                if (value !== 'custom') setCustomDomain('');
              }}
            >
              <SelectTrigger
                size="sm"
                className="border-none font-black text-[14px] w-7 justify-center"
              >
                <SelectValue />
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
        ) : (
          <Select
            value={domain}
            onValueChange={(value) => {
              setDomain(value);
              if (value !== 'custom') setCustomDomain('');
            }}
          >
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
        )}
      </div>
      <ul className="text-xs text-[#6B6B6B] leading-snug space-y-1 mt-2 pl-4 list-disc">
        <li>
          스타벅스 코리아의 새로운 서비스와 최신 이벤트 정보를 이메일로
          보내드려요.
        </li>
        <li>
          주요 공지사항 및 이벤트 당첨안내 등 일부 소식은 수신동의 여부에
          관계없이 발송됩니다.
        </li>
      </ul>

      <BottomButtonWrapper className="px-7 pt-5 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
        <Button
          type="button"
          variant="largetpye"
          size="lg"
          onClick={onNext}
          className="w-full text-lg font-bold py-6"
          disabled={
            !localPart || (domain === 'custom' ? !customDomain : !domain)
          }
        >
          다음
        </Button>
      </BottomButtonWrapper>
    </section>
  );
}
