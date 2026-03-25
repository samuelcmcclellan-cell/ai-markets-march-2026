"use client";
const rows = [
  {
    dim: "Valuations",
    dotcom: "Nasdaq P/E > 100x. Speculative, revenue-free IPOs.",
    ai: "Mag-7 P/E ~30x. Premium but earnings-backed.",
  },
  {
    dim: "Profitability",
    dotcom: "Most companies burned cash. Negative unit economics.",
    ai: "NVIDIA: 75% gross margin. Mag-7: 26% avg net margin (2x S&P).",
  },
  {
    dim: "Supply/Demand",
    dotcom: "Build-it-and-they-will-come. Overbuilt fiber, underused.",
    ai: "Demand > supply for GPUs, HBM. Wait lists, not gluts.",
  },
  {
    dim: "Balance Sheets",
    dotcom: "Leveraged, fragile. Dependent on equity markets.",
    ai: "Mag-7: $500B+ net cash. Self-funding capex from operations.",
  },
  {
    dim: "Revenue Growth",
    dotcom: "Hype-driven, collapse followed. Revenue often fictional.",
    ai: "NVIDIA: $130B+ revenue. Cloud AI revenue doubling annually.",
  },
];

export default function BubbleDebunk() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <h2 className="text-sm uppercase tracking-widest text-red-400 font-mono mb-3">
          The Risks
        </h2>
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-1">
          Is this a bubble?
        </h3>
        <p className="text-sm text-slate-400 mb-4">
          Comparing the Dotcom era (2000) to the AI buildout (2026).
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-2 px-3 text-slate-400 font-mono text-xs w-28">Dimension</th>
                <th className="text-left py-2 px-3 text-slate-400 font-mono text-xs">Dotcom 2000</th>
                <th className="text-left py-2 px-3 text-slate-400 font-mono text-xs">AI 2026</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className={`border-b border-slate-800 ${i % 2 === 0 ? "bg-navy-700/20" : ""}`}>
                  <td className="py-2.5 px-3 text-white font-heading font-semibold text-xs">{row.dim}</td>
                  <td className="py-2.5 px-3 text-slate-400 text-xs">{row.dotcom}</td>
                  <td className="py-2.5 px-3 text-slate-300 text-xs">{row.ai}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4">
          <p className="text-sm font-heading font-semibold text-white">
            Not a repeat of 2000 — but pockets of excess exist.
          </p>
        </div>
        <p className="text-[10px] text-slate-600 mt-3">
          Sources: Bloomberg, Refinitiv, company filings, Morningstar.
        </p>
      </div>
    </div>
  );
}
