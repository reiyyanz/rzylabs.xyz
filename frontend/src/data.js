const data = {
  kpis: [
    { label: "ytd return", value: "+54%", note: "qqq / voo core tech growth + quantum bets" },
    { label: "30d volatility", value: "10.5%", note: "tech weight moderated by cash sidelined" },
    { label: "best month", value: "+11.8%", note: "tech-led spike + smart april tariffs play" },
    { label: "win rate", value: "66%", note: "selective purchases, heavily researched for high PVGO" },
    { label: "max drawdown", value: "-5.9%", note: "buffered by cash + staggered adds" },
    { label: "sharpe (ytd)", value: "2.5", note: "agressive returns with moderated vol" }
  ],
  equitySeries: [
    { date: "2024-01-01", value: 100 },
    { date: "2024-02-01", value: 104 },
    { date: "2024-03-01", value: 102 },
    { date: "2024-04-01", value: 110 },
    { date: "2024-05-01", value: 130 },
    { date: "2024-06-01", value: 135 },
    { date: "2024-07-01", value: 140 },
    { date: "2024-08-01", value: 136 },
    { date: "2024-09-01", value: 150 },
    { date: "2024-10-01", value: 154 }
  ],
  trades: [
    { ticker: "CASH", name: "liquid/money market", weight: "22.85%", cost: "$1.00", returnPct: "+0.4%", note: "buying power" },
    { ticker: "055630107", name: "[REDACTED] + sold!", weight: "0.00%", cost: "$0.18", returnPct: "+66.7%", note: "energy royalty trust hedge" },
    { ticker: "AG", name: "first majestic silver", weight: "1.53%", cost: "$10.15", returnPct: "+8.2%", note: "silver / metals tilt" },
    { ticker: "BRKB", name: "berkshire hathaway b", weight: "8.05%", cost: "$495.23", returnPct: "+6.6%", note: "hedge etf" },
    { ticker: "BTQ", name: "btq technologies", weight: "14.67%", cost: "$2.78", returnPct: "+2018.4%", note: "compute edge; long bet" },
    { ticker: "COCO", name: "vita coco", weight: "0.61%", cost: "$53.41", returnPct: "+3.1%", note: "bev defensive" },
    { ticker: "GOOGL", name: "alphabet class A", weight: "3.52%", cost: "$196.63", returnPct: "+9.4%", note: "ai/platform core" },
    { ticker: "LAC", name: "lithium americas", weight: "2.73%", cost: "$3.19", returnPct: "+12.7%", note: "lithium optionality" },
    { ticker: "MRVL", name: "marvell technology", weight: "0.96%", cost: "$89.07", returnPct: "+4.2%", note: "fiber optics / datacenter" },
    { ticker: "QQQ", name: "nasdaq 100 etf", weight: "18.70%", cost: "$492.59", returnPct: "+25.2%", note: "its qqq baby" },
    { ticker: "SRFM", name: "surf air mobility", weight: "2.09%", cost: "$2.61", returnPct: "+5.5%", note: "experimental trade will pay off soon" },
    { ticker: "TMC", name: "the metals company", weight: "1.81%", cost: "$6.00", returnPct: "+11.3%", note: "deepsea metals bet" },
    { ticker: "VOO", name: "vanguard s&p 500", weight: "18.71%", cost: "$500.77", returnPct: "+25.8%", note: "its vanguard baby" },
    { ticker: "VST", name: "vistra corp", weight: "3.77%", cost: "$198.74", returnPct: "+6.1%", note: "power/utility tilt" }
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
