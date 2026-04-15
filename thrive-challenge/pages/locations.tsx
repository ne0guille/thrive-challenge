import type { ReactElement } from "react";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { DashboardGrid, DashboardState } from "@/components/DashboardGrid";
import { LocationCard } from "@/features/locations/LocationCard";
import { useLocations } from "@/features/locations/useLocations";

export default function LocationsPage() {
  const { data, isLoading, isError } = useLocations();

  if (isLoading) return <DashboardState>Loading…</DashboardState>;
  if (isError) return <DashboardState>Failed to load locations.</DashboardState>;
  if (!data) return null;

  return (
    <DashboardGrid>
      {data.results.map((location) => (
        <LocationCard key={location.id} location={location} />
      ))}
    </DashboardGrid>
  );
}

LocationsPage.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);
