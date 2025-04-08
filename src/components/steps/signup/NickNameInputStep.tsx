import NickNameInputForm from '@/components/form/signup/NickNameInputForm';
import WelcomeUserCard from '@/components/shared/WelcomeUserCard';
import { SignupFormData } from '@/types/SignUpDataTypes';

export default function NickNameInputStep({
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
      <WelcomeUserCard type={'nickname'} />
      <NickNameInputForm
        formData={formData}
        onInput={onInput}
        onNext={onNext}
      />
    </main>
  );
}
