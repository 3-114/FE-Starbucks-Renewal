import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export const LinkBoxGroup = ({
  link = '#',
  label,
  className,
}: {
  link?: string;
  label: string;
  className: string;
}) => {
  return (
    <div className="flex items-center gap-2 py-4 relative">
      <label className={className}>{label}</label>
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
