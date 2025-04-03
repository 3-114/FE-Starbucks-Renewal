import WelcomeUserCard from '@/components/shared/WelcomeUserCard';

import { DummyUserInfo } from '@/data/SignUp';

export default function page() {
  return (
    <main className="px-7">
      <WelcomeUserCard data={DummyUserInfo} />
    </main>
  );
}
