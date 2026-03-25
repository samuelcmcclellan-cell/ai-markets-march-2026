"use client";
const layers = [
  { name: "Applications & Agents", companies: "Salesforce, ServiceNow, Palantir", color: "bg-orange-500" },
  { name: "Models & AI Platforms", companies: "OpenAI, Anthropic, Google DeepMind, Meta AI, Mistral, xAI", color: "bg-orange-500" },
  { name: "Cloud / Data Centers", companies: "AWS, Azure, GCP, Oracle, CoreWeave", color: "bg-amber-500" },
  { name: "Systems & Networking", companies: "Dell, HPE, Arista, Cisco, Coherent", color: "bg-amber-500" },
  { name: "Packaging / OSAT", companies: "ASE, Amkor, TSMC (in-house CoWoS)", color: "bg-emerald-500" },
  { name: "Memory", companies: "SK Hynix, Samsung, Micron (~95% market)", color: "bg-emerald-500" },
  { name: "Chip Design", companies: "NVIDIA, AMD, Broadcom, Qualcomm, Marvell", color: "bg-teal-500" },
  { name: "Foundry / Fabrication", companies: "TSMC (~90% advanced), Samsung Foundry, Intel", color: "bg-teal-500" },
  { name: "Equipment", companies: "ASML (EUV monopoly), Applied Materials, Lam Research, Tokyo Electron", color: "bg-pink-500" },
  { name: "Raw Materials", companies: "Silicon, rare earths, helium, neon, photoresists", color: "bg-pink-500" },
];

export default function TheAIStack() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <h2 className="text-sm uppercase tracking-widest text-blue-400 font-mono mb-3">
          The AI Stack
        </h2>
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6">
          From raw silicon to autonomous agents
        </h3>
        <div className="space-y-1.5">
          {layers.map((layer, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-navy-700/40 rounded-lg px-4 py-2.5 border border-slate-700/30"
            >
              <div className={`w-1 h-8 rounded-full ${layer.color} flex-shrink-0`} />
              <span className="text-sm font-heading font-semibold text-white w-44 flex-shrink-0">
                {layer.name}
              </span>
              <span className="text-xs md:text-sm text-slate-400">
                {layer.companies}
              </span>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-slate-600 mt-3">
          Source: Industry analysis, company filings.
        </p>
      </div>
    </div>
  );
}
