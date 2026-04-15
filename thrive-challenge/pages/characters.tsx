import type { ReactElement } from "react";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { DashboardGrid, DashboardState } from "@/components/DashboardGrid";
import { CharacterCard } from "@/features/characters/CharacterCard";
import { useCharacters } from "@/features/characters/useCharacters";

export default function CharactersPage() {
  const { data, isLoading, isError } = useCharacters();

  if (isLoading) return <DashboardState>Loading…</DashboardState>;
  if (isError) return <DashboardState>Failed to load characters.</DashboardState>;
  if (!data) return null;

  return (
    <DashboardGrid>
      {data.results.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </DashboardGrid>
  );
}

CharactersPage.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);
