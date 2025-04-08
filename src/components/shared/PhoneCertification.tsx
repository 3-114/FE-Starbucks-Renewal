'use client';

import { CheckBoxGroup } from '@/components/shared/CheckBoxGroup';
import BottomButtonWrapper from '@/components/layout/Footers/BottomButtonWrapper';
import { LinkBoxGroup } from '@/components/shared/LinkBoxGroup';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { SignupFormData } from '@/types/SignUpDataTypes';

export default function PhoneCertification({
  onNext,
  onInput,
}: {
  onNext: () => void;
  onInput: (
    name: keyof SignupFormData,
    value: string | number | boolean
  ) => void;
}) {
  const handleNext = () => {
    onInput('verified', true);
    onNext();
  };

  return (
    <section className="group tracking-tighter px-7">
      <p className="font-[Pretendard] text-[22px] font-medium leading-[30px] text-black pt-16 pb-6">
        본인확인을 위해
        <br />
        인증을 진행해 주세요
      </p>

      <div className="text-sm/normal font-semibold tracking-tighter">
        <CheckBoxGroup
          label="[필수] 본인 인증 서비스 약관 전체 동의"
          className=""
          required
        />
        <LinkBoxGroup
          label="휴대폰 본인 인증 서비스 이용약관 동의"
          link="/"
          className="font-medium"
        />
        <LinkBoxGroup
          label="휴대폰 통신사 이용약관 동의"
          link="/"
          className="font-medium"
        />
        <LinkBoxGroup
          label="개인정보 제공 및 이용 동의"
          link="/"
          className="font-medium"
        />
        <LinkBoxGroup
          label="고유식별정보 처리"
          link="/"
          className="font-medium"
        />
      </div>

      <form action="" className="space-y-4">
        <hr className="border-[1px]" />
        <Input placeholder="이름" variant="login" />
        <Input placeholder="생년월일" variant="login" />
        <div className="w-full flex items-center space-x-3">
          <Select defaultValue="skt">
            <SelectTrigger className="w-1/3 px-0 py-4 text-sm/normal text-[#6e6e6e] border-none">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="skt">SKT</SelectItem>
              <SelectItem value="kt">KT</SelectItem>
              <SelectItem value="lg">LG U+</SelectItem>
            </SelectContent>
          </Select>
          <Input
            placeholder="전화번호"
            variant="login"
            className="border-none"
          />
          <Button
            type="submit"
            variant="navcarousel"
            size="navcarousel"
            color="white"
            className="py-0 px-0"
          >
            인증요청
          </Button>
        </div>
      </form>

      <hr />
      <ul className="text-sm/normal font-thin tracking-tighter text-[#A0A0A0] list-disc py-5">
        <li>
          타인의 개인정보를 도용하여 가입한 경우, 서비스 이용 제한 및 법적
          제재를 받으실 수 있습니다.
        </li>
      </ul>

      <BottomButtonWrapper className="px-7 pt-5 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
        <Button
          type="button"
          variant="largetpye"
          size="lg"
          onClick={handleNext}
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
