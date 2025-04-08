import VerifyMethodForm from '@/components/form/signup/VerifyMethodForm';

export default function VerifyMethodStep({
  GoTo,
  Next,
}: {
  GoTo: (stepKey: string) => void;
  Next: () => void;
}) {
  return <VerifyMethodForm GoTo={GoTo} Next={Next} />;
}
