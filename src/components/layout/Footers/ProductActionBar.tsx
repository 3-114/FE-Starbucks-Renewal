'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import QuantitySelector from '@/components/feature/Selector/QuantitySelector';
import { AddCartItem } from '@/actions/cart-service';
import { useRouter } from 'next/navigation';

export default function ProductActionBar({
  productUuid,
  defaultPrice,
}: {
  productUuid: string;
  defaultPrice: number;
}) {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity) {
      setQuantity(newQuantity);
    }
  };

  const calculateTotalPrice = () => {
    return defaultPrice * quantity;
  };

  const handlePurchase = async () => {
    try {
      await AddCartItem({ productUuid, quantity });
    } catch (err: unknown) {
      if (err instanceof Error) {
        if (err.message.includes('로그인이 필요')) {
          router.push('/login');
        } else {
          console.error('장바구니 추가 실패:', err.message);
        }
      } else {
        console.error('알 수 없는 에러:', err);
      }
    }
  };

  const handleCart = async () => {
    try {
      await AddCartItem({ productUuid, quantity });
    } catch (err: unknown) {
      if (err instanceof Error) {
        if (err.message.includes('로그인이 필요')) {
          router.push('/login');
        } else {
          console.error('장바구니 추가 실패:', err.message);
        }
      } else {
        console.error('알 수 없는 에러:', err);
      }
    }
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
