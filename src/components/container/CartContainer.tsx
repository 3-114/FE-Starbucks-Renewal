import CartTabNav from '@/components/layout/navs/CartTabNav';
import CartList from '@/components/shared/CartList';

const dummyCartTabData = [
  { id: 1, title: '일반', count: 0 },
  { id: 2, title: '예약', count: 0 },
];

export default function CartContainer() {
  return (
    <section>
      <CartTabNav CartTabData={dummyCartTabData} />
      <CartList
        productUuids={['uuid-1', 'uuid-3']}
        subtotal={60000}
        discount={5000}
        shipping={3000}
        total={58000}
      />
    </section>
  );
}
