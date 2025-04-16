import {
  fetchAddressdetail,
  fetchAddressUuidsList,
} from '@/actions/cart-service';
import CartAddressCarousel from '@/components/feature/carousels/CartAddressCarousel';

export default async function page() {
  const shippingAddressUuidList = await fetchAddressUuidsList();
  const addressList = await Promise.all(
    shippingAddressUuidList.map((item) => fetchAddressdetail(item.deliveryUuid))
  );
  console.log('addressList', addressList);
  return (
    <main>
      <CartAddressCarousel addressUuidList={addressList} />
    </main>
  );
}
