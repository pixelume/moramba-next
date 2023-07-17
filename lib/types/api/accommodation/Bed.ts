export interface IAccommodationBed {
  id: number;
  __component: "accommodation.bed";
  bedType: "bed" | "sleeper couch" | null;
  bedSize: "single" | "three quarter" | "double" | "queen" | "king" | null;
  qty: number | null;
}
