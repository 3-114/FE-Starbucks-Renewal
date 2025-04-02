export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const params = await searchParams;
  const category = params.category;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">{category}</h1>
    </div>
  );
}