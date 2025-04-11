import { Button } from '@/components/ui/button';
import BottomButtonWrapper from '@/components/layout/Footers/BottomButtonWrapper';

interface CartFooterProps {
  totalCount: number;
  finalTotal: number;
}

export default function CartFooter({
  totalCount,
  finalTotal,
}: CartFooterProps) {
  const isDisabled = totalCount === 0 || finalTotal === 0;
  return (
    <BottomButtonWrapper className="px-6 pt-5 shadow-[0_0_10px_rgba(0,0,0,0.1)] z-1">
      <div className="flex justify-between items-center">
        <p className="text-base/normal">
          총 <span className="text-[#01A862] font-semibold">{totalCount}</span>
          건
        </p>
        <p className="text-2xl/normal font-semibold">
          {finalTotal.toLocaleString()}원
        </p>
      </div>
      <div className="flex pt-4 gap-x-3">
        <Button
          type="button"
          variant="smalltpye"
          size="cart"
          color={isDisabled ? 'transparent' : 'white'}
          disabled={isDisabled}
          className={`basis-[calc(50%-6px)] text-base font-semibold  py-6
    ${
      isDisabled
        ? 'bg-white border border-gray-300 text-gray-300'
        : 'border border-[#01A862] text-[#01A862]'
    }`}
        >
          선물하기
        </Button>

        <Button
          type="button"
          variant="smalltpye"
          size="cart"
          color={isDisabled ? 'gray' : 'default'}
          disabled={isDisabled}
          className={`basis-[calc(50%-6px)] text-base font-semibold py-6 ${
            isDisabled ? 'text-white' : ''
          }`}
        >
          구매하기
        </Button>
      </div>
    </BottomButtonWrapper>
  );
}
