import SummaryRow from '@/components/ui/cart/SummaryRow';

interface CartSummaryProps {
  productTotal: number;
  discountTotal: number;
  shippingTotal: number;
  finalTotal: number;
}

export default function CartSummary({
  productTotal,
  discountTotal,
  shippingTotal,
  finalTotal,
}: CartSummaryProps) {
  return (
    <section className="bg-white p-4 font-semibold tracking-tighter">
      <SummaryRow label="상품 금액" value={productTotal} />
      <SummaryRow label="할인 금액" value={discountTotal} />
      <SummaryRow label="배송비" value={shippingTotal} />
      <div className="flex justify-between pt-4 mt-2">
        <p>총 결제예정금액</p>
        <p className="text-xl">{finalTotal.toLocaleString()}원</p>
      </div>
    </section>
  );
}
