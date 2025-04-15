import {
  ChevronRight,
  ListOrdered,
  Ticket,
  MapPinned,
  ClipboardPen,
} from 'lucide-react';

export default function MyPage() {
  return (
    <section className="w-full">
      {/* 주문/배송현황  */}
      <div className="pb-">
        <ul className="flex justify-between items-center mb-4 pt-7 px-6">
          <li className="font-semibold flex items-center gap-2">
            주문/배송현황
          </li>
          <li className="text-lightGray-1 text-xs">
            최근 3개월동안 구매한 상품
          </li>
        </ul>

        <ul className="flex items-center justify-between text-center pt-6 pb-11 px-6">
          {/* 결제완료 */}
          <div className="flex-1 relative">
            <li className="text-2xl font-semibold text-gray-300 ">0</li>
            <li className="mt-2 text-sm font-medium text-black">결제완료</li>
            <li className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
              <ChevronRight />
            </li>
          </div>

          {/* 상품준비중 */}
          <div className="flex-1 relative">
            <li className="text-2xl font-semibold text-gray-300 ">0</li>
            <li className="mt-2 text-sm font-medium text-black">상품준비중</li>
            <li className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
              <ChevronRight />
            </li>
          </div>

          {/* 배송중 */}
          <div className="flex-1 relative">
            <li className="text-2xl font-semibold text-gray-300 ">0</li>
            <li className="mt-2 text-sm font-medium text-black">배송중</li>
            <li className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
              <ChevronRight />
            </li>
          </div>

          {/* 배송완료 */}
          <div className="flex-1 relative">
            <li className="text-2xl font-semibold text-gray-300 ">0</li>
            <li className="mt-2 text-sm font-medium text-black">배송완료</li>
          </div>
        </ul>
      </div>

      {/* 쇼핑정보 */}
      <div className="bg-gray-100 h-200">
        <ul className="px-6">
          <li className="font-semibold pt-7.5 pb-5.5">쇼핑정보</li>
        </ul>

        <ul className="px-6">
          <li className="font-medium  flex gap-2 pb-7">
            <ListOrdered /> 주문 내역
          </li>
          <li className="font-medium flex gap-2 pb-7">
            <Ticket /> 쿠폰
          </li>
          <li className="font-medium flex gap-2 ">
            <MapPinned /> 배송지 관리
          </li>
        </ul>

        {/* 설정 */}
        <ul className="px-6 pt-10">
          <li className="font-semibold pt-2.5 pb-5.5">설정</li>
          <li className="font-medium flex gap-2 pb-7">
            <ClipboardPen /> 배송지 정보 수집 및 이용 동의
          </li>
        </ul>
      </div>
    </section>
  );
}
