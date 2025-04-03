import WelcomeUserCard from '@/components/shared/WelcomeUserCard';
import LoginForm from '@/components/form/LoginForm';

import { DummyUserInfo } from '@/data/LoginData';

export default function page() {
  return (
    <main className="px-7">
      <WelcomeUserCard data={DummyUserInfo} />
      <LoginForm />
    </main>
  );
}
