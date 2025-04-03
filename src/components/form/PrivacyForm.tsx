import BottomButtonWrapper from '../layout/Footers/BottomButtonWrapper';

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';

export default function PrivacyForm() {
  return (
    <form className="w-full space-y-6">
      <Checkbox variant="green" />
      <BottomButtonWrapper className="px-7">
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
