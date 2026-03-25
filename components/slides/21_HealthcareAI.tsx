"use client";
const areas = [
  {
    title: "Drug Discovery",
    detail: "AI models can screen billions of molecular combinations in hours vs. years. Insilico Medicine, Recursion, and Isomorphic Labs leading the charge.",
    color: "border-orange-500",
  },
  {
    title: "Medical Imaging",
    detail: "AI reads radiology scans with superhuman accuracy for specific conditions. FDA has approved 1,000+ AI medical devices.",
    color: "border-amber-500",
  },
  {
    title: "Precision Medicine",
    detail: "Genomic analysis + AI = personalized treatment plans. From one-size-fits-all to treatments tailored to your DNA.",
    color: "border-emerald-500",
  },
];

export default function HealthcareAI() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <h2 className="text-sm uppercase tracking-widest text-purple-400 font-mono mb-3">
          The Frontier
        </h2>
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-5">
          AI in healthcare
        </h3>
        <div className="bg-navy-700/30 rounded-lg p-4 border border-slate-700/30 mb-5">
          <p className="text-xs text-slate-500 italic">
            IMAGE: AI-assisted medical imaging or drug discovery visualization
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {areas.map((area) => (
            <div key={area.title} className={`stat-card border-t-2 ${area.color}`}>
              <p className="text-sm font-heading font-bold text-white mb-2">{area.title}</p>
              <p className="text-xs text-slate-400">{area.detail}</p>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-slate-600 mt-4">
          Sources: FDA, Nature, company disclosures.
        </p>
      </div>
    </div>
  );
}
