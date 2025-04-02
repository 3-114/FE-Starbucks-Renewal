import LoginForm from '@/components/form/LoginForm';
import WelcomeUserCard from '@/components/shared/WelcomeUserCard';

export default function page() {
  return (
    <main className="px-7">
      <WelcomeUserCard />
      <LoginForm />
    </main>
  );
}
