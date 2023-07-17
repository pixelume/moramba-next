import Image from "next/image"
import Link from "next/link"
import clsx from "clsx"

import { IAccommodationBed, IMediaFormat } from "@/lib/types"

import { buttonVariants } from "../../../components/ui/button"
import { SlideInLeft } from "../../../components/ui/slide-in-left"
import { Badges } from "./badges"

interface PictureCardProps {
  i: number
  unitName: string | null
  unitDescription: string | null
  image?: IMediaFormat | null
  alternativeText: string | null
  slug: string | null
  maxGuests: number | null
  unitPrice: number | null
  unitBathrooms: number | null
  beds: IAccommodationBed[] | undefined
  hasKitchen: boolean | null
  unitBedrooms: number | null
}

export const PictureCard = ({
  i,
  unitName,
  unitDescription,
  image,
  alternativeText,
  slug,
  maxGuests,
  unitPrice,
  unitBathrooms,
  beds,
  hasKitchen,
  unitBedrooms,
}: PictureCardProps) => {
  return (
    <SlideInLeft
      delay={i * 0.1 + 0.3}
      duration={0.5}
      className="flex w-full flex-wrap items-center gap-5 rounded-2xl bg-accent p-5 sm:flex-nowrap"
    >
      <div
        className={clsx(
          "h-48 w-80 shrink-0 overflow-hidden rounded-lg bg-hprimary shadow-md"
        )}
      >
        {image && (
          <Image
            src={image.url}
            alt={alternativeText ?? ""}
            width={image.width}
            height={image.height}
            priority={i < 3}
          />
        )}
      </div>
      <div className="flex flex-col justify-between gap-y-6 sm:h-full">
        <div className="flex gap-x-2 items-baseline">
          <h2 className="text-xl">{unitName}</h2>
          <p className="max-w-[700px] text-xs opacity-70">{`(${unitBedrooms} bedroom${
            (unitBedrooms || 0) === 1 ? "" : "s"
          })`}</p>
        </div>
        <div className="flex gap-x-2">
          <Badges {...{ maxGuests, unitPrice, unitBathrooms, beds, hasKitchen }} />
        </div>
        <p className="line-clamp-4">{unitDescription}</p>
        {slug && (
          <Link
            href={`/accommodation/${slug}`}
            className={clsx(
              "self-end",
              // buttonVariants({ variant: "hsecondary" })
              buttonVariants()
            )}
          >
            {`View and Book ${unitName}`}
          </Link>
        )}
      </div>
    </SlideInLeft>
  )
}
