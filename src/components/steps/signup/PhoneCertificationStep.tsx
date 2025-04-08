import PhoneCertification from '@/components/shared/PhoneCertification';
import { SignupFormData } from '@/types/SignUpDataTypes';

export default function PhoneCertificationStep({
  Next,
  Input,
}: {
  Next: () => void;
  Input: (name: keyof SignupFormData, value: string | number | boolean) => void;
}) {
  return <PhoneCertification onNext={Next} onInput={Input} />;
}
