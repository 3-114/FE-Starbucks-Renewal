import VerifyMethodForm from '@/components/form/signup/VerifyMethodForm';
import WelcomeUserCard from '@/components/shared/WelcomeUserCard';

export default function VerifyMethodStep({
  goTo,
}: {
  goTo: (stepKey: string) => void;
}) {
  return (
    <main>
      <WelcomeUserCard
        type="identification"
        className="text-[22px]/normal tracking-[-0.02em]"
      />
      <VerifyMethodForm goTo={goTo} />
    </main>
  );
}
