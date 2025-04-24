import CartTabNav from '@/components/layout/navs/CartTabNav';
import CartAllSelectBox from '@/components/feature/boxs/CartAllSelectBox';
import FilledCartContent from '@/components/shared/cart/FilledCartContent';
import EmptyCartContent from '@/components/shared/cart/EmptyCartContent';
import { getProductByCartUuid } from '@/actions/cart-service';
import CartSummary from '../shared/cart/CartSummary';
import CartNotice from '../notice/CartNotice';
import CartFooter from '@/components/layout/Footers/CartFooter';
import { dummyCartTabData } from '@/data/TabData';
import { AllSelected } from '@/context/AllSelectedContext';

export default async function CartView({
  CartUuids,
  generalCartCount,
  reservationCartCount,
  cartType,
}: {
  CartUuids: { cartUuid: string }[];
  generalCartCount: number;
  reservationCartCount: number;
  cartType: string;
}) {
  const cartItems = await Promise.all(
    CartUuids.map(async ({ cartUuid }) => {
      return await getProductByCartUuid(cartUuid);
    })
  );

  const checkedItems = cartItems.filter((item) => item.selected);
  const isEmpty = CartUuids.length === 0;
  const all_checked = checkedItems.length === cartItems.length;
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

  return (
    <>
      <CartTabNav
        CartTabData={dummyCartTabData}
        generalCartCount={generalCartCount}
        reservationCartCount={reservationCartCount}
      />
      {isEmpty ? (
        <EmptyCartContent />
      ) : (
        <>
          <AllSelected>
            <CartAllSelectBox isChecked={all_checked} cartType={cartType} />
            <FilledCartContent cartData={cartItems} cartType={cartType} />
            <CartSummary
              productTotal={productTotal}
              shippingTotal={shippingTotal}
              discountTotal={discountTotal}
              finalTotal={finalTotal}
            />
            <CartNotice />
            <CartFooter totalCount={totalCount} finalTotal={finalTotal} />
          </AllSelected>
        </>
      )}
    </>
  );
}
