import type { ReactNode } from "react";
import styled from "styled-components";
import { Tab } from "@/components/Tab";
import { DASHBOARD_TABS } from "@/components/constants";

const Shell = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
`;

const Header = styled.header`
  padding: ${({ theme }) => theme.space.lg};
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  h1 {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }

  p {
    margin: ${({ theme }) => theme.space.xs} 0 0;
    color: ${({ theme }) => theme.colors.textSubtle};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

const Main = styled.main`
  padding: ${({ theme }) => theme.space.lg};
  max-width: ${({ theme }) => theme.layout.maxContentWidth};
  margin: 0 auto;
`;

 type DashboardLayoutProps = {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <Shell>
      <Header>
        <h1>Rick & Morty Dashboard</h1>
        <p>Browse characters and locations across dimensions.</p>
      </Header>
      <Tab items={DASHBOARD_TABS} />
      <Main>{children}</Main>
    </Shell>
  );
}
