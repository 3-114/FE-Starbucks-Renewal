import CreateUserForm from '@/components/form/signup/CreateUserForm';
import { SignupFormData } from '@/types/SignUpDataTypes';
import WelcomeUserCard from '@/components/shared/WelcomeUserCard';

export default function CreateUserStep({
  formData,
  Input,
  Next,
}: {
  formData: SignupFormData;
  Input: (name: keyof SignupFormData, value: string | number | boolean) => void;
  Next: () => void;
}) {
  return (
    <main>
      <WelcomeUserCard type={'createuser'} />
      <CreateUserForm formData={formData} Input={Input} Next={Next} />
    </main>
  );
}
