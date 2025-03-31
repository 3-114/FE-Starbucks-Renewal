import * as React from "react"
import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"

const inputVariants = cva(
  "text-base outline-none transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "flex h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 shadow-xs md:text-sm",
        login:
          "w-full border-0 border-b border-gray-300 bg-transparent px-0 shadow-none placeholder:text-black font-black rounded-none",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface InputProps extends React.ComponentProps<"input"> {
  variant?: string; 
}
function Input({ className, type, variant = "default", ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        inputVariants({ variant }),
        "placeholder:text-gray-600 selection:bg-primary selection:text-primary-foreground",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
