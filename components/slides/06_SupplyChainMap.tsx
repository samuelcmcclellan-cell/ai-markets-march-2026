"use client";
const regions = [
  { name: "United States", role: "Design & Software", detail: "~50% global chip design revenue", risk: "Limited advanced manufacturing", color: "border-orange-500" },
  { name: "Taiwan", role: "The Factory Floor", detail: "TSMC: ~90% most advanced chips", risk: "SINGLE POINT OF FAILURE", color: "border-red-500" },
  { name: "South Korea", role: "Memory Capital", detail: "Samsung + SK Hynix: ~70% DRAM, ~62% HBM", risk: "Helium dependence on Qatar", color: "border-amber-500" },
  { name: "Netherlands", role: "The Gatekeeper", detail: "ASML: sole EUV manufacturer ($380M/machine)", risk: "Single-company dependency", color: "border-teal-500" },
  { name: "Japan", role: "Hidden Backbone", detail: "~50% of key semiconductor materials", risk: "Aging demographics", color: "border-pink-500" },
  { name: "China", role: "The Wildcard", detail: "Largest wafer capacity, mature nodes", risk: "Cut off from EUV", color: "border-slate-500" },
  { name: "Middle East (Qatar)", role: "Critical Gas Supplier", detail: "~1/3 of global helium supply", risk: "Hormuz/Iran risk", color: "border-red-500" },
];

export default function SupplyChainMap() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <h2 className="text-sm uppercase tracking-widest text-blue-400 font-mono mb-3">
          Global Supply Chain
        </h2>
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
          Where chips come from
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-5">
          {regions.map((r) => (
            <div
              key={r.name}
              className={`bg-navy-700/50 rounded-lg p-3 border-l-2 ${r.color} border border-slate-700/30`}
            >
              <p className="text-sm font-heading font-bold text-white">{r.name}</p>
              <p className="text-xs text-amber-400 font-mono mt-1">{r.role}</p>
              <p className="text-xs text-slate-400 mt-1.5">{r.detail}</p>
              <p className="text-[10px] text-red-400 mt-1.5">Risk: {r.risk}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-navy-700/30 rounded-lg p-3 border border-slate-700/30">
          <p className="text-xs text-slate-500 italic">
            IMAGE: Stylized world map with labeled chip supply chain regions and trade flow arrows
          </p>
        </div>
        <p className="text-[10px] text-slate-600 mt-2">
          Sources: SIA, SEMI, company disclosures, USGS.
        </p>
      </div>
    </div>
  );
}
