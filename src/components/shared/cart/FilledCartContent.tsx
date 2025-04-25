import CartItemBox from '@/components/feature/boxs/CartItemBox';
import { CartItemType } from '@/types/ResponseDataTypes';

export default async function CartList({
  cartData,
  cartType,
}: {
  cartData: CartItemType[];
  cartType: string;
}) {
  return (
    <section>
      <ul className="bg-gray-200 space-y-1">
        {cartData.map((item, index) => (
          <CartItemBox key={index} item={item} cartType={cartType} />
        ))}
      </ul>
    </section>
  );
}
