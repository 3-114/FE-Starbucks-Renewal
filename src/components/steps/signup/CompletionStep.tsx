import CompletionForm from '@/components/form/signup/CompletionForm';
import { SignupFormData } from '@/types/SignUpDataTypes';

export default function NickNameInputStep({
  formData,
}: {
  formData: SignupFormData;
}) {
  return (
    <main>
      <CompletionForm formData={formData} />
    </main>
  );
}
