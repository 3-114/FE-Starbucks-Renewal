import WelcomeUserCard from '@/components/shared/WelcomeUserCard';
import LoginForm from '@/components/form/LoginForm';

import { DummyUserInfo } from '@/data/LoginData';

export default function page() {
  return (
    <main>
      <WelcomeUserCard data={DummyUserInfo} />
      <LoginForm />
    </main>
  );
}
