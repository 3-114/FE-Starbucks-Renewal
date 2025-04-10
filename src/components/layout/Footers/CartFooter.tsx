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
  return (
    <BottomButtonWrapper className="px-6 pt-5 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
      <div className="flex justify-between">
        <p>총 {totalCount}건</p>
        <p>{finalTotal.toLocaleString()}원</p>
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
  );
}
