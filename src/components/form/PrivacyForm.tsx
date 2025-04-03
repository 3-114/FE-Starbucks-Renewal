import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import BottomButtonWrapper from '../layout/Footers/BottomButtonWrapper';

export default function privacyForm() {
  return (
    <form className="w-full relative space-y-4">
      <Checkbox />
      <BottomButtonWrapper>
        <Button
          type="submit"
          variant="largetpye"
          size="lg"
          className="w-full text-lg font-bold py-6"
        >
          다음
        </Button>
      </BottomButtonWrapper>
    </form>
  );
}
