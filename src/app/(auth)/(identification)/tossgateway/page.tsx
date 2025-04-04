import WelcomeUserCard from '@/components/shared/WelcomeUserCard';
import TossPrivacyForm from '@/components/form/TossPrivacyForm';

import { DummyTossInfo } from '@/data/SignUpData';

export default function page() {
  return (
    <main className="px-7">
      <WelcomeUserCard data={DummyTossInfo} size="3.7rem" />
      <TossPrivacyForm />
    </main>
  );
}
