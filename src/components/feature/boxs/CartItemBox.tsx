import Image from 'next/image';
import ItemCheckbox from '@/components/ui/cart/ItemCheckbox';
import QuantityControl from '@/components/ui/cart/QuantityControl';
import RemoveButton from '@/components/ui/cart/RemoveButton';

export default function CartItemBox({
  item,
}: {
  item: {
    productUuid: string;
    productName: string;
    productPrice: number;
    productThumbnailUrl: string;
    isThumbnail: boolean;
    quantity: number;
    selected: boolean;
    shippingFee: number;
  };
}) {
  return (
    <div className="bg-white mb-2 p-4 flex items-start text-sm font-semibold gap-2">
      <ItemCheckbox id={item.productUuid} checked={item.selected} />
      <Image
        src={'/avatarUrl.png'}
        alt="product image"
        width={84}
        height={84}
        className="bg-gray-200 mr-2"
      />
      <div className="flex-1 space-y-2">
        <div className="flex justify-between">
          <p>{item.productName}</p>
          <RemoveButton id={item.productUuid} />
        </div>
        <div className="flex justify-between">
          <QuantityControl id={item.productUuid} quantity={item.quantity} />
          <p className="text-base/normal font-semibold">
            {(item.productPrice * item.quantity).toLocaleString()}원
          </p>
        </div>
      </div>
    </div>
  );
}
