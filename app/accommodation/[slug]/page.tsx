import { getUnit, getUnits } from "@/lib/utils"
import { Carousel } from "@/components/carousel"
import { PageWrapper } from "@/components/page-wrapper"
import { ReactMarkdownCustom } from "@/components/react-markdown-custom"
import { Badges } from "../components/badges"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"

interface UnitPageProps {
  params: {
    slug: string | null
  }
}

export async function generateStaticParams() {
  const units = await getUnits()
  const params = units.map((unit) => ({
    slug: unit.attributes.slug,
  }))
  return params
}

export default async function UnitPageProps({
  params: { slug },
}: UnitPageProps) {
  const unit = await getUnit(slug ?? "")
  // const unit = units.filter((unit) => unit.attributes.slug === slug)[0]
  const { attributes } = unit
  const {
    unitName,
    unitDescription,
    unitDescriptionMarkdown,
    unitImages,
    maxGuests,
    unitPrice,
    unitBathrooms,
    beds,
    hasKitchen,
    unitBedrooms,
  } = attributes
  // const {
  //   data: {
  //     attributes: { alternativeText, formats },
  //   },
  // } = unitCoverImage as { data: IMedia }
  const images = unitImages.data.map(
    ({ attributes: { alternativeText, formats, blurhash } }) => ({
      url: formats?.large?.url ?? "",
      width: formats?.large?.width ?? 0,
      height: formats?.large?.height ?? 0,
      blurhash: blurhash,
      alternativeText: alternativeText ?? "",
    })
  )
  return (
    <div className="relative">
      <PageWrapper className="container flex flex-col items-center gap-y-7 pb-8 pt-6 md:py-10">
        <div className="flex max-w-full flex-col items-start gap-y-7">
          <h2 className="mb-5 text-3xl">{unitName}</h2>
          <div className="flex flex-wrap items-start gap-6 lg:flex-nowrap">
            <div className="relative aspect-[3/2] w-full shrink-0 overflow-hidden rounded-xl bg-hprimary lg:w-1/2">
              {/* <Carousel imgsrcs={images} options={{ loop: true }} /> */}
              <Carousel images={images} options={{ loop: true }} />
            </div>
            {/* <p>{unitDescription}</p> */}
            <div className="flex flex-col gap-y-5">
              <div className="flex gap-x-2">
                <Badges
                  {...{ maxGuests, unitPrice, unitBathrooms, beds, hasKitchen }}
                />
              </div>
              <ReactMarkdownCustom>
                {unitDescriptionMarkdown ?? ""}
              </ReactMarkdownCustom>
              <div className="self-end">

              <Link href="https://book.nightsbridge.com/22669"className={buttonVariants()} target="_blank" rel="noopener noreferrer">Book Now</Link>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </div>
  )
}
