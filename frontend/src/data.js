const data = {
  kpis: [
    { label: "1yr return (April '25)", value: "+64%", note: "btq bets + qqq/voo core growth" },
    { label: "30d volatility", value: "12.8%", note: "tech weight + speculative positions" },
    { label: "best month", value: "+8.9%", note: "broad tech rally + metals/gold spike" },
    { label: "win rate", value: "66%", note: "10 winners / 15 positions" },
    { label: "max drawdown", value: "-8.2%", note: "srfm + pl drag, buffered by cash" },
    { label: "sharpe (ytd)", value: "2.8", note: "high returns with moderate vol" }
  ],
  equitySeries: [
    { date: "2024-01-01", value: 100 },
    { date: "2024-02-01", value: 102 },
    { date: "2024-03-01", value: 105 },
    { date: "2024-04-01", value: 108 },
    { date: "2024-05-01", value: 112 },
    { date: "2024-06-01", value: 110 },
    { date: "2024-07-01", value: 115 },
    { date: "2024-08-01", value: 113 },
    { date: "2024-09-01", value: 118 },
    { date: "2024-10-01", value: 122 },
    { date: "2024-11-01", value: 126 },
    { date: "2024-12-01", value: 130 },
    { date: "2025-01-01", value: 134 },
    { date: "2025-02-01", value: 140 },
    { date: "2025-03-01", value: 136 },
    { date: "2025-04-01", value: 148 },
    { date: "2025-05-01", value: 152 },
    { date: "2025-06-01", value: 155 },
    { date: "2025-07-01", value: 150 },
    { date: "2025-08-01", value: 158 },
    { date: "2025-09-01", value: 154 },
    { date: "2025-10-01", value: 160 },
    { date: "2025-11-01", value: 157 },
    { date: "2025-12-01", value: 162 },
    { date: "2026-01-01", value: 160 },
    { date: "2026-02-01", value: 164 }
  ],
  trades: [
    { ticker: "CASH", name: "liquid/money market", weight: "11.18%", cost: "$1.00", returnPct: "0.0%", note: "buying power" },
    { ticker: "055630107", name: "[REDACTED]", weight: "0.00%", cost: "$0.18", returnPct: "+66.7%", note: "energy royalty trust hedge + SOLD" },
    { ticker: "AG", name: "first majestic silver", weight: "1.53%", cost: "$10.15", returnPct: "+8.2%", note: "silver / metals tilt" },
    { ticker: "AVR", name: "[REDACTED]", weight: "[REDACTED]", cost: "[REDACTED]", returnPct: "[REDACTED]", note: "[REDACTED]" },
    { ticker: "BRKB", name: "berkshire hathaway b", weight: "8.05%", cost: "$495.23", returnPct: "+1.6%", note: "hedge etf" },
    { ticker: "BTQ", name: "btq technologies", weight: "14.67%", cost: "$2.78", returnPct: "+2018.4%", note: "compute edge; long bet + SOLD testing for reentry" },
    { ticker: "CCCX", name: "[REDACTED]", weight: "[REDACTED]", cost: "[REDACTED]", returnPct: "[REDACTED]", note: "infleqtion SPAC" },
    { ticker: "GDX", name: "vaneck gold miners etf", weight: "5.89%", cost: "$102.18", returnPct: "+1.54%", note: "gold/metals hedge" },
    { ticker: "GOOGL", name: "alphabet class A", weight: "0.1%", cost: "$196.63", returnPct: "+79.4%", note: "ai/platform core + SOLD waiting for reentry!" },
    { ticker: "IREN", name: "[REDACTED]", weight: "[REDACTED]", cost: "[REDACTED]", returnPct: "[REDACTED]", note: "[REDACTED]" },
    { ticker: "LAC", name: "lithium americas", weight: "2.73%", cost: "$3.19", returnPct: "+52.7%", note: "lithium optionality" },
    { ticker: "MRVL", name: "marvell technology", weight: "0.96%", cost: "$89.07", returnPct: "-5.2%", note: "fiber optics / datacenter" },
    { ticker: "OKLO", name: "oklo inc.", weight: "1.49%", cost: "$84.07", returnPct: "-4.2%", note: "nuclear energy" },
    { ticker: "PHO", name: "[REDACTED]", weight: "[REDACTED]", cost: "[REDACTED]", returnPct: "[REDACTED]", note: "water hedge/bet" },
    { ticker: "PL", name: "planet labs", weight: "1.27%", cost: "$5.14", returnPct: "-19.1%", note: "satellite/geospatial data" },
    { ticker: "QQQ", name: "nasdaq 100 etf", weight: "18.09%", cost: "$492.59", returnPct: "+25.2%", note: "its qqq baby" },
    { ticker: "SRFM", name: "surf air mobility", weight: "5.64%", cost: "$2.61", returnPct: "-13.5%", note: "experimental trade will pay off soon" },
    { ticker: "TMC", name: "the metals company", weight: "1.81%", cost: "$6.00", returnPct: "+1.43%", note: "deepsea metals bet" },
    { ticker: "UFO", name: "[REDACTED]", weight: "[REDACTED]", cost: "[REDACTED]", returnPct: "[REDACTED]", note: "procure space." },
    { ticker: "VOO", name: "vanguard s&p 500", weight: "18.71%", cost: "$500.77", returnPct: "+25.8%", note: "its vanguard baby" },
    { ticker: "VST", name: "vistra corp", weight: "3.93%", cost: "$198.74", returnPct: "-9.4%", note: "power/utility tilt" },
    { ticker: "VXUS", name: "vanguard total intl", weight: "5.60%", cost: "$78.53", returnPct: "+4.92%", note: "international diversification" }
  ],
  gallery: [
    { id: 1, title: "midnight transmission", year: 2024, tags: ["city", "16:9"], cover: "urban glow" },
    { id: 2, title: "noir corridor", year: 2023, tags: ["portrait", "grain"], cover: "corridor haze" },
    { id: 3, title: "signal static", year: 2024, tags: ["abstract"], cover: "signal static" },
    { id: 4, title: "skyline pulse", year: 2022, tags: ["city", "night"], cover: "skyline pulse" },
    { id: 5, title: "velvet analog", year: 2023, tags: ["studio"], cover: "velvet analog" },
    { id: 6, title: "deep blue field", year: 2024, tags: ["landscape"], cover: "deep blue field" }
  ],
  builds: [
    {
      title: "currently building: Resonance Engine",
      description: "Seek your Alpha. | Financial Computing and Market Intelligence Platform.",
      cta: "explore RE",
      href: "/noir",
      mediaType: "image",
      mediaSrc: "resonance_logo_exponential_particles.svg"
    },
    {
      title: "latest completed build:",
      description: "latest coding project: Scott's Stocks — a full stack paper trading platform with custom charts, auth, and a fast UI.",
      cta: "view build",
      href: "/portfolio",
      mediaType: "video",
      mediaSrc: "/scotts-stocks-demo.mp4"
    },
    {
      title: "alternative logo",
      description: "rzylabs alternative logo.",
      cta: "view archive",
      href: "/rzylabs-plus",
      mediaType: "image",
      mediaSrc: "/photo-drop.jpg"
    },
    {
      title: "analytics suite",
      description: "synthetic trading analytics with equity curves, trade logs, and metrics.",
      cta: "see analytics",
      href: "/portfolio",
      mediaType: "chart"
    }
  ]
};

export default data;
