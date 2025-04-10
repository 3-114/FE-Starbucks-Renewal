import CartItemBox from '@/components/feature/boxs/CartItemBox';
import CartSummary from '@/components/shared/cart/CartSummary';
import CartNotice from '@/components/notice/CartNotice';
import CartFooter from '@/components/layout/Footers/CartFooter';
import CartAllSelectBox from '@/components/feature/boxs/CartAllSelectBox';

import { dummyProduct } from '@/data/ProductData';

export default function CartList({ productUuids }: { productUuids: string[] }) {
  const cartItems = productUuids
    .map((uuid) => dummyProduct[uuid])
    .filter((item) => item !== undefined);

  const checkedItems = cartItems.filter((item) => item.checked);
  const uncheckedItems = cartItems.filter((item) => !item.checked);
  const orderedItems = [...checkedItems, ...uncheckedItems];

  const productTotal = checkedItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const maxShippingFee = Math.max(
    ...checkedItems.map((item) => item.shippingFee),
    0
  );

  const shippingTotal = productTotal >= 30000 ? 0 : maxShippingFee;
  const discountTotal = 0;
  const finalTotal = productTotal + shippingTotal - discountTotal;
  const totalCount = checkedItems.length;

  // 전체 선택 여부 확인
  const allChecked =
    cartItems.length > 0 && cartItems.every((item) => item.checked);

  return (
    <div className="flex flex-col pb-10">
      <div className="bg-white rounded-md shadow-sm mb-2">
        <CartAllSelectBox isChecked={allChecked} />
      </div>

      <div className="bg-gray-100 my-2">
        {orderedItems.map((item) => (
          <CartItemBox key={item.uuid} item={item} />
        ))}
      </div>

      <CartSummary
        productTotal={productTotal}
        shippingTotal={shippingTotal}
        discountTotal={discountTotal}
        finalTotal={finalTotal}
      />
      <CartNotice />
      <CartFooter totalCount={totalCount} finalTotal={finalTotal} />
    </div>
  );
}
