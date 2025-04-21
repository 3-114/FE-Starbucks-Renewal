import CartTabNav from '@/components/layout/navs/CartTabNav';
import FilledCartContent from '@/components/shared/cart/FilledCartContent';
import EmptyCartContent from '@/components/shared/cart/EmptyCartContent';
import { getProductByCartUuid } from '@/actions/cart-service';
import CartSummary from '../shared/cart/CartSummary';
import CartNotice from '../notice/CartNotice';
import CartFooter from '@/components/layout/Footers/CartFooter';
import { CartItemType } from '@/types/ResponseDataTypes';

import CartAllSelectBox from '@/components/feature/boxs/CartAllSelectBox';

const dummyCartTabData = [
  { id: 1, title: '일반' },
  { id: 2, title: '예약' },
];

export default async function CartView({
  CartUuids,
}: {
  CartUuids: { cartUuid: string }[];
}) {
  const isEmpty = CartUuids.length === 0;
  const cartItems = await Promise.all(
    CartUuids.map(async ({ cartUuid }) => {
      const product = await getProductByCartUuid(cartUuid);
      return {
        cartUuid,
        ...product,
      };
    })
  );
  const checkedItems = cartItems.filter((item) => item.selected);
  const uncheckedItems = cartItems.filter((item) => !item.selected);
  const orderedItems = [...checkedItems, ...uncheckedItems] as CartItemType[];

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

  const all_checked = checkedItems.length == cartItems.length;

  return (
    <>
      <CartTabNav CartTabData={dummyCartTabData} />
      {isEmpty ? (
        <EmptyCartContent />
      ) : (
        <>
          <CartAllSelectBox isChecked={all_checked} cartUuids={CartUuids} />
          <FilledCartContent cartData={orderedItems} />
          <CartSummary
            productTotal={productTotal}
            shippingTotal={shippingTotal}
            discountTotal={discountTotal}
            finalTotal={finalTotal}
          />
          <CartNotice />
          <CartFooter totalCount={totalCount} finalTotal={finalTotal} />
        </>
      )}
    </>
  );
}
