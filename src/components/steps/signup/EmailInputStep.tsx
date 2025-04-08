import EmailInputForm from '@/components/form/signup/EmailInputForm';
import WelcomeUserCard from '@/components/shared/WelcomeUserCard';
import { SignupFormData } from '@/types/SignUpDataTypes';

export default function EmailInputStep({
  onInput,
  onNext,
}: {
  onInput: (
    name: keyof SignupFormData,
    value: string | boolean | number
  ) => void;
  onNext: () => void;
}) {
  return (
    <main>
      <WelcomeUserCard type={'email'} />
      <EmailInputForm onInput={onInput} onNext={onNext} />
    </main>
  );
}
