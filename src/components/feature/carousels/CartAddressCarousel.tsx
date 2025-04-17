'use client';

import {
  useEffect,
  useState,
  useTransition,
  useOptimistic,
  useCallback,
} from 'react';
import Link from 'next/link';
import { Plus } from 'lucide-react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import AddressItemBox from '@/components/feature/boxs/AddressItemBox';
import type { AddressDetailType } from '@/types/ResponseDataTypes';
import { fetchUpdateAddress } from '@/actions/cart-service';

export default function CartAddressCarousel({
  addressList,
}: {
  addressList: AddressDetailType[];
}) {
  const router = useRouter();

  const [api, setApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPending, startTransition] = useTransition();
  const [confirmedAddressList, setConfirmedAddressList] =
    useState<AddressDetailType[]>(addressList);

  const [optimisticList, updateOptimisticList] = useOptimistic(
    confirmedAddressList,
    (
      prev: AddressDetailType[],
      payload: { index: number; update: Partial<AddressDetailType> }
    ) => {
      return prev.map((item, idx) => ({
        ...item,
        selected: idx === payload.index,
        ...(idx === payload.index ? payload.update : {}),
      }));
    }
  );

  const updateAddress = useCallback(
    async (index: number, update: Partial<AddressDetailType>) => {
      const target = optimisticList[index];

      startTransition(() => {
        updateOptimisticList({ index, update });
      });

      try {
        await fetchUpdateAddress(target.deliveryUuid);
        const updatedList = confirmedAddressList.map((item, idx) => ({
          ...item,
          selected: idx === index,
          ...(idx === index ? update : {}),
        }));
        setConfirmedAddressList(updatedList);
      } catch (err) {
        console.error('주소 업데이트 실패', err);
      }
    },
    [optimisticList, confirmedAddressList, updateOptimisticList]
  );

  useEffect(() => {
    if (!api) return;

    function handleSelect() {
      const index = api!.selectedScrollSnap();

      if (index >= optimisticList.length) return;

      setCurrentIndex(index);
      updateAddress(index, { selected: true });
    }

    api.on('select', handleSelect);
    return () => {
      api.off('select', handleSelect);
    };
  }, [api, updateAddress, optimisticList.length]);

  const handleAddAddress = () => {
    router.push('/account/addresses/new');
  };

  const totalSlides = optimisticList.length + 1;

  return (
    <section>
      {optimisticList.length > 0 ? (
        <Carousel
          setApi={setApi}
          className="h-22 px-7 text-xs/normal tracking-normal bg bg-muted/50 shadow-inner"
          opts={{ skipSnaps: false, dragFree: false }}
        >
          <CarouselContent>
            {optimisticList.map((item) => (
              <CarouselItem key={item.deliveryUuid}>
                <AddressItemBox
                  address={{
                    alias: item.alias || '기본 배송지',
                    zoneCode: item.zoneCode,
                    mainAddress: item.mainAddress,
                  }}
                  error={false}
                />
              </CarouselItem>
            ))}

            <CarouselItem className="sm:basis-1/2 md:basis-1/3">
              <Button
                variant="ghost"
                size="lg"
                onClick={handleAddAddress}
                color="transparent"
                className="h-22 w-full border border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center gap-2 cursor-pointer bg-muted/20"
                disabled={isPending}
              >
                <div className="bg-gray-100 rounded-full p-2">
                  <Plus size={20} className="text-gray-500" />
                </div>
                <p className="text-gray-500 text-sm font-semibold">
                  배송지 등록
                </p>
              </Button>
            </CarouselItem>
          </CarouselContent>

          {currentIndex > 0 && (
            <CarouselPrevious
              variant="ghost"
              size="icon"
              color="transparent"
              className="left-0 bg-none border-none shadow-none text-gray-500 hover:text-black"
              disabled={isPending}
            />
          )}
          {currentIndex < totalSlides - 1 && (
            <CarouselNext
              variant="ghost"
              size="icon"
              color="transparent"
              className="right-0 bg-none border-none shadow-none text-gray-500 hover:text-black"
              disabled={isPending}
            />
          )}
        </Carousel>
      ) : (
        <aside className="p-6 text-sm bg-muted/50 flex items-start justify-between shadow-inner tracking-normal">
          <div className="font-semibold">
            <p>등록된 배송지가 없습니다.</p>
            <p>배송지를 등록해주세요.</p>
          </div>
          <Link
            href="/account/addresses/new"
            className="text-[#9F7147] text-xs whitespace-nowrap"
          >
            배송지 등록
          </Link>
        </aside>
      )}
    </section>
  );
}
