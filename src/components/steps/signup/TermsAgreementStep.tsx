import WelcomeUserCard from '@/components/shared/WelcomeUserCard';
import TermsAgreemenForm from '@/components/form/signup/TermsAgreemenForm';
import { DummyAgreementItems } from '@/data/SignUpData';

export const marketingConsentdata = [
  {
    id: 1,
    label: 'Email',
  },
  {
    id: 2,
    label: 'SMS',
  },
];

export default function TermsAgreementStep({ onNext }: { onNext: () => void }) {
  return (
    <>
      <WelcomeUserCard type="privacyconsent" />
      <TermsAgreemenForm
        data={DummyAgreementItems}
        marketingConsentdata={marketingConsentdata}
        onNext={onNext}
      />
    </>
  );
}
