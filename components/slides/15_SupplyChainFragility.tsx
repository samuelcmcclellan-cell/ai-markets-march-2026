"use client";
const risks = [
  {
    title: "Geographic Concentration",
    color: "border-orange-500",
    headerColor: "bg-orange-500",
    points: [
      "Taiwan (TSMC): ~90% advanced chips",
      "South Korea: ~70% DRAM, ~62% HBM",
      "Netherlands (ASML): sole EUV supplier",
      "Single points of failure across the stack",
    ],
  },
  {
    title: "US Reshoring",
    color: "border-amber-500",
    headerColor: "bg-amber-500",
    points: [
      "CHIPS Act: $52.7B authorized",
      "~$33.7B committed so far",
      "TSMC Arizona: delayed, over budget",
      "Still years from meaningful capacity",
    ],
  },
  {
    title: "Energy / Hormuz Crisis",
    color: "border-red-500",
    headerColor: "bg-red-500",
    points: [
      "Strait of Hormuz escalation risk",
      "Oil price spike to $100+/bbl scenario",
      "Qatar helium supply disrupted",
      "S. Korea: 64.7% helium from Qatar",
    ],
  },
];

export default function SupplyChainFragility() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <h2 className="text-sm uppercase tracking-widest text-red-400 font-mono mb-3">
          Supply Chain Risk
        </h2>
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-1">
          Supply chain fragility
        </h3>
        <p className="text-sm text-slate-400 mb-5">
          Three critical risk vectors threatening the AI buildout.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {risks.map((risk) => (
            <div key={risk.title} className={`stat-card border-t-2 ${risk.color}`}>
              <p className="text-sm font-heading font-bold text-white mb-3">{risk.title}</p>
              <ul className="space-y-1.5">
                {risk.points.map((pt, j) => (
                  <li key={j} className="text-xs text-slate-400 flex items-start gap-2">
                    <span className="text-slate-600 mt-0.5">•</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="bg-slate-800 rounded-lg p-3 mt-4 border border-slate-700/50">
          <p className="text-xs text-slate-300">
            <span className="font-semibold text-white">Hormuz Scenarios: </span>
            <span className="text-emerald-400">2-week resolution (minimal)</span>
            {" | "}
            <span className="text-amber-400">2–8 weeks (spot +40–60%)</span>
            {" | "}
            <span className="text-red-400">Equipment damage at Ras Laffan (1+ year structural shortage)</span>
          </p>
        </div>
        <p className="text-[10px] text-slate-600 mt-2">
          Sources: SIA, CHIPS Act tracker, Reuters, USGS.
        </p>
      </div>
    </div>
  );
}
