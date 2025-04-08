import TossPrivacyForm from '@/components/form/TossPrivacyForm';
import { SignupFormData } from '@/types/SignUpDataTypes';

export default function TossThirdPartyStep({
  GoTo,
  Prev,
  Input,
}: {
  GoTo: (stepKey: string) => void;
  Prev: () => void;
  Input: (name: keyof SignupFormData, value: string | number | boolean) => void;
}) {
  return <TossPrivacyForm GoTo={GoTo} Input={Input} Prev={Prev} />;
}
