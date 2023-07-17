import { IAccommodationBed } from "@/lib/types"
import { Badge } from "@/components/ui/badge"
import { Icons } from "@/components/icons"

import { TooltipWrapper } from "./tooltip-wrapper"

interface BadgePropsProps {
  maxGuests: number | null
  unitPrice: number | null
  unitBathrooms: number | null
  beds: IAccommodationBed[] | undefined
  hasKitchen: boolean | null
}

export const Badges = ({
  maxGuests,
  unitPrice,
  unitBathrooms,
  beds,
  hasKitchen,
}: BadgePropsProps) => {
  const nrOfBeds = beds?.reduce((total, bed) => total + (bed.qty || 0), 0)
  return (
    <>
      <TooltipWrapper
        content={<p>{`Maximum number of guests: ${maxGuests}`}</p>}
      >
        <Badge variant="gprimary">
          <Icons.users size={20} className="mr-2" />
          {maxGuests}
        </Badge>
      </TooltipWrapper>
      <TooltipWrapper content={<p>{`Total of ${nrOfBeds} beds / sleeper couches in unit`}</p>}>
        <Badge variant="gprimary">
          <Icons.bedSingle size={20} className="mr-2" />
          {nrOfBeds}
        </Badge>
      </TooltipWrapper>
      <TooltipWrapper content={<p>{`${unitBathrooms} Bathrooms`}</p>}>
        <Badge variant="gprimary">
          <Icons.bath size={20} className="mr-2" />
          {unitBathrooms}
        </Badge>
      </TooltipWrapper>
      {hasKitchen && (
        <TooltipWrapper content={<p>Kitchen</p>}>
          <Badge variant="gaccent">
            <Icons.utensils size={20} />
          </Badge>
        </TooltipWrapper>
      )}
      <TooltipWrapper content={<p>{`R ${unitPrice} per night`}</p>}>
        <Badge variant="hprimary">
          <Icons.banknote size={20} className="mr-2" />R{unitPrice}/n
        </Badge>
      </TooltipWrapper>
    </>
  )
}
