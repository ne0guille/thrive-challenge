import { useQuery } from "@tanstack/react-query";
import { rickAndMortyClient } from "@/lib/api/client";
import type { CharactersResponse } from "@/features/characters/types";

export function useCharacters() {
  return useQuery({
    queryKey: ["characters"],
    queryFn: async () => {
      const { data } =
        await rickAndMortyClient.get<CharactersResponse>("/character");
      return data;
    },
    staleTime: Infinity,
  });
}
