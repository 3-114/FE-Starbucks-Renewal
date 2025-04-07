'use client';

import React from 'react';
import { Check } from 'lucide-react';
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
          ? 'border-primary bg-primary/5'
          : 'border-border bg-background hover:bg-accent/5',
        className
      )}
      onClick={onClick}
    >
      <div
        className={cn(
          'flex h-10 w-10 shrink-0 items-center justify-center rounded-full',
          checked
            ? 'bg-primary text-primary-foreground'
            : 'bg-muted text-muted-foreground'
        )}
      >
        {icon}
      </div>

      <div className="flex-1">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      <div
        className={cn(
          'flex h-5 w-5 items-center justify-center rounded-full border transition-all',
          checked
            ? 'border-primary bg-primary text-primary-foreground'
            : 'border-muted-foreground/30 bg-transparent'
        )}
      >
        {checked && <Check className="h-3 w-3" />}
      </div>
    </div>
  );
};

export const ToggleSelectionBoxGroup = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn('flex flex-col gap-3', className)}>{children}</div>;
};
