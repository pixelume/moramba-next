import { IMedia } from "../builtins/Media";
import { IAccommodationBed } from "./accommodation/Bed";
import { ExtractNested } from "../builtins/ExtractNested";
import { ExtractFlat } from "../builtins/ExtractFlat";
import { RequiredBy } from "../builtins/RequiredBy";
export interface IUnit<Populate extends string | never = never> {
  id: number;
  attributes: RequiredBy<
    {
      unitName: string | null;
      unitDescription: string | null;
      unitSize: number | null;
      unitImages?: { data: IMedia[] };
      unitCoverImage?: { data: IMedia | null };
      slug: string | null;
      unitPrice: number | null;
      maxGuests: number | null;
      unitBedrooms: number | null;
      unitBathrooms: number | null;
      hasKitchen: boolean | null;
      beds?: IAccommodationBed[];
      baths: number | null;
      showers: number | null;
      unitDescriptionMarkdown: string | null;
      publishedAt: string;
      createdAt: string;
      updatedAt: string;
    },
    ExtractFlat<Populate>
  >;
}
