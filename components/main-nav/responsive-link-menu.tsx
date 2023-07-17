"use client"

import { useMediaQuery } from "usehooks-ts"

import { AnimatedLinks } from "./animated-links"
import { MobileMenuSheet } from "./mobile-menu-sheet"
import { IAccommodationMainNavLinks } from "@/lib/types"

interface ResponsiveLinkMenuProps {
  items?: IAccommodationMainNavLinks[]
}

export const ResponsiveLinkMenu = ({ items }: ResponsiveLinkMenuProps) => {
  const isMax640 = useMediaQuery("(max-width: 640px)")
  return isMax640 ? (
    <MobileMenuSheet>
      <AnimatedLinks items={items} />
    </MobileMenuSheet>
  ) : (
    <nav className="flex gap-6">
      <AnimatedLinks items={items} />
    </nav>
  )
}
