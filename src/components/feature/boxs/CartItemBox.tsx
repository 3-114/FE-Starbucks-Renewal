import Image from 'next/image';
import { ProductData } from '@/types/ResponseDataTypes';
import ItemCheckbox from '@/components/ui/cart/ItemCheckbox';
import QuantityControl from '@/components/ui/cart/QuantityControl';
import RemoveButton from '@/components/ui/cart/RemoveButton';

export default function CartItemBox({ item }: { item: ProductData }) {
  return (
    <div className="bg-white mb-2 p-4 flex items-start text-sm font-semibold">
        <ItemCheckbox id={item.uuid} checked={item.checked}/>
          <Image
            src={item.image}
            alt="product image"
            width={84}
            height={84}
            className="bg-gray-200 mr-2"
          />
          <div className='flex-1 space-y-2'>
          <div className='flex justify-between'>
          <p>{item.name}</p>
          <RemoveButton id={item.uuid} />
          </div>
          <div className='flex justify-between'>
          <QuantityControl id={item.uuid} quantity={item.quantity} />
              <p className='text-base/normal font-semibold'>
                {(item.price * item.quantity).toLocaleString()}원
              </p>
          </div>
          </div>
    </div>
  );
}
