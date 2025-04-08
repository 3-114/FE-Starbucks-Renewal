import TossPrivacyForm from '@/components/form/TossPrivacyForm';
import { SignupFormData } from '@/types/SignUpDataTypes';

export default function TossThirdPartyStep({
  goTo,
  onPrev,
  onInput,
}: {
  goTo: (stepKey: string) => void;
  onPrev: () => void;
  onInput: (
    name: keyof SignupFormData,
    value: string | number | boolean
  ) => void;
}) {
  return <TossPrivacyForm goTo={goTo} onInput={onInput} onPrev={onPrev} />;
}
