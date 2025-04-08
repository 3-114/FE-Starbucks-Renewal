import EmailInputForm from '@/components/form/signup/EmailInputForm';
import WelcomeUserCard from '@/components/shared/WelcomeUserCard';
import { SignupFormData } from '@/types/SignUpDataTypes';

export default function EmailInputStep({
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
  return (
    <main>
      <WelcomeUserCard type={'email'} />
      <EmailInputForm formData={formData} onInput={onInput} onNext={onNext} />;
    </main>
  );
}
