'use client';

import { Button } from '@/components/ui/button';
import { CheckBoxGroup } from '@/components/shared/CheckBoxGroup';
import BottomButtonWrapper from '@/components/layout/Footers/BottomButtonWrapper';

import { AgreementItemsProp } from '@/types/ResponseDataTypes';

export default function PrivacyForm({
  data,
  onNext,
}: {
  data: AgreementItemsProp[];
  onNext: () => void;
}) {
  return (
    <form className="group w-full font-semibold tracking-tighter px-4">
      <CheckBoxGroup label="전체동의" className="text-lg font-bold" />
      <hr className="border-t border-gray-300" />

      {data.map(({ id, label, link }) => (
        <CheckBoxGroup
          key={id}
          label={label}
          link={link}
          required
          className="text-lg font-bold"
        />
      ))}

      <hr className="border-t border-gray-300" />
      <p className="text-sm font-bold pt-5 text-green-600">
        광고성 정보 수신 팝업
      </p>
      <div className="flex items-center gap-5">
        <CheckBoxGroup label="E-mail" className="text-lg font-bold" />
        <CheckBoxGroup label="SMS" className="text-lg font-bold" />
      </div>

      <BottomButtonWrapper className="px-7 pt-5 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
        <Button
          type="button"
          variant="largetpye"
          size="lg"
          onClick={onNext}
          className="
            w-full text-lg font-bold py-6
            group-has-[button[data-state=unchecked][data-required=true]]:bg-[#E0E0E0]
            group-has-[button[data-state=unchecked][data-required=true]]:pointer-events-none
          "
        >
          다음
        </Button>
      </BottomButtonWrapper>
    </form>
  );
}
