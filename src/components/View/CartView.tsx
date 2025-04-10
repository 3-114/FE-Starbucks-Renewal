import CartTabNav from '@/components/layout/navs/CartTabNav';
import CartList from '@/components/shared/cart/CartList';
import EmptyCart from '@/components/shared/cart/EmptyCart';

import { fetchCartProductUuids } from '@/actions/cart-service';

const dummyCartTabData = [
  { id: 1, title: '일반', count: 0 },
  { id: 2, title: '예약', count: 0 },
];

export default async function CartView() {
  const productUuids = await fetchCartProductUuids();

  return (
    <section>
      <CartTabNav CartTabData={dummyCartTabData} />
      {productUuids.length === 0 ? (
        <EmptyCart />
      ) : (
        <CartList productUuids={productUuids} />
      )}
    </section>
  );
}
