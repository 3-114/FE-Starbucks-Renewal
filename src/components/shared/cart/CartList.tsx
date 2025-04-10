import CartItems from '@/components/shared/cart/CartItems';
import CartSummary from '@/components/shared/cart/CartSummary';
import CartNotice from '@/components/notice/CartNotice';
import CartFooter from '@/components/layout/Footers/CartFooter';
import EmptyCart from '@/components/shared/cart/EmptyCart';
import { dummyProductMap } from '@/data/ProductData';

export default function CartList({ productUuids }: { productUuids: string[] }) {
  const cartItems = productUuids
    .map((uuid) => dummyProductMap[uuid])
    .filter((item) => item !== undefined);

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  const checkedItems = cartItems.filter((item) => item.checked);

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

  return (
    <div className="flex flex-col pb-10">
      <CartItems items={cartItems} />
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
