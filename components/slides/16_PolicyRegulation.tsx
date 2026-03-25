"use client";
const pillars = [
  {
    title: "Export Controls",
    stat: "$5.5B",
    statLabel: "NVIDIA H20 write-down",
    detail: "H100/H200/Blackwell banned from China. ASML advanced DUV tools banned. Diffusion rule limits exports to 140+ countries.",
    color: "border-orange-500",
    statColor: "text-orange-400",
  },
  {
    title: "AI Regulation",
    stat: "Aug 2026",
    statLabel: "EU AI Act high-risk enforcement",
    detail: "Fines up to €35M or 7% global revenue. Only 36% of enterprises feel prepared.",
    color: "border-amber-500",
    statColor: "text-amber-400",
  },
  {
    title: "Trade & Reshoring",
    stat: "~90%",
    statLabel: "China's rare earth processing share",
    detail: "China controls ~90% of rare earth processing. SMIC 5nm yield ~20% vs. >70% threshold.",
    color: "border-red-500",
    statColor: "text-red-400",
  },
];

export default function PolicyRegulation() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <h2 className="text-sm uppercase tracking-widest text-red-400 font-mono mb-3">
          Policy & Regulation
        </h2>
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6">
          Policy is reshaping the map
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pillars.map((p) => (
            <div key={p.title} className={`bg-navy-700/50 rounded-xl p-5 border-t-2 ${p.color} border border-slate-700/30`}>
              <p className="text-sm font-heading font-semibold text-white mb-3">{p.title}</p>
              <p className={`text-3xl font-heading font-bold ${p.statColor} mb-1`}>{p.stat}</p>
              <p className="text-[10px] text-slate-500 mb-3">{p.statLabel}</p>
              <p className="text-xs text-slate-400">{p.detail}</p>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <p className="text-sm font-heading font-semibold text-white">
            Policy has cleaved the AI supply chain into US-aligned and China-aligned blocs.
          </p>
        </div>
        <p className="text-[10px] text-slate-600 mt-3">
          Sources: BIS, EU AI Act text, NVIDIA filings, CSIS.
        </p>
      </div>
    </div>
  );
}
