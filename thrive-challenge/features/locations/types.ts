import type { Paginated } from "@/lib/api/types";

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export type LocationsResponse = Paginated<Location>;
