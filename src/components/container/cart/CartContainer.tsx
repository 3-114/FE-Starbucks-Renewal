import CartTabNav from '@/components/layout/navs/CartTabNav';
import CartList from '@/components/shared/cart/CartList';

const dummyCartTabData = [
  { id: 1, title: '일반', count: 0 },
  { id: 2, title: '예약', count: 0 },
];

export default function CartContainer() {
  return (
    <section>
      <CartTabNav CartTabData={dummyCartTabData} />
      <CartList
        productUuids={[
          'uuid-1',
          'uuid-2',
          'uuid-3',
          'uuid-4',
          'uuid-5',
          'uuid-6',
          'uuid-7',
          'uuid-8',
          'uuid-9',
          'uuid-10',
        ]}
      />
    </section>
  );
}
