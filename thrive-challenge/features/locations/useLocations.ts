import { useQuery } from "@tanstack/react-query";
import { rickAndMortyClient } from "@/lib/api/client";
import type { LocationsResponse } from "@/features/locations/types";

export function useLocations() {
  return useQuery({
    queryKey: ["locations"],
    queryFn: async () => {
      const { data } = await rickAndMortyClient.get<LocationsResponse>("/location");
      return data;
    },
    staleTime: Infinity,
  });
}
