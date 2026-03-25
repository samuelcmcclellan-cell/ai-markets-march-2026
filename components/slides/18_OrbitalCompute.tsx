"use client";
const concepts = [
  { name: "Starcloud (Lonestar)", detail: "First H100 in space (Nov 2025), first LLM trained in orbit (Dec 2025), 88K-satellite filing", color: "border-orange-500" },
  { name: "SpaceX / xAI", detail: "FCC application for up to 1M orbital DC satellites (Jan 2026) after $1.25T merger", color: "border-amber-500" },
  { name: "Google Suncatcher", detail: "Radiation-hardened TPUs, 1.6 Tbps optical links", color: "border-emerald-500" },
  { name: "Aetherflux", detail: "$50M Series A, orbital compute + power beaming", color: "border-teal-500" },
];

export default function OrbitalCompute() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <h2 className="text-sm uppercase tracking-widest text-purple-400 font-mono mb-3">
          The Frontier
        </h2>
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-1">
          Computing beyond Earth
        </h3>
        <p className="text-sm text-slate-400 mb-5">
          No permits. Unlimited solar. Compute above borders.
        </p>
        <div className="bg-navy-700/30 rounded-lg p-4 border border-slate-700/30 mb-5">
          <p className="text-xs text-slate-500 italic">
            IMAGE: Orbital data center or satellite constellation concept art
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {concepts.map((c) => (
            <div
              key={c.name}
              className={`stat-card border-t-2 ${c.color}`}
            >
              <p className="text-sm font-heading font-bold text-white mb-1">{c.name}</p>
              <p className="text-xs text-slate-400">{c.detail}</p>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-slate-600 mt-3">
          Sources: FCC filings, company announcements, TechCrunch.
        </p>
      </div>
    </div>
  );
}
