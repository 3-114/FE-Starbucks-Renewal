import {
  fetchAddressdetail,
  fetchAddressUuidsList,
} from '@/actions/cart-service';
import CartAddressCarousel from '@/components/feature/carousels/CartAddressCarousel';
import CartView from '@/components/View/CartView';

export default async function page() {
  const shippingAddressUuidList = await fetchAddressUuidsList();
  const addressList = await Promise.all(
    shippingAddressUuidList.map((item) => fetchAddressdetail(item.deliveryUuid))
  );
  return (
    <main>
      <CartAddressCarousel addressUuidList={addressList} />
      {/* <CartView /> */}
    </main>
  );
}
