import BestPage from '@/components/page/BestPage';

export default function Page({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  return (
    <div>
      <BestPage searchParams={searchParams} />
    </div>
  );
}
