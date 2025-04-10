import { ShoppingCart } from 'lucide-react';

export default function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center h-130 text-center">
      <ShoppingCart className="text-gray-400 mb-4" size={32} />
      <p className="text-gray-600 font-medium">장바구니가 비었습니다.</p>
    </div>
  );
}
