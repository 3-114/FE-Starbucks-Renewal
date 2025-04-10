import { ProductData } from '@/types/ResponseDataTypes';
import CartItem from '@/components/shared/cart/CartItem';

export default function CartItems({ items }: { items: ProductData[] }) {
  const checkedItems = items.filter((item) => item.checked);
  const uncheckedItems = items.filter((item) => !item.checked);

  return (
    <div className="bg-gray-100 my-2">
      {[...checkedItems, ...uncheckedItems].map((item) => (
        <CartItem key={item.uuid} item={item} />
      ))}
    </div>
  );
}
