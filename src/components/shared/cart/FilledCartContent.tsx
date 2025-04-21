import CartItemBox from '@/components/feature/boxs/CartItemBox';
import { CartItemType } from '@/types/ResponseDataTypes';

export default async function CartList({
  cartData,
}: {
  cartData: CartItemType[];
}) {
  return (
    <section>
      <ul className="bg-gray-200 space-y-1">
        {/* <CartAllSelectBox isChecked={allChecked} /> */}
        {cartData.map((item, index) => (
          <CartItemBox key={index} item={item} />
        ))}
      </ul>
    </section>
  );
}
