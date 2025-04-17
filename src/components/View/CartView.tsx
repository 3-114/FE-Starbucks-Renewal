import CartTabNav from '@/components/layout/navs/CartTabNav';
import FilledCartContent from '@/components/shared/cart/FilledCartContent';
import EmptyCartContent from '@/components/shared/cart/EmptyCartContent';

const dummyCartTabData = [
  { id: 1, title: '일반' },
  { id: 2, title: '예약' },
];

export default function CartView({
  productUuids,
}: {
  productUuids: { productUuid: string }[];
}) {
  const isEmpty = productUuids.length === 0;

  return (
    <section>
      <CartTabNav CartTabData={dummyCartTabData} />
      {isEmpty ? (
        <EmptyCartContent />
      ) : (
        <FilledCartContent productUuids={productUuids} />
      )}
    </section>
  );
}
