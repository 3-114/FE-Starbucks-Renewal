import WelcomeUserCard from '@/components/shared/WelcomeUserCard';
import LoginForm from '@/components/form/LoginForm';
export default function page() {
  return (
    <main>
      <WelcomeUserCard type="login" />
      <LoginForm />
    </main>
  );
}
