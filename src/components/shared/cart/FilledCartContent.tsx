import CartItemBox from '@/components/feature/boxs/CartItemBox';
import CartSummary from '@/components/shared/cart/CartSummary';
import CartNotice from '@/components/notice/CartNotice';
import CartFooter from '@/components/layout/Footers/CartFooter';
// import CartAllSelectBox from '@/components/feature/boxs/CartAllSelectBox';
import {
  getProductByCartUuid,
} from '@/actions/cart-service/getProductByUuid';

import MainFooter from '@/components/layout/Footers/MainFooter';
import { MainFooterDummyData } from '@/data/FooterData';

export default async function CartList({
  CartUuids,
}: {
  CartUuids: { cartUuid: string }[];
}) {
  const cartItems = (
    await Promise.all(
      CartUuids.map(async ({ cartUuid }) => {
        const product = await getProductByCartUuid(cartUuid);
        return {
          cartUuid,
          ...product,
        };
      })
    )
  ).filter(Boolean);

  const validCartItems = cartItems.filter(
    (item): item is NonNullable<typeof item> => item !== null
  );

  const checkedItems = validCartItems.filter((item) => item.selected);
  const uncheckedItems = validCartItems.filter((item) => !item.selected);
  const orderedItems = [...checkedItems, ...uncheckedItems];

  const productTotal = checkedItems.reduce(
    (sum, item) => sum + Number(item.productPrice) * item.quantity,
    0
  );

  const maxShippingFee = Math.max(
    ...checkedItems.map((item) => item.shippingFee ?? 0),
    0
  );

  const shippingTotal = productTotal >= 30000 ? 0 : maxShippingFee;

  const discountTotal = 0;
  const finalTotal = productTotal + shippingTotal - discountTotal;
  const totalCount = checkedItems.length;

  // const allChecked =
  //   validCartItems.length > 0 && validCartItems.every((item) => item.selected);

  return (
    <article className="pb-60 bg-gray-200">
      {/* <CartAllSelectBox isChecked={allChecked} /> */}
      {orderedItems.map((item, index) => (
        <CartItemBox key={index} item={item} />
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
