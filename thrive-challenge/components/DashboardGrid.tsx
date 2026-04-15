import styled from "styled-components";

export const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(${({ theme }) => theme.layout.cardMinWidth}, 1fr)
  );
  gap: ${({ theme }) => theme.space.lg};
`;

export const DashboardState = styled.p`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: ${({ theme }) => theme.fontSizes.md};
`;
