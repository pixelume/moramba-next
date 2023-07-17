import { clsx, type ClassValue } from "clsx"
import { siteConfig } from "config/site"
import { twMerge } from "tailwind-merge"

import { IUnit } from "./types"
import { IMorambaSelfCatering } from "./types/api/MorambaSelfCatering"

const API_BASE_URL = process.env.API_BASE_URL

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// fetchers
const { establishmentModel, unitModel } = siteConfig

export async function getEstablishment() {
  const res = await fetch(
    `${API_BASE_URL}/${establishmentModel}?populate[EstablishmentAddress][populate][0]=contactPersons&populate[MainNavLinks]=*&populate[homePageBlock][populate][0]=buttonLinks`,
    { next: { tags: [establishmentModel] } }
  )
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }

  return (await res.json()) as {
    data: IMorambaSelfCatering<
      | "accommodation.address"
      | "accommodation.main-nav-links"
      | "accommodation.content-block1"
    >
  }
}

const fetchUnits = () =>
  fetch(
    `${API_BASE_URL}/${establishmentModel}?fields[0]=${unitModel}s&populate[${unitModel}s][populate][0]=unitCoverImage,unitImages,beds`,
    { next: { tags: [unitModel] } }
  )

export async function getUnits() {
  const res = await fetchUnits()
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }

  const { data } = (await res.json()) as {
    data: IMorambaSelfCatering<"related_units">
  }

  const units = (data.attributes.units?.data || []) as IUnit<
    "unitCoverImage" | "unitImages" | "accommodation.bed"
  >[]
  return units
}

export async function getUnit(slug: string) {
  const res = await fetchUnits()
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }

  const { data } = (await res.json()) as {
    data: IMorambaSelfCatering<"related_units">
  }

  const unit = data.attributes.units?.data.find(
    (unit) => unit.attributes.slug === slug
  ) as IUnit<"unitCoverImage" | "unitImages" | "accommodation.bed">
  return unit
}
