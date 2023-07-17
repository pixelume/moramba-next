import {
  Sheet,
  SheetContent,
  //   SheetDescription,
  //   SheetHeader,
  //   SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Icons } from "../icons"
import { Button } from "../ui/button"

interface MobileMenuSheetProps {
  children: React.ReactNode
}

export const MobileMenuSheet = ({ children }: MobileMenuSheetProps) => {
  // export const MobileMenuSheet = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button className="p-0" variant="ghost" size="sm">
          <Icons.menu />
        </Button>
      </SheetTrigger>
      <SheetContent size="content">
        <nav className="flex flex-col gap-6">{children}</nav>
      </SheetContent>
    </Sheet>
  )
}
