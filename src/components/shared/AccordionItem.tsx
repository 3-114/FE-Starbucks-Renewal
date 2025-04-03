import Link from 'next/link';
import { Checkbox } from '@/components/ui/checkbox';
import { ChevronRight } from 'lucide-react';

export default function AccordionItem({
  label,
  link,
}: {
  label: string;
  link: string;
}) {
  return (
    <div className="flex items-start w-full space-x-4">
      <Checkbox variant="green" data-required="true" />
      <div className="flex justify-between flex-1">
        <p className="text-md/normal">{label}</p>
        <Link href={link}>
          <ChevronRight className="w-5 h-5 text-[#4D4D4D] cursor-pointer hover:text-gray-600" />
        </Link>
      </div>
    </div>
  );
}
