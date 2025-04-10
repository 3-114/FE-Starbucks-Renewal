import Image from 'next/image';
import { ProductData } from '@/types/ResponseDataTypes';
import ItemCheckbox from '@/components/ui/cart/ItemCheckbox';
import QuantityControl from '@/components/ui/cart/QuantityControl';
import RemoveButton from '@/components/ui/cart/RemoveButton';

export default function CartItemBox({ item }: { item: ProductData }) {
  return (
    <div className="bg-white mb-2 p-4 flex items-start">
      <div className="mt-1 mr-2">
        <ItemCheckbox id={item.uuid} checked={item.checked} />
      </div>

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
              <p className="text-sm font-medium">{item.name}</p>
              <RemoveButton id={item.uuid} />
            </div>

            <div className="flex items-center justify-between">
              <QuantityControl id={item.uuid} quantity={item.quantity} />
              <p className="font-medium">
                {(item.price * item.quantity).toLocaleString()}원
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
