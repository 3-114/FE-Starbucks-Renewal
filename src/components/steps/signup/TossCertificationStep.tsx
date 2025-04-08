import TossCertification from '@/components/shared/TossCertification';

export default function TossCertificationStep({
  onNext,
}: {
  onNext: () => void;
}) {
  return <TossCertification onNext={onNext} />;
}
