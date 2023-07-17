import { PageWrapper } from "@/components/page-wrapper"

import { ColorBlock } from "./color-block"

const blockColors = [
  { classes: "bg-border", label: "border" },
  { classes: "bg-input", label: "input" },
  { classes: "bg-ring", label: "ring" },
  { classes: "bg-background", label: "background" },
  { classes: "bg-foreground text-background", label: "foreground" },
  { classes: "bg-primary text-primary-foreground", label: "primary" },
  { classes: "bg-secondary text-secondary-foreground", label: "secondary" },
  {
    classes: "bg-destructive text-destructive-foreground",
    label: "destructive",
  },
  { classes: "bg-muted text-muted-foreground", label: "muted" },
  { classes: "bg-accent text-accent-foreground", label: "accent" },
  { classes: "bg-popover text-popover-foreground", label: "popover" },
  { classes: "bg-card text-card-foreground", label: "card" },
  { classes: "bg-hprimary text-hprimary-foreground", label: "hprimary" },
  { classes: "bg-hsecondary text-hsecondary-foreground", label: "hsecondary" },
  { classes: "bg-gprimary text-gprimary-foreground", label: "gprimary" },
  { classes: "bg-gsecondary text-gsecondary-foreground", label: "gsecondary" },
  { classes: "bg-gaccent text-gaccent-foreground", label: "gaccent" },
]

export default function ColorPage() {
  return (
    <div className="relative h-full">
      <PageWrapper className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        {/* <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10"> */}
        <div className="flex flex-wrap gap-3">
          {blockColors.map(({ classes, label }, i) => (
            <ColorBlock classes={classes} i={i}>
              {label}
            </ColorBlock>
          ))}
        </div>
        {/* </section> */}
      </PageWrapper>
    </div>
  )
}
