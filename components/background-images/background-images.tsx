// import Image from "next/image"
// import mathembaLiving from "@/public/mathemba-living.jpg"

// export const BackgroundImages = () => {
//   return (
//     <div className="absolute left-0 top-0 z-0 h-full w-full opacity-50 dark:opacity-25">
//       <Image
//         src={mathembaLiving}
//         alt="Mathemba living room"
//         placeholder="blur"
//         className="object-cover object-center"
//       />
//     </div>
//   )
// }

"use client"

import React, { useState, useEffect } from "react"
import {ImageCrossFade} from "./image-crossfade"
import wait from "waait"

export const BackgroundImages = () => {

  const [image, setImage] = useState<number>(0)

  const images = [
    '/bg-img/bg-0.jpg',
    '/bg-img/bg-1.jpg',
    '/bg-img/bg-2.jpg',
    '/bg-img/bg-3.jpg',
    '/bg-img/bg-4.jpg',
    '/bg-img/bg-5.jpg',
    '/bg-img/bg-6.jpg',
    '/bg-img/bg-7.jpg',
    '/bg-img/bg-8.jpg',
    '/bg-img/bg-9.jpg',
    '/bg-img/bg-10.jpg',
    '/bg-img/bg-11.jpg',
  ]

  useEffect(() => {
    wait(10000).then(() => {
      setImage((image + 1) % images.length)
    })
  }, [image, images.length])

  return (
    <div className="fixed left-0 top-0 z-0 h-full w-full opacity-50 dark:opacity-35">
      <ImageCrossFade
        imgUrl={images[image]} width={1920} height={1280}
      />
    </div>
  )
}