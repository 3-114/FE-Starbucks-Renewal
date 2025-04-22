'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import QuantitySelector from '@/components/feature/Selector/QuantitySelector';

export default function ProductActionBar({
  productUuid,
  defaultPrice,
}: {
  productUuid: string;
  defaultPrice: number;
}) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity) {
      setQuantity(newQuantity);
    }
  };

  const calculateTotalPrice = () => {
    return defaultPrice * quantity;
  };

  const handlePurchase = () => {
    console.log('구매하기 클릭됨:', {
      productUuid,
      quantity,
    });
  };

  const handleCart = () => {
    console.log('장바구니 담기:', {
      productUuid,
      quantity,
    });
  };

  return (
    <section className="fixed bottom-0 w-full bg-white rounded-t-3xl shadow-lg z-10">
      <div className="p-6 space-y-4">
        <QuantitySelector
          quantity={quantity}
          basePrice={defaultPrice}
          optionPrice={0}
          onQuantityChange={handleQuantityChange}
        />
        <div className="flex justify-between items-center">
          <span className="font-medium">총 금액</span>
          <span className="text-xl font-bold">
            {calculateTotalPrice().toLocaleString()}원
          </span>
        </div>
        <div className="flex gap-x-4 items-center">
          <ShoppingCart
            className="min-w-9 size-9 cursor-pointer"
            onClick={handleCart}
          />
          <Button className="flex-1" onClick={handlePurchase}>
            구매하기
          </Button>
        </div>
      </div>
    </section>
  );
}
