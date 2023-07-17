import { IMedia } from "@/lib/types"
import { getUnits } from "@/lib/utils"
import { PageWrapper } from "@/components/page-wrapper"
import { PictureCard } from "@/app/accommodation/components/picture-card"

export default async function AccommodationPage() {
  const units = await getUnits()
  console.log(units)
  return (
    <div className="relative">
      <PageWrapper className="container flex flex-col items-center gap-y-7 pb-8 pt-6 md:py-10">
        <h2 className="mb-5 text-3xl">Self Catering Units</h2>
        <div className="flex max-w-[980px] flex-col items-start gap-y-7">
          {units.map((unit, i) => {
            const {
              id,
              attributes: { unitName, unitDescription, unitDescriptionMarkdown, unitCoverImage, slug, maxGuests, unitPrice, unitBathrooms, beds, hasKitchen, unitBedrooms },
            } = unit
            const {
              data: {
                attributes: { alternativeText, formats },
              },
            } = unitCoverImage as { data: IMedia }
            const image = formats?.small
            return (
              <PictureCard
                key={id}
                i={i}
                {...{ unitName, unitDescription, unitDescriptionMarkdown, image, alternativeText, slug, maxGuests, unitPrice, unitBathrooms, beds, hasKitchen, unitBedrooms }}
              />
            )
          })}
        </div>
      </PageWrapper>
    </div>
  )
}
