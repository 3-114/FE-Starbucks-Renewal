import { Button } from '@/components/ui/button';
import BottomButtonWrapper from '@/components/layout/Footers/BottomButtonWrapper';
import { AgreementItemsProp } from '@/types/ResponseDataTypes';
import { Checkbox } from '@/components/ui/checkbox';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function PrivacyForm({ data }: { data: AgreementItemsProp[] }) {
  return (
    <form className="group w-full font-semibold tracking-tighter px-4">
      <CheckBoxGroup
        checked={true}
        label="전체동의"
        className="text-lg font-bold"
      />

      <hr className="border-t border-gray-300" />

      {data.map(({ id, label, link }) => (
        <CheckBoxGroup
          key={id}
          label={label}
          link={link}
          className="text-lg font-bold"
        />
      ))}

      <hr className="border-t border-gray-300" />
      <p className="text-sm font-bold pt-5 text-green-600">
        광고성 정보 수신 팝업
      </p>
      <div className="flex items-center gap-5">
        <CheckBoxGroup
          checked={true}
          label="E-mail"
          className="text-lg font-bold"
        />
        <CheckBoxGroup
          checked={true}
          label="SMS"
          className="text-lg font-bold"
        />
      </div>

      <BottomButtonWrapper className="px-7 py-5 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
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

export const CheckBoxGroup = ({
  checked,
  link = '#',
  label,
  className,
}: {
  checked?: boolean;
  link?: string;
  label: string;
  className: string;
}) => {
  return (
    <div className="flex items-center gap-2 py-4 relative">
      <Checkbox className={className} />
      <label>{label}</label>
      <Link
        href={link}
        className={cn(
          link && link !== '#' ? 'block' : 'hidden',
          'absolute right-0'
        )}
      >
        <ChevronRight size={16} />
      </Link>
    </div>
  );
};
