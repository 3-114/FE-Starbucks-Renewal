import WelcomeUserCard from '@/components/shared/WelcomeUserCard';
import PrivacyForm from '@/components/form/PrivacyForm';
import { DummyAgreementItems } from '@/data/SignUpData';

export default function TermsAgreementStep({ onNext }: { onNext: () => void }) {
  return (
    <>
      <WelcomeUserCard type="privacyconsent" />
      <PrivacyForm data={DummyAgreementItems} onNext={onNext} />
    </>
  );
}
