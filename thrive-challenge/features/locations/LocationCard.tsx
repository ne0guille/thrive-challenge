import styled from "styled-components";
import { Card } from "@/components/Card";
import type { Location } from "@/features/locations/types";

const Name = styled.h3`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text};
`;

const Type = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.textMuted};
  background: ${({ theme }) => theme.colors.surfaceMuted};
  border-radius: ${({ theme }) => theme.radii.pill};
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.sm}`};
  align-self: flex-start;
`;

type LocationCardProps = {
  location: Pick<Location, "name" | "type">;
};

export function LocationCard({ location }: LocationCardProps) {
  return (
    <Card>
      <Name>{location.name}</Name>
      <Type>{location.type || "Unknown"}</Type>
    </Card>
  );
}
