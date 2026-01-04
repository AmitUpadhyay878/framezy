export const THEMES ={
    ARORA_INK:{
        background:"#0b1020",
        foreground:"#f4f6ff",

        card:"#121a33",
        cardForeground:"#f4f6ff",

         popover:"#121a33",
        popoverForeground:"#f4f6ff",

        primary:"#7c5cff",
        primaryRgb:"124, 92, 255",
        primaryForeground:"#0b1020",

        secondary:"#1a2547",
        secondaryForeground:"#e8ebff",

        mutted:"#141d4a",
        muttedForeground:"#a9b2d6",

        accent:"#2fe6c7",
        accentForeground:"#0b1020",

        desctuctive:"#ff4d6d",

        border:"#282c56",
        input:"#28c256",
        ring:"#7c5cff",

        chart:[
            "#7c5cff",
            "#2fe6c7",
            "#ffb86c",
            "#ff4d6d",
            "#ffa1e0",
            "#40cfff"
        ]
    },
    SOLARIZED_DARK:{
        background:"#002b36",
        foreground:"#839496",   
        card:"#073642",
        cardForeground:"#839496",
            popover:"#073642",
        popoverForeground:"#839496",
        primary:"#268bd2",
        primaryRgb:"38, 139, 210",
        primaryForeground:"#fdf6e3",
        secondary:"#586e75",
        secondaryForeground:"#fdf6e3",
        mutted:"#657b83",
        muttedForeground:"#93a1a1",
        accent:"#2aa198",
        accentForeground:"#fdf6e3",
        desctuctive:"#dc322f",
        border:"#586e75",
        input:"#586e75",
        ring:"#268bd2",
        chart:[
            "#268bd2",
            "#2aa198",
            "#b58900",
            "#dc322f",
            "#d33682",
            "#6c71c4"
        ]
    },
  NETFLIX_PRO: {
  background: "#141414", 
  foreground: "#ffffff",

  card: "#1f1f1f",
  cardForeground: "#ffffff",

  popover: "#1f1f1f",
  popoverForeground: "#ffffff",

  primary: "#e50914",          
  primaryRgb: "229, 9, 20",
  primaryForeground: "#ffffff",

  secondary: "#b3b3b3",
  secondaryForeground: "#141414",

  mutted: "#6d6d6d",
  muttedForeground: "#b3b3b3",

  accent: "#e50914",
  accentForeground: "#ffffff",

  desctuctive: "#ff3b30",

  border: "#2a2a2a",
  input: "#2a2a2a",
  ring: "#e50914",

  chart: [
    "#e50914",
    "#ffffff",
    "#b3b3b3",
    "#6d6d6d",
    "#ff3b30",
    "#3d3d3d" 
  ]
},
POLAR_MINT: {
  background: "#f5fbfa",          // Icy white
  foreground: "#0f172a",          // Deep slate

  card: "#ffffff",
  cardForeground: "#0f172a",

  popover: "#ffffff",
  popoverForeground: "#0f172a",

  primary: "#2dd4bf",             // Mint / Teal
  primaryRgb: "45, 212, 191",
  primaryForeground: "#042f2e",

  secondary: "#99f6e4",
  secondaryForeground: "#042f2e",

  mutted: "#94a3b8",
  muttedForeground: "#475569",

  accent: "#5eead4",
  accentForeground: "#042f2e",

  desctuctive: "#ef4444",

  border: "#e2e8f0",
  input: "#e2e8f0",
  ring: "#2dd4bf",

  chart: [
    "#2dd4bf",  // Mint
    "#5eead4",  // Light mint
    "#0ea5a4",  // Teal
    "#38bdf8",  // Ice blue
    "#22c55e",  // Fresh green
    "#94a3b8"   // Neutral gray
  ]
},
CITRUS_SLATE: {
  background: "#0f172a",          // Deep slate background
  foreground: "#f8fafc",

  card: "#111827",
  cardForeground: "#f8fafc",

  popover: "#111827",
  popoverForeground: "#f8fafc",

  primary: "#facc15",             // Citrus yellow
  primaryRgb: "250, 204, 21",
  primaryForeground: "#1c1917",

  secondary: "#38bdf8",           // Cool slate blue
  secondaryForeground: "#020617",

  mutted: "#64748b",
  muttedForeground: "#cbd5f5",

  accent: "#fde047",              // Soft citrus highlight
  accentForeground: "#1c1917",

  desctuctive: "#ef4444",

  border: "#1e293b",
  input: "#1e293b",
  ring: "#facc15",

  chart: [
    "#facc15",  // Citrus yellow
    "#38bdf8",  // Slate blue
    "#22c55e",  // Lime green
    "#fb7185",  // Rose
    "#a78bfa",  // Violet
    "#94a3b8"   // Neutral slate
  ]
}


} as const;

export const THEME_NAME_LIST=[
    "ARORA_INK",
    "SOLARIZED_DARK",
    "NETFLIX_PRO",
    "POLAR_MINT",
    "CITRUS_SLATE"
] as const;

export type ThemeKey= keyof typeof THEMES;
export type Theme = (typeof THEMES)[ThemeKey];