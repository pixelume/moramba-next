import { IAccommodationMainNavLinks } from "./MainNavLinks";
import { ExtractNested } from "../../builtins/ExtractNested";
import { ExtractFlat } from "../../builtins/ExtractFlat";
import { RequiredBy } from "../../builtins/RequiredBy";
export type IAccommodationContentBlock1<
  Populate extends string | never = never
> = RequiredBy<
  {
    id: number;
    __component: "accommodation.content-block1";
    heading: string | null;
    subHeading: string | null;
    buttonLinks?: IAccommodationMainNavLinks[];
  },
  ExtractFlat<Populate>
>;
