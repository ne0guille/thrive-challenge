import Image from "next/image";
import styled from "styled-components";
import { Card } from "@/components/Card";
import type { Character, CharacterStatus } from "@/features/characters/types";

const ImageFrame = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  background: ${({ theme }) => theme.colors.surfaceMuted};
`;

const Name = styled.h3`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text};
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
`;

const Dot = styled.span<{ $status: CharacterStatus }>`
  width: ${({ theme }) => theme.space.sm};
  height: ${({ theme }) => theme.space.sm};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ $status, theme }) =>
    $status === "Alive"
      ? theme.colors.success
      : $status === "Dead"
        ? theme.colors.danger
        : theme.colors.neutral};
`;

type CharacterCardProps = {
  character: Pick<Character, "image" | "name" | "status" | "species">;
  priority?: boolean;
};

export function CharacterCard({
  character,
  priority = false,
}: CharacterCardProps) {
  const { image, name, status, species } = character;
  return (
    <Card
      media={
        <ImageFrame>
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, 220px"
            style={{ objectFit: "cover" }}
            priority={priority}
          />
        </ImageFrame>
      }
    >
      <Name>{name}</Name>
      <Meta>
        <Dot $status={status} />
        <span>
          {status} — {species}
        </span>
      </Meta>
    </Card>
  );
}
