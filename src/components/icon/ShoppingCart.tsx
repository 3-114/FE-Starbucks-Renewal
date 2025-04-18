import Link from 'next/link';
import { ShoppingCart as LucideShoppingCart } from 'lucide-react';

export default function ShoppingCart() {
  return (
    <Link href="/cart" className="cursor-pointer">
      <LucideShoppingCart className="w-6 h-6 text-gray-700" />
    </Link>
  );
}
