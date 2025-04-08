'use client';

import { useState } from 'react';
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
  onInput,
  onNext,
}: {
  onInput: (
    name: keyof SignupFormData,
    value: string | boolean | number
  ) => void;
  onNext: () => void;
}) {
  const [localPart, setLocalPart] = useState('');
  const [domain, setDomain] = useState('');
  const [customDomain, setCustomDomain] = useState('');

  const handleNext = () => {
    const finalDomain = domain === 'custom' ? customDomain : domain;
    if (localPart && finalDomain) {
      const email = `${localPart}@${finalDomain}`;
      onInput('email', email);
      onNext();
    }
  };

  return (
    <section className="flex flex-col gap-4 px-7">
      <div className="flex items-center gap-2 w-full">
        {/* 로컬 파트 입력 */}
        <Input
          variant="login"
          placeholder="이메일"
          value={localPart}
          onChange={(e) => setLocalPart(e.target.value)}
        />
        <p className="text-lg">@</p>

        <div className="flex items-center gap-2 relative">
          <Input
            variant="login"
            placeholder="직접 입력"
            value={customDomain}
            onChange={(e) => setCustomDomain(e.target.value)}
            className={`h-9 w-[140px] text-sm px-2 transition-all duration-200 ${
              domain === 'custom' ? 'block' : 'hidden'
            }`}
          />
          <Select
            value={domain}
            onValueChange={(value) => {
              if (value !== 'custom') setCustomDomain('');
              setDomain(value);
            }}
          >
            <SelectTrigger
              size="sm"
              className={`border-none font-black text-[14px] justify-center ${
                domain === 'custom' ? 'w-7' : 'w-34'
              }`}
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
      </div>

      {/* 안내 문구 */}
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

      {/* 다음 버튼 */}
      <BottomButtonWrapper className="px-7 pt-5 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
        <Button
          type="button"
          variant="largetpye"
          size="lg"
          onClick={handleNext}
          className="w-full text-lg font-bold py-6"
          disabled={
            !localPart || !domain || (domain === 'custom' && !customDomain)
          }
        >
          다음
        </Button>
      </BottomButtonWrapper>
    </section>
  );
}
