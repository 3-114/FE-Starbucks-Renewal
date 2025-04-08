'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ToggleSelectionBoxProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  checked?: boolean;
  onClick?: () => void;
  className?: string;
}

export const ToggleSelectionBox = ({
  icon,
  title,
  description,
  checked = false,
  onClick,
  className,
}: ToggleSelectionBoxProps) => {
  return (
    <div
      className={cn(
        'relative flex items-center gap-3 rounded-lg border p-4 transition-all cursor-pointer',
        checked
          ? 'border-[#01A862] border-2'
          : 'border-border bg-background hover:bg-accent/5',
        className
      )}
      onClick={onClick}
    >
      <div
        className={cn(
          'flex h-10 w-10 shrink-0 items-center justify-center rounded-full',
          checked
            ? 'bg-[#01A862] text-primary-foreground'
            : 'bg-muted text-muted-foreground'
        )}
      >
        {icon}
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
