"use client";
const categories = [
  { title: "Local Opposition & Moratoriums", detail: "Virginia, Wisconsin, South Carolina moratoriums on new data centers" },
  { title: "Permitting & Regulatory Delays", detail: "NEPA adds 2–4 years. Grid queue: 2,600 GW" },
  { title: "Export Controls & Trade Policy", detail: "GPU bans, ASML restrictions, rare earth retaliation" },
  { title: "Sovereignty & Compliance", detail: "EU AI Act costs, data localization, CHIPS Act subsidies" },
];

const phases = [
  { label: "Site Selection", time: "3–6 mo", color: "bg-emerald-500", width: "w-[15%]" },
  { label: "Environmental Review", time: "12–48 mo", color: "bg-amber-500", width: "w-[35%]" },
  { label: "Grid Interconnection", time: "36–60 mo", color: "bg-orange-500", width: "w-[30%]" },
  { label: "Construction", time: "18–36 mo", color: "bg-teal-500", width: "w-[20%]" },
];

export default function PoliticalHeadwinds() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <h2 className="text-sm uppercase tracking-widest text-red-400 font-mono mb-3">
          Political Headwinds
        </h2>
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
          The political headwinds
        </h3>
        <div className="flex gap-4 mb-5">
          <div className="stat-card flex-1 text-center accent-border-red">
            <p className="text-3xl font-heading font-bold text-red-400">$98B</p>
            <p className="text-[10px] text-slate-500 mt-1">DC projects stalled by local opposition</p>
          </div>
          <div className="stat-card flex-1 text-center accent-border-red">
            <p className="text-3xl font-heading font-bold text-red-400">439K</p>
            <p className="text-[10px] text-slate-500 mt-1">Worker shortage in construction</p>
          </div>
        </div>
        <div className="space-y-2 mb-5">
          {categories.map((cat) => (
            <div key={cat.title} className="flex items-start gap-3 bg-navy-700/40 rounded-lg px-4 py-2.5 border-l-2 border-red-500 border border-slate-700/30">
              <div>
                <p className="text-sm font-heading font-semibold text-white">{cat.title}</p>
                <p className="text-xs text-slate-400 mt-0.5">{cat.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs font-heading font-semibold text-white mb-2">Permit Timeline</p>
        <div className="flex rounded-lg overflow-hidden">
          {phases.map((phase) => (
            <div key={phase.label} className={`${phase.color} ${phase.width} py-2 px-2 text-center`}>
              <p className="text-[10px] font-bold text-white leading-tight">{phase.label}</p>
              <p className="text-[9px] text-white/80">{phase.time}</p>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-slate-600 mt-3">
          Sources: McKinsey, DOE, PJM, state government records.
        </p>
      </div>
    </div>
  );
}
