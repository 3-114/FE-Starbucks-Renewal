export default function CartNotice() {
  return (
    <section className="bg-gray-100 li-4 text-xs text-gray-500 sliace-y-1">
      <ul className="pl-8 pr-4 py-6 space-y-1 list-disc tracking-tighter">
        <li>
          장바구니에는 최대 20개까지 담을 수 있으며, 담긴 상품은 최대 2개월간
          보관됩니다.
        </li>
        <li>
          총 결제예정금액은 쿠폰 적용에 따라 추가 할인 수단 적용으로 달라질 수
          있습니다.
        </li>
        <li>가격, 옵션 등 정보가 변경된 경우 주문이 불가할 수 있습니다.</li>
      </ul>
    </section>
  );
}
