import * as React from "react"
import Link from "next/link"

import { getEstablishment } from "@/lib/utils"
import { Icons } from "@/components/icons"

import { ResponsiveLinkMenu } from "./responsive-link-menu"

export async function MainNav() {
  const env = process.env.NODE_ENV
  const {data: {attributes: {MainNavLinks}}} = await getEstablishment()
  return (
    <div className="relative flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.moramba className="h-full w-60 text-gaccent-foreground" />
      </Link>
      <ResponsiveLinkMenu items={MainNavLinks?.filter(nav => nav.show || (!nav.show && env === 'development'))} />
    </div>
  )
}
