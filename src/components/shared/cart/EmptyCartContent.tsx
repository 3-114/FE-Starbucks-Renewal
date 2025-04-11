import { ShoppingCart } from 'lucide-react';
import CartFooter from '@/components/layout/Footers/CartFooter';
import MainFooter from '@/components/layout/Footers/MainFooter';

import { MainFooterDummyData } from '@/data/FooterData';

export default function EmptyCartContent() {
  return (
    <article className="h-200 py-50 space-y-4 text-center pb-50">
      <ShoppingCart className=" text-gray-400 mx-auto" size={36} />
      <p className="text-base/normal font-semibold text-gray-600 pb-54">
        장바구니가 비었습니다.
      </p>
      <MainFooter FooterData={MainFooterDummyData} />
      <CartFooter totalCount={0} finalTotal={0} />
    </article>
  );
}
