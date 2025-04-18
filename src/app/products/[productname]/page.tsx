import BottomButtonWrapper from '@/components/layout/Footers/BottomButtonWrapper';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

export default function page() {
  return (
    <main>
      <BottomButtonWrapper>
        <div className="flex gap-2">
          <Button>
            <ShoppingCart />
          </Button>
          <Button
            variant="largetpye"
            size="lg"
            className="w-full text-lg font-bold py-6"
          >
            구매하기
          </Button>
        </div>
      </BottomButtonWrapper>
    </main>
  );
}
