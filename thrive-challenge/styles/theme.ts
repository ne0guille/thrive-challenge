export const theme = {
  colors: {
    background: "#f8fafc",
    surface: "#ffffff",
    border: "#e5e7eb",
    text: "#0f172a",
    textMuted: "#475569",
    textSubtle: "#64748b",
    surfaceMuted: "#f1f5f9",
    primary: "#0f172a",
    success: "#22c55e",
    danger: "#ef4444",
    neutral: "#94a3b8",
  },
  space: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },
  radii: {
    sm: "6px",
    md: "12px",
    pill: "999px",
  },
  fontSizes: {
    xs: "12px",
    sm: "13px",
    md: "14px",
    lg: "16px",
    xl: "18px",
    xxl: "20px",
  },
  fontWeights: {
    regular: 400,
    semibold: 600,
    bold: 700,
  },
  shadows: {
    sm: "0 1px 2px rgba(15, 23, 42, 0.04)",
    md: "0 8px 24px rgba(15, 23, 42, 0.08)",
  },
  fonts: {
    body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`,
  },
  durations: {
    fast: "120ms",
    base: "200ms",
  },
  layout: {
    maxContentWidth: "1200px",
    cardMinWidth: "220px",
  },
  breakpoints: {
    sm: "640px",
    md: "960px",
    lg: "1200px",
  },
} as const;

export type AppTheme = typeof theme;
