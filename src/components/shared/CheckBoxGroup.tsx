import { Checkbox } from '@/components/ui/checkbox';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export const CheckBoxGroup = ({
  link = '#',
  label,
  className,
  required = false,
  checked = false,
  onChange,
}: {
  checked?: boolean;
  link?: string;
  label: string;
  className?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="flex items-center gap-2 py-4 relative">
      <Checkbox
        className={className}
        data-required={required}
        variant="green"
        checked={checked}
        onCheckedChange={(checked) => {
          if (onChange) {
            onChange({
              target: { checked },
            } as React.ChangeEvent<HTMLInputElement>);
          }
        }}
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
