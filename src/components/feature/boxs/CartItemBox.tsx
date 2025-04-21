import Image from 'next/image';
import ItemCheckbox from '@/components/ui/cart/ItemCheckbox';
import QuantityControl from '@/components/ui/cart/QuantityControl';
import RemoveButton from '@/components/ui/cart/RemoveButton';
import { CartItemType } from '@/types/ResponseDataTypes';

export default function CartItemBox({ item }: { item: CartItemType }) {
  return (
    <li className="bg-white px-4 py-6 flex items-start text-sm font-semibold gap-2">
      <ItemCheckbox cartUuid={item.cartUuid ?? ''} checked={item.selected} />
      <Image
        src={item.productThumbnailUrl}
        alt="product image"
        width={84}
        height={84}
        className="bg-gray-200 mr-2"
      />
      <div className="flex-1 space-y-2">
        <div className="flex justify-between">
          <p>{item.productName}</p>
          <RemoveButton cartUuid={item.cartUuid ?? ''} />
        </div>
        <div className="flex justify-between">
          <QuantityControl
            cartUuid={item.cartUuid ?? ''}
            quantity={item.quantity}
          />
          <p className="text-base/normal font-semibold">
            {(item.productPrice * item.quantity).toLocaleString()}원
          </p>
        </div>
      </div>
    </li>
  );
}
