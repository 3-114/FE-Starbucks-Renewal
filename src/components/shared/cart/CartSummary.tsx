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
    <div className="bg-white p-4">
      <SummaryRow label="상품 금액" value={productTotal} />
      <SummaryRow label="할인 금액" value={discountTotal} />
      <SummaryRow label="배송비" value={shippingTotal} />
      <div className="flex justify-between pt-4 border-t mt-2">
        <p className="font-bold">총 결제예정금액</p>
        <p className="text-xl font-bold">{finalTotal.toLocaleString()}원</p>
      </div>
    </div>
  );
}
