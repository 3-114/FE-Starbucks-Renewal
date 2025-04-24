import { getProductDetail } from '@/actions/product-service';
import Image from 'next/image';
import ProductPrice from '@/components/feature/boxs/ProductPriceBox';
import Tag from '@/components/feature/boxs/tabBox';
import ProductDescription from '@/components/shared/ProductDescription';
import ProductActionBar from '@/components/layout/Footers/ProductActionBar';
import { Share } from 'lucide-react';

export default async function ProductDetail({
  productUuid,
}: Readonly<{ productUuid: string }>) {
  const productDetail = await getProductDetail(productUuid);
  return (
    <main className="pb-30">
      <Image
        src={productDetail.thumbnailList[0].productThumbnailUrl}
        alt={'상품임'}
        width={600}
        height={600}
        className="mx-auto w-full md:w-3xl"
      />
      <section id="productSummary" className="p-6 space-y-4">
        <div className="flex justify-between">
          <h1 className=" text-[1.375rem] font-bold w-fit space-x-2 ">
            <p>{productDetail.productName}</p>
            <Tag
              active={true}
              text="new"
              className="text-custom-green-100 text-sm"
            />
            <Tag
              active={true}
              text="best"
              className="text-custom-red-100 text-sm"
            />
          </h1>
          <Share className=" min-w-5 size-5 mt-2" />
        </div>
        <h2 className=" text-xs text-custom-gray-500 ">
          {productDetail.productDescription}
        </h2>
        <ProductPrice
          price={productDetail.productPrice}
          discountRate={0}
          priceClassName={'text-[1.125rem]'}
          discountPriceClassName="text-[1.25rem]"
          discountRateClassName="text-[1.25rem]"
          discountContainerClassName="justify-end gap-x-4 flex-row-reverse"
        />
      </section>

      <ProductDescription
        imageList={productDetail.thumbnailList.map(
          (thumb) => thumb.productThumbnailUrl
        )}
      />

      <ProductActionBar
        productUuid={productDetail.productUuid}
        defaultPrice={productDetail.productPrice}
      />
    </main>
  );
}
