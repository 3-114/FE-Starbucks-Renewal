import {
  fetchAddressdetail,
  fetchAddressUuidsList,
  fetchCartProductUuids,
} from '@/actions/cart-service';
import CartAddressCarousel from '@/components/feature/carousels/CartAddressCarousel';
import CartView from '@/components/View/CartView';

export default async function page() {
  const shippingAddressUuidList = await fetchAddressUuidsList();
  const addressList = await Promise.all(
    shippingAddressUuidList.map((item) => fetchAddressdetail(item.deliveryUuid))
  );
  const productUuids = await fetchCartProductUuids();
  return (
    <main>
      <CartAddressCarousel addressList={addressList} />
      <CartView productUuids={productUuids} />
    </main>
  );
}
