import PrivacyForm from '@/components/form/PrivacyForm';
import WelcomeUserCard from '@/components/shared/WelcomeUserCard';

import { DummyUserInfo } from '@/data/SignUpData';
import { DummyAgreementItems } from '@/data/SignUpData';

export default function page() {
  return (
    <main>
      <WelcomeUserCard data={DummyUserInfo} />
      <PrivacyForm data={DummyAgreementItems} />
    </main>
  );
}
