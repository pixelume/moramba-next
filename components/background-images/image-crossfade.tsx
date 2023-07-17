"use client"

import { memo, useEffect, useState } from "react"
import Image from "next/image"
import clsx from "clsx"
import wait from "waait"

interface ImageCrossFadeProps {
  imgUrl: string
  width: number
  height: number
}

const CrossFade = ({ imgUrl, width, height }: ImageCrossFadeProps) => {
  const [fadeIn, setFadeIn] = useState<boolean>(false)
  const [loaded, setLoaded] = useState<boolean>(false)
  const [loadedImage, setLoadedImage] = useState<string>(imgUrl)

  useEffect(() => {
    setLoaded(false)
    setFadeIn(true)
  }, [imgUrl])

  return (
    <>
      {fadeIn && (
        <Image
          onLoadingComplete={() => {
            setLoaded(true)
            wait(2100).then(() => {
              setLoadedImage(imgUrl)
            })
          }}
          alt=""
          src={imgUrl}
          priority
          width={width}
          height={height}
          className={clsx(
            "absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 object-cover object-center opacity-0 portrait:h-full landscape:w-full transition-opacity duration-2000",
            { "opacity-100": loaded }
          )}
        />
      )}
      {loadedImage && (
        <Image
          onLoadingComplete={() => {
            setFadeIn(false)
          }}
          alt=""
          src={loadedImage}
          priority
          width={width}
          height={height}
          className={`absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 object-cover object-center portrait:h-full landscape:w-full`}
        />
      )}
    </>
  )
}

export const ImageCrossFade = memo(CrossFade)
