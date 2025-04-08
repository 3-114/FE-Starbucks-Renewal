'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

export const ToggleSelectionBox = ({
  imgSrc,
  title,
  description,
  checked = false,
  onClick,
  className,
}: {
  imgSrc: string;
  title: string;
  description: string;
  checked?: boolean;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'relative flex items-center gap-3 rounded-lg border-2 p-4 transition-all cursor-pointer',
        checked
          ? 'border-[#01A862]'
          : 'border-transparent bg-background hover:bg-accent/5',
        className
      )}
      onClick={onClick}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full overflow-hidden bg-muted">
        <Image
          src={imgSrc}
          alt={title}
          width={20}
          height={20}
          className="object-contain"
        />
      </div>

      <div className="flex-1">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      <div
        className={cn(
          'flex h-5 w-5 items-center justify-center rounded-full border transition-all',
          checked
            ? 'border bg-transparent'
            : 'border-muted-foreground/30 bg-transparent'
        )}
      >
        {checked && <div className="h-2.5 w-2.5 rounded-full bg-[#01A862]" />}
      </div>
    </div>
  );
};
