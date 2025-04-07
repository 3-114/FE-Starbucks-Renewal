import PrivacyForm from '@/components/form/PrivacyForm';
import WelcomeUserCard from '@/components/shared/WelcomeUserCard';

import { DummyAgreementItems } from '@/data/SignUpData';

export default function page() {
  return (
    <main>
      <WelcomeUserCard type="privacyconsent" />
      <PrivacyForm data={DummyAgreementItems} />
    </main>
  );
}
