import AddressCarousel from '@/components/shared/AddressCarousel';
import CartContainer from '@/components/container/CartContainer';
import BottomButtonWrapper from '@/components/layout/Footers/BottomButtonWrapper';
import { Button } from '@/components/ui/button';

const dummyAddresses = [
  {
    id: '1',
    name: '집',
    zipcode: 12345,
    addressLine: '서울시 강남구 어딘가에 살고 있는 나',
    isDefault: true,
  },
  {
    id: '2',
    name: '회사',
    zipcode: 77777,
    addressLine: '부산시 사하구 어딘가에 살고 있는 나',
  },
];

export default function CartPage() {
  return (
    <main className="pb-42">
      <AddressCarousel addresses={dummyAddresses} />
      <CartContainer />
      <BottomButtonWrapper className="px-6 pt-5 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
        <div className="flex justify-between">
          <p>총 0건</p>
          <p>0원</p>
        </div>
        <div className="flex pt-4 gap-x-3">
          <Button
            type="button"
            variant="smalltpye"
            size="cart"
            className="basis-[calc(50%-6px)] text-lg font-bold py-6"
          >
            선물하기
          </Button>
          <Button
            type="button"
            variant="smalltpye"
            size="cart"
            className="basis-[calc(50%-6px)] text-lg font-bold py-6"
          >
            다음
          </Button>
        </div>
      </BottomButtonWrapper>
    </main>
  );
}
