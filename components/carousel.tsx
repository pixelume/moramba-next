"use client"

import { useCallback, useEffect } from "react"
import Image, { StaticImageData } from "next/image"
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react"
import { useMediaQuery } from "usehooks-ts"

import { Icons } from "./icons"
import { Button } from "./ui/button"

// interface CarouselProps {
//     imgsrcs: StaticImageData[]
//     options?: EmblaOptionsType
// }
interface CarouselProps {
  images: {
    url: string
    width: number
    height: number
    blurhash: string
    alternativeText: string
  }[]
  options?: EmblaOptionsType
}

// export const Carousel = ({ imgsrcs, options }: CarouselProps) => {
export const Carousel = ({ images, options }: CarouselProps) => {
  console.log(images)
  const isMax640 = useMediaQuery("(max-width: 640px)")
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  )
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  )

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi])

  return (
    <>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {/* {imgsrcs.map((imgsrc, i) => ( */}
          {images.map((image, i) => {
            return (
              <div
                className="flex h-full w-full shrink-0 grow-0 basis-full items-center justify-center"
                key={i}
              >
                <Image
                  src={image.url}
                  alt={image.alternativeText ?? ""}
                  className="object-cover object-center"
                  // placeholder="blur"
                  width={image.width}
                  height={image.height}
                  priority
                />
              </div>
            )
          })}
        </div>
      </div>
      {!isMax640 && (
        <>
          <Button
            variant="ghost"
            className="absolute left-1 top-1/2 -translate-y-1/2"
            onClick={scrollPrev}
          >
            <Icons.chevronLeft />
          </Button>
          <Button
            variant="ghost"
            className="absolute right-1 top-1/2 -translate-y-1/2"
            onClick={scrollNext}
          >
            <Icons.chevronRight />
          </Button>
        </>
      )}
    </>
  )
}
