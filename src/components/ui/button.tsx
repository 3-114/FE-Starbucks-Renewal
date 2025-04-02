import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

import { UiColorData } from '@/data/ui/UiColorData';

// 공통 : text -sm,
// font-medium, rounded-md, outline-none ,
// [&_svg]:pointer-events-none,
// gap-2 제거,
const buttonVariants = cva(
  "rounded-full inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          'px-3 bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
        destructive:
          'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        secondary:
          'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
        ghost:
          'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
        largetpye:
          'text-sm text-primary-foreground font-medium gap-[10px] shadow-xs hover:bg-primary/90 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        middletpye:
          'text-base text-primary-foreground font-semibold gap-[10px] shadow-xs hover:bg-primary/90 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        smalltpye:
          'text-xs text-primary-foreground font-semibold gap-[10px] shadow-xs hover:bg-primary/90 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        navcarousel:
          'text-[14px] font-semibold tracking-normal whitespace-nowrap transition-colors rounded-none leading-[17px]',
      },
      size: {
        default: 'px-4 py-2 has-[>svg]:px-3',
        icon: 'size-9',
        agree: 'rounded-xl h-[50px]',
        detailedproduct: 'h-[46px]',
        cart: 'h-[44px]',
        xl: 'h-[42px]',
        lg: 'h-[40px] has-[>svg]:px-3',
        md: 'h-[38px]',
        formmd: 'rounded-2xl h-[38px]',
        tag: 'h-[32px]',
        sm: 'rounded-xl h-[26px]',
        xs: 'rounded-full h-[19px]',
        large: 'h-[32px]',
        small: 'h-[30px]',
        tiny: 'h-[28px]',
        navcarousel: 'px-[22px] py-[19px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({
  className,
  variant,
  size,
  color = 'default',
  asChild = false,
  amount = undefined,
  children,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    color?: keyof typeof UiColorData;
    amount?: number | undefined;
  }) {
  const Comp = asChild ? Slot : 'button';

  const buttonChildren =
    amount !== undefined ? `${amount}` + String(children) : children;

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size, className }),
        UiColorData[color]
      )}
      {...props}
    >
      {buttonChildren}
    </Comp>
  );
}

export { Button, buttonVariants };
