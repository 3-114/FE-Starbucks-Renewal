import { Button } from '@/components/ui/button';
import BottomButtonWrapper from '@/components/layout/Footers/BottomButtonWrapper';
import AccordionItem from '@/components/shared/AccordionItem';
import { AgreementItemsProp } from '@/types/ResponseDataTypes';
import { Checkbox } from '@/components/ui/checkbox';

export default function PrivacyForm({ data }: { data: AgreementItemsProp[] }) {
  return (
    <form className="group w-full font-semibold tracking-tighter">
      <section className="px-7 space-y-7">
        <div className="flex space-x-2">
          <Checkbox variant="green" />
          <p>전체 동의</p>
        </div>

        <hr className="border-t border-gray-300" />

        {data.map(({ id, label, link }) => (
          <AccordionItem key={id} label={label} link={link} />
        ))}

        <div className="pl-14 space-y-2 text-sm/normal">
          <p>광고성 정보 수신 팝업</p>
          <div className="flex space-x-10">
            <div className="flex space-x-2">
              <Checkbox variant="green" />
              <p>E-mail</p>
            </div>
            <div className="flex space-x-2">
              <Checkbox variant="green" />
              <p>SMS</p>
            </div>
          </div>
        </div>
      </section>

      <BottomButtonWrapper className="px-7">
        <Button
          type="submit"
          variant="largetpye"
          size="lg"
          className="
            w-full text-lg font-bold py-6
            group-has-[button[data-state=unchecked][data-required=true]]:bg-[#E0E0E0]
            group-has-[button[data-state=unchecked][data-required=true]]:pointer-events-none
            "
        >
          다음
        </Button>
      </BottomButtonWrapper>
    </form>
  );
}
