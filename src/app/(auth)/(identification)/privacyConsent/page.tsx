import PrivacyForm from '@/components/form/PrivacyForm';
import WelcomeUserCard from '@/components/shared/WelcomeUserCard';

import { DummyUserInfo } from '@/data/SignUp';

export default function page() {
  return (
    <main>
      <WelcomeUserCard data={DummyUserInfo} />
      <PrivacyForm />
    </main>
  );
}
