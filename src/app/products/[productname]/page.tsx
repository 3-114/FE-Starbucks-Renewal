import ProductDetail from '@/components/page/ProductDetail';
export default async function page({
  params,
}: {
  params: Promise<{ productname: string }>;
}) {
  const { productname } = await params;

  return (
    <>
      <ProductDetail productUuid={productname} />
    </>
  );
}
