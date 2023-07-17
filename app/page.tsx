import Link from "next/link"

// import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { BackgroundImages } from "@/components/background-images"
import { PageWrapper } from "@/components/page-wrapper"
import { getEstablishment } from "@/lib/utils"

export default async function IndexPage() {
  // const {
  //   mainNav: [, accommodation, contact],
  // } = siteConfig
  const {data} = await getEstablishment()
  const heading = data.attributes.homePageBlock?.heading
  const subHeading = data.attributes.homePageBlock?.subHeading
  const buttons = data.attributes.homePageBlock?.buttonLinks
  return (
    <>
      <BackgroundImages />
      <div className="relative h-full">
        <PageWrapper className="container flex h-[calc(100vh-4rem)] flex-col justify-center gap-y-7 pb-8 pt-6 md:py-10">
          {/* <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10"> */}
          <div className="flex max-w-[980px] flex-col items-start gap-2 self-center">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
              {/* Moramba Self Catering: Your Home Away From Home */}
              {heading}
            </h1>
            {/* <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Beautifully designed components <br className="hidden sm:inline" />
            built with Radix UI and Tailwind CSS.
          </h1> */}
            <p className="max-w-[700px] text-lg text-slate-700 dark:text-slate-300">
              {/* Experience Comfort and Style in Our Contemporary Accommodation
              Units */}
              {subHeading}
            </p>
            {/* <p className="max-w-[700px] text-lg text-muted-foreground">
            Accessible and customizable components that you can copy and paste
            into your apps. Free. Open Source. And Next.js 13 Ready.
          </p> */}
          </div>
          <div className="flex gap-4 self-center">
            <Link
              href={buttons?.[0].href ?? ""}
              // target="_blank"
              // rel="noreferrer"
              className={buttonVariants()}
            >
              {buttons?.[0].title}
            </Link>
            <Link
              // target="_blank"
              // rel="noreferrer"
              href={buttons?.[1].href ?? ""}
              className={buttonVariants({ variant: "outline" })}
            >
              {buttons?.[1].title}
            </Link>
          </div>
          {/* </section> */}
        </PageWrapper>
      </div>
    </>
  )
}
