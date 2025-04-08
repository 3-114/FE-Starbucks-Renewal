import VerifyMethodForm from '@/components/form/signup/VerifyMethodForm';

export default function VerifyMethodStep({
  GoTo,
}: {
  GoTo: (stepKey: string) => void;
}) {
  return <VerifyMethodForm GoTo={GoTo} />;
}
