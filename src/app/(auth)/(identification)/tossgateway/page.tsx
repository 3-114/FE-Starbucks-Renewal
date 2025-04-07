import WelcomeUserCard from '@/components/shared/WelcomeUserCard';
import TossPrivacyForm from '@/components/form/TossPrivacyForm';

export default function page() {
  return (
    <main className="px-7">
      <WelcomeUserCard type="tos" size="3.7rem" />
      <TossPrivacyForm />
    </main>
  );
}
