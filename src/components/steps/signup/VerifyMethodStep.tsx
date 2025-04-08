import VerifyMethodForm from '@/components/form/signup/VerifyMethodForm';

export default function VerifyMethodStep({
  goTo,
}: {
  goTo: (stepKey: string) => void;
}) {
  return <VerifyMethodForm goTo={goTo} />;
}
