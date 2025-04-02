import EventNav from '@/components/layout/navs/EventNav';

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const category = params.category;

  return (
    <>
      <EventNav NavData={[]} />
      <main className="p-6">
        <h1 className="text-xl font-bold mb-4">{category}</h1>
      </main>
    </>
  );
}
