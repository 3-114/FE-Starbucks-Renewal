import PhoneCertification from '@/components/shared/PhoneCertification';
import { SignupFormData } from '@/types/SignUpDataTypes';

export default function PhoneCertificationStep({
  onNext,
  onInput,
}: {
  onNext: () => void;
  onInput: (
    name: keyof SignupFormData,
    value: string | number | boolean
  ) => void;
}) {
  return <PhoneCertification onNext={onNext} onInput={onInput} />;
}
