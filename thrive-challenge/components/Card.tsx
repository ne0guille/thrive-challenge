import type { ReactNode } from "react";
import styled from "styled-components";

const Wrapper = styled.article`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform ${({ theme }) => theme.durations.fast} ease,
    box-shadow ${({ theme }) => theme.durations.fast} ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

const Body = styled.div`
  padding: ${({ theme }) => theme.space.md};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xs};
`;

export interface CardProps {
  media?: ReactNode;
  children: ReactNode;
}

export function Card({ media, children }: CardProps) {
  return (
    <Wrapper>
      {media}
      <Body>{children}</Body>
    </Wrapper>
  );
}
