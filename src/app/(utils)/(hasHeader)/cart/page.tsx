import {
  fetchAddressdetail,
  fetchAddressUuidsList,
  fetchCartUuids,
  getCartCount,
} from '@/actions/cart-service';

import CartAddressCarousel from '@/components/feature/carousels/CartAddressCarousel';
import CartView from '@/components/View/CartView';

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ type?: string | undefined }>;
}) {
  const cartType = (await searchParams).type ?? 'general';

  const shippingAddressUuidList = await fetchAddressUuidsList();
  const addressList = await Promise.all(
    shippingAddressUuidList.map((item) => fetchAddressdetail(item.deliveryUuid))
  );

  const CartUuids = await fetchCartUuids(cartType);

  const [generalCartCount, reservationCartCount] = await Promise.all([
    getCartCount('general'),
    getCartCount('reservation'),
  ]);

  return (
    <main>
      <CartAddressCarousel addressList={addressList} />
      <CartView
        CartUuids={CartUuids}
        generalCartCount={generalCartCount}
        reservationCartCount={reservationCartCount}
        cartType={cartType}
      />
    </main>
  );
}
