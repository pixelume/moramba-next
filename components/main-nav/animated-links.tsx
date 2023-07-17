"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

// import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"
import { IAccommodationMainNavLinks } from "@/lib/types"

interface AnimatedLinksProps {
  // items?: NavItem[]
  items?: IAccommodationMainNavLinks[]
}

export const AnimatedLinks = ({ items }: AnimatedLinksProps) => {
  const pathName = usePathname()
  if (!items?.length) return null
  return (
    <>
      {items?.map(
        (item, index) =>
          item.href && (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "relative flex items-center whitespace-nowrap text-sm font-medium text-muted-foreground",
                // item.disabled && "cursor-not-allowed opacity-80"
              )}
            >
              {item.href === pathName && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 top-full block h-[2px] w-full rounded-full bg-gprimary"
                />
              )}
              {item.title}
            </Link>
          )
      )}
    </>
  )
}

{
  /* <nav className="flex flex-col absolute right-0 top-full p-5 md:p-0 bg-background md:bg-transparent rounded-lg md:rounded-none md:static md:flex-row gap-6"></nav> */
}
