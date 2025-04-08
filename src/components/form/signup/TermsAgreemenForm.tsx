'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { CheckBoxGroup } from '@/components/shared/CheckBoxGroup';
import BottomButtonWrapper from '@/components/layout/Footers/BottomButtonWrapper';
import { AgreementItemsProp } from '@/types/ResponseDataTypes';

export default function TermsAgreemenForm({
  data,
  marketingConsentdata,
  onNext,
}: {
  data: AgreementItemsProp[];
  marketingConsentdata: AgreementItemsProp[];
  onNext: () => void;
}) {
  const [requiredChecks, setRequiredChecks] = useState<Record<string, boolean>>(
    {}
  );
  const [marketingChecks, setMarketingChecks] = useState<
    Record<string, boolean>
  >({});
  const [allChecked, setAllChecked] = useState(false);

  const initializeCheckState = (items: AgreementItemsProp[]) =>
    Object.fromEntries(items.map(({ id }) => [id, false]));

  const updateAllChecks = (
    keys: Record<string, boolean>,
    setter: React.Dispatch<React.SetStateAction<Record<string, boolean>>>,
    checked: boolean
  ) => {
    setter(Object.fromEntries(Object.keys(keys).map((key) => [key, checked])));
  };

  const handleCheck =
    (setter: React.Dispatch<React.SetStateAction<Record<string, boolean>>>) =>
    (id: string, checked: boolean) => {
      setter((prev) => ({ ...prev, [id]: checked }));
    };

  useEffect(() => {
    setRequiredChecks(initializeCheckState(data));
    setMarketingChecks(initializeCheckState(marketingConsentdata));
  }, [data, marketingConsentdata]);

  useEffect(() => {
    const allRequiredChecked = Object.values(requiredChecks).every(Boolean);
    const allMarketingChecked = Object.values(marketingChecks).every(Boolean);

    const totalChecked =
      allRequiredChecked &&
      allMarketingChecked &&
      Object.keys(requiredChecks).length > 0 &&
      Object.keys(marketingChecks).length > 0;

    setAllChecked(totalChecked);
  }, [requiredChecks, marketingChecks]);

  const handleAllCheck = (checked: boolean) => {
    setAllChecked(checked);
    updateAllChecks(requiredChecks, setRequiredChecks, checked);
    updateAllChecks(marketingChecks, setMarketingChecks, checked);
  };

  const renderCheckList = (
    items: AgreementItemsProp[],
    state: Record<string, boolean>,
    setState: React.Dispatch<React.SetStateAction<Record<string, boolean>>>,
    required: boolean = false
  ) =>
    items.map(({ id, label, link }) => (
      <CheckBoxGroup
        key={id}
        label={label}
        link={link}
        required={required}
        className="text-lg font-bold"
        checked={state[id] || false}
        onChange={(e) => handleCheck(setState)(String(id), e.target.checked)}
      />
    ));

  const allRequiredChecked =
    Object.values(requiredChecks).every(Boolean) &&
    Object.keys(requiredChecks).length === data.length;

  return (
    <form className="group w-full font-semibold tracking-tighter px-4">
      <CheckBoxGroup
        label="전체동의"
        className="text-lg font-bold"
        checked={allChecked}
        onChange={(e) => handleAllCheck(e.target.checked)}
      />
      <hr className="border-t border-gray-300" />

      {renderCheckList(data, requiredChecks, setRequiredChecks, true)}

      <hr className="border-t border-gray-300" />
      <p className="text-sm font-bold pt-5 text-green-600">
        광고성 정보 수신 팝업
      </p>
      <div className="flex items-center gap-5">
        {renderCheckList(
          marketingConsentdata,
          marketingChecks,
          setMarketingChecks
        )}
      </div>

      <BottomButtonWrapper className="px-7 pt-5 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
        <Button
          type="button"
          variant="largetpye"
          size="lg"
          onClick={onNext}
          className="w-full text-lg font-bold py-6
            group-has-[button[data-state=unchecked][data-required=true]]:bg-[#E0E0E0]
            group-has-[button[data-state=unchecked][data-required=true]]:pointer-events-none"
          disabled={!allRequiredChecked}
        >
          다음
        </Button>
      </BottomButtonWrapper>
    </form>
  );
}
