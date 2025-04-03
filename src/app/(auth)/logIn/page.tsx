import WelcomeUserCard from '@/components/shared/WelcomeUserCard';
import LoginForm from '@/components/form/LoginForm';

export default function page() {
  return (
    <main className="px-7">
      <WelcomeUserCard />
      <LoginForm />
    </main>
  );
}
