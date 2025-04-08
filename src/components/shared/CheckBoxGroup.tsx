'use client';

import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export const CheckBoxGroup = ({
  link = '#',
  label,
  className,
  required = false,
  checked,
  onChange,
}: {
  checked?: boolean;
  link?: string;
  label: string;
  className?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const [internalChecked, setInternalChecked] = useState(false);

  const isControlled = typeof checked === 'boolean';
  const currentChecked = isControlled ? checked : internalChecked;

  const handleCheckChange = (checked: boolean) => {
    if (onChange) {
      onChange({
        target: { checked },
      } as React.ChangeEvent<HTMLInputElement>);
    } else {
      setInternalChecked(!!checked);
    }
  };

  return (
    <div className="flex items-center gap-2 py-4 relative cursor-pointer select-none">
      <Checkbox
        className={className}
        data-required={required}
        variant="green"
        checked={currentChecked}
        onCheckedChange={handleCheckChange}
      />
      <label className="cursor-pointer">{label}</label>
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
