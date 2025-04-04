import { Checkbox } from '@/components/ui/checkbox';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export const CheckBoxGroup = ({
  link = '#',
  label,
  className,
  required = false,
}: {
  checked?: boolean;
  link?: string;
  label: string;
  className: string;
  required?: boolean;
}) => {
  return (
    <div className="flex items-center gap-2 py-4 relative">
      <Checkbox
        className={className}
        data-required={required}
        variant="green"
      />
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
