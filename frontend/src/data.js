const data = {
  kpis: [
    { label: "ytd return", value: "+18.4%", note: "synthetic placeholder" },
    { label: "30d volatility", value: "12.1%", note: "stabilizing momentum" },
    { label: "best month", value: "+6.2%", note: "april outperform" },
    { label: "win rate", value: "57%", note: "risk-on bias" },
    { label: "max drawdown", value: "-4.8%", note: "contained downside" },
    { label: "sharpe (ytd)", value: "1.9", note: "risk-adjusted edge" }
  ],
  equitySeries: [
    { date: "2024-01-01", value: 100 },
    { date: "2024-02-01", value: 103 },
    { date: "2024-03-01", value: 105 },
    { date: "2024-04-01", value: 111 },
    { date: "2024-05-01", value: 108 },
    { date: "2024-06-01", value: 114 },
    { date: "2024-07-01", value: 118 },
    { date: "2024-08-01", value: 117 },
    { date: "2024-09-01", value: 122 }
  ],
  trades: [
    { date: "2024-09-01", title: "ai earnings basket", pnl: "+2.3%", note: "call spreads on semis" },
    { date: "2024-08-22", title: "rates fade", pnl: "+1.1%", note: "short duration pivot" },
    { date: "2024-08-10", title: "fx mean reversion", pnl: "-0.6%", note: "yen spike hedge" },
    { date: "2024-07-28", title: "infra push", pnl: "+1.7%", note: "energy + industrials" }
  ],
  gallery: [
    { id: 1, title: "midnight transmission", year: 2024, tags: ["city", "16:9"], cover: "urban glow" },
    { id: 2, title: "noir corridor", year: 2023, tags: ["portrait", "grain"], cover: "corridor haze" },
    { id: 3, title: "signal static", year: 2024, tags: ["abstract"], cover: "signal static" },
    { id: 4, title: "skyline pulse", year: 2022, tags: ["city", "night"], cover: "skyline pulse" },
    { id: 5, title: "velvet analog", year: 2023, tags: ["studio"], cover: "velvet analog" },
    { id: 6, title: "deep blue field", year: 2024, tags: ["landscape"], cover: "deep blue field" }
  ]
};

export default data;
