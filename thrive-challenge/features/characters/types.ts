import type { Paginated } from "@/lib/api/types";

export type CharacterStatus = "Alive" | "Dead" | "unknown";
export type CharacterGender = "Female" | "Male" | "Genderless" | "unknown";

export interface CharacterRef {
  name: string;
  url: string;
}

export interface Character {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: CharacterGender;
  origin: CharacterRef;
  location: CharacterRef;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export type CharactersResponse = Paginated<Character>;
