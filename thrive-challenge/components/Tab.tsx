import Link from "next/link";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";

export interface TabItem {
  label: string;
  href: string;
}

 type TabProps = {
  items: TabItem[];
}

const Bar = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.space.xs};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 0 ${({ theme }) => theme.space.lg};
  background: ${({ theme }) => theme.colors.surface};
`;

const TabLink = styled(Link)<{ $active: boolean }>`
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.md}`};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.textSubtle};
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: color ${({ theme }) => theme.durations.fast} ease,
    border-color ${({ theme }) => theme.durations.fast} ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }

  ${({ $active, theme }) =>
    $active &&
    css`
      color: ${theme.colors.text};
      border-bottom-color: ${theme.colors.primary};
    `}
`;

export function Tab({ items }: TabProps) {
  const { pathname } = useRouter();

  return (
    <Bar>
      {items.map((item) => (
        <TabLink
          key={item.href}
          href={item.href}
          scroll={false}
          $active={pathname === item.href}
        >
          {item.label}
        </TabLink>
      ))}
    </Bar>
  );
}
