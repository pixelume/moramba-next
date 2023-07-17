export interface IAccommodationFeature {
  id: number;
  __component: "accommodation.feature";
  featureName:
    | "Air Conditioning"
    | "Microwave"
    | "Toaster"
    | "Oven"
    | "Kitchen Utensils"
    | "Full Kitchen"
    | "Kitchenette"
    | "Gas Stove"
    | "TV"
    | "Wifi"
    | "DSTV"
    | "Netflix"
    | "Patio"
    | "Pool"
    | "Braai Facilities"
    | "Secure Parking"
    | "Covered Parking"
    | "Armed Response"
    | "Cleaning"
    | null;
  featureDescription: string | null;
}
