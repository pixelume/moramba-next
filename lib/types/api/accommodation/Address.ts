import { IAccommodationContactPerson } from "./ContactPerson";
import { ExtractNested } from "../../builtins/ExtractNested";
import { ExtractFlat } from "../../builtins/ExtractFlat";
import { RequiredBy } from "../../builtins/RequiredBy";
export type IAccommodationAddress<Populate extends string | never = never> =
  RequiredBy<
    {
      id: number;
      __component: "accommodation.address";
      address1: string | null;
      address2: string | null;
      townOrCity: string | null;
      postalCode: string | null;
      country: string | null;
      contactPersons?: IAccommodationContactPerson[];
    },
    ExtractFlat<Populate>
  >;
