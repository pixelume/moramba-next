import { IAccommodationAddress } from "./accommodation/Address";
import { IAccommodationMainNavLinks } from "./accommodation/MainNavLinks";
import { IUnit } from "./Unit";
import { IAccommodationContentBlock1 } from "./accommodation/ContentBlock1";
import { ExtractNested } from "../builtins/ExtractNested";
import { ExtractFlat } from "../builtins/ExtractFlat";
import { RequiredBy } from "../builtins/RequiredBy";
export interface IMorambaSelfCatering<Populate extends string | never = never> {
  id: number;
  attributes: RequiredBy<
    {
      establishmentName: string | null;
      EstablishmentAddress?: IAccommodationAddress<
        ExtractNested<Populate, "EstablishmentAddress">
      > | null;
      MainNavLinks?: IAccommodationMainNavLinks[];
      units?: { data: IUnit<ExtractNested<Populate, "units">>[] };
      homePageBlock?: IAccommodationContentBlock1<
        ExtractNested<Populate, "homePageBlock">
      > | null;
      publishedAt: string;
      createdAt: string;
      updatedAt: string;
    },
    ExtractFlat<Populate>
  >;
}
