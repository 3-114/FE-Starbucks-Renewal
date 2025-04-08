import TossCertification from '@/components/shared/TossCertification';

export default function TossCertificationStep({ Next }: { Next: () => void }) {
  return <TossCertification Next={Next} />;
}
