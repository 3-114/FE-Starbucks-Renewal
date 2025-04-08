import CreateUserForm from '@/components/form/signup/CreateUserForm';
import { SignupFormData } from '@/types/SignUpDataTypes';
import WelcomeUserCard from '@/components/shared/WelcomeUserCard';

export default function CreateUserStep({
  formData,
  onInput,
  onNext,
}: {
  formData: SignupFormData;
  onInput: (
    name: keyof SignupFormData,
    value: string | number | boolean
  ) => void;
  onNext: () => void;
}) {
  return (
    <main>
      <WelcomeUserCard type={'createuser'} />
      <CreateUserForm formData={formData} onInput={onInput} onNext={onNext} />
    </main>
  );
}
