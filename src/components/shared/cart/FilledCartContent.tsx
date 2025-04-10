import CartItemBox from '@/components/feature/boxs/CartItemBox';
import CartSummary from '@/components/shared/cart/CartSummary';
import CartNotice from '@/components/notice/CartNotice';
import CartFooter from '@/components/layout/Footers/CartFooter';
import CartAllSelectBox from '@/components/feature/boxs/CartAllSelectBox';
import { getProductByUuid } from '@/actions/cart-service/getProductByUuid';

import MainFooter from '@/components/layout/Footers/MainFooter';
import { MainFooterDummyData } from '@/data/FooterData';

export default async function CartList({
  productUuids,
}: {
  productUuids: string[];
}) {
  const cartItems = (
    await Promise.all(productUuids.map((uuid) => getProductByUuid(uuid)))
  ).filter(Boolean);

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

  const allChecked =
    cartItems.length > 0 && cartItems.every((item) => item.checked);

  return (
    <article className="pb-60 bg-gray-200">
      <CartAllSelectBox isChecked={allChecked} />
      {orderedItems.map((item) => (
        <CartItemBox key={item.uuid} item={item} />
      ))}

      <CartSummary
        productTotal={productTotal}
        shippingTotal={shippingTotal}
        discountTotal={discountTotal}
        finalTotal={finalTotal}
      />
      <CartNotice />
      <MainFooter FooterData={MainFooterDummyData} />
      <CartFooter totalCount={totalCount} finalTotal={finalTotal} />
    </article>
  );
}
