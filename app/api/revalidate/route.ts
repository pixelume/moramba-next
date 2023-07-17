import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'
import { siteConfig } from '@/config/site'

export interface ReqBody {
    event: string
    createdAt: string
    model: string
    uid: string
    entry: Entry
  }
  
  export interface Entry {
    id: number
    establishmentName: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    Address: Address
    ContactPerson: ContactPerson[]
    units: Units
    MainNav: MainNav[]
  }
  
  export interface Address {
    id: number
    address1: string
    address2: string
    townOrCity: string
    country: string
    postalCode: string
  }
  
  export interface ContactPerson {
    id: number
    contactPersonName: string
    contactPersonPhone: string
  }
  
  export interface Units {
    count: number
  }
  
  export interface MainNav {
    id: number
    title: string
    href: string
    show: boolean
  }
  

const {establishmentModel, unitModel} = siteConfig

export async function POST(request: NextRequest) {
    const body = await request.json() as ReqBody
    if (![establishmentModel, unitModel].includes(body.model)) {
        return NextResponse.json({ revalidated: false, now: Date.now(), message: 'Content change not related to this establishment' })
    }
  // revalidateTag(body.model)
  if (body.model === establishmentModel) {
    revalidateTag(establishmentModel)
    revalidateTag(unitModel)
  } else {
    revalidateTag(unitModel)
  }
  return NextResponse.json({ revalidated: true, now: Date.now() })
}