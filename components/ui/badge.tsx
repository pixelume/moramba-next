import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
        hprimary: "bg-hprimary text-hprimary-foreground hover:bg-hprimary/80 text-hprimary-foreground",
        gprimary: "bg-gprimary text-gprimary-foreground hover:bg-gprimary/80 text-gprimary-foreground",
        gsecondary: "bg-gsecondary text-gsecondary-foreground hover:bg-gsecondary/80 text-gsecondary-foreground",
        gaccent: "bg-gaccent text-gaccent-foreground hover:bg-gaccent/80 text-gaccent-foreground",
        houtline: "border border-hprimary text-hprimary-foreground hover:bg-hprimary",
        sky: "bg-sky-400 dark:bg-sky-800 text-foreground",
        green: "bg-green-400 dark:bg-green-800 text-foreground",
        orange: "bg-orange-500 dark:bg-orange-900 text-foreground",
        indigo: "bg-indigo-500 dark:bg-indigo-900 text-foreground",
        fuchsia: "bg-fuchsia-400 dark:bg-fuchsia-800 text-foreground",
        ring: "bg-ring text-ring-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
