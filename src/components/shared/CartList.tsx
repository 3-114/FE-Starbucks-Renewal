'use client';

import Image from 'next/image';
import { Checkbox } from '@/components/ui/checkbox';
import { ShoppingCart, X, Plus, Minus } from 'lucide-react';

type ProductData = {
  uuid: string;
  image: string;
  checked: boolean;
  quantity: number;
  price: number;
};

interface CartListProps {
  productUuids: string[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
}

const dummyProductMap: Record<string, ProductData> = {
  'uuid-1': {
    uuid: 'uuid-1',
    image: '/lockImg.png',
    checked: true,
    quantity: 2,
    price: 12000,
  },
  'uuid-2': {
    uuid: 'uuid-2',
    image: '/lockImg.png',
    checked: false,
    quantity: 1,
    price: 25000,
  },
  'uuid-3': {
    uuid: 'uuid-3',
    image: '/lockImg.png',
    checked: true,
    quantity: 3,
    price: 18000,
  },
};

export default function CartList({
  productUuids,
  subtotal,
  discount,
  shipping,
  total,
}: CartListProps) {
  const cartItems = productUuids
    .map((uuid) => dummyProductMap[uuid])
    .filter((item): item is ProductData => item !== undefined);

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-130 text-center">
        <ShoppingCart className="text-gray-400 mb-4" size={32} />
        <p className="text-gray-600 font-medium">장바구니가 비었습니다.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="bg-gray-100 my-2">
        {cartItems.map((item) => (
          <div key={item.uuid} className="bg-white p-4 flex items-start mb-2">
            <div className="mt-1 mr-2">
              <Checkbox
                checked={item.checked}
                variant="green"
                size="md"
                onCheckedChange={(checked) => {
                  // 나중에 상태 업데이트 핸들링 가능
                  console.log(`상품 ${item.uuid} checked 상태:`, checked);
                }}
              />
            </div>

            {/* 나머지 상품 내용 */}
            <div className="flex-1">
              <div className="flex">
                <Image
                  src={item.image}
                  alt="product image"
                  width={64}
                  height={64}
                  className="bg-gray-200 mr-4"
                />
                <div className="flex-1">
                  <div className="flex justify-between mb-2">
                    <p className="text-sm font-medium">상품 {item.uuid}</p>
                    <button className="text-gray-400">
                      <X size={18} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center border rounded-md">
                      <button className="px-2 py-1">
                        <Minus size={16} />
                      </button>
                      <span className="px-3">{item.quantity}</span>
                      <button className="px-2 py-1">
                        <Plus size={16} />
                      </button>
                    </div>
                    <p className="font-medium">
                      {(item.price * item.quantity).toLocaleString()}원
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* 요약 */}
      <div className="bg-white p-4">
        <SummaryRow label="상품 금액" value={subtotal} />
        <SummaryRow label="할인 금액" value={discount} />
        <SummaryRow label="배송비" value={shipping} />
        <div className="flex justify-between pt-4 border-t mt-2">
          <span className="font-bold">총 결제예정금액</span>
          <span className="text-xl font-bold">{total.toLocaleString()}원</span>
        </div>
      </div>

      {/* 안내 */}
      <div className="bg-gray-100 p-4 mt-2 text-xs text-gray-500 space-y-1">
        <p>
          • 장바구니에는 최대 20개까지 담을 수 있으며, 담긴 상품은 최대 2개월간
          보관됩니다.
        </p>
        <p>
          • 총 결제예정금액은 쿠폰 적용에 따라 추가 할인 수단 적용으로 달라질 수
          있습니다.
        </p>
        <p>• 가격, 옵션 등 정보가 변경된 경우 주문이 불가할 수 있습니다.</p>
      </div>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex justify-between mb-2">
      <span className="text-gray-600">{label}</span>
      <span className="font-medium">{value.toLocaleString()}원</span>
    </div>
  );
}
