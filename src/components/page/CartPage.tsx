import CartAddressCarousel from '@/components/feature/carousels/CartAddressCarousel';
import CartView from '@/components/View/CartView';

import { fetchAddressUuidsList } from '@/actions/cart-service';

export default async function CartPage() {
  const addressList = await fetchAddressUuidsList()
  return (
    <main>
      <CartAddressCarousel addressUuidList={addressList} />
      <CartView />
    </main>
  );
}
