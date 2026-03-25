"use client";
const sections = [
  { num: "01", label: "The Landscape", desc: "Why AI matters, the stack, the supply chain, power", color: "bg-blue-500" },
  { num: "02", label: "The Market", desc: "Capex, semiconductors, memory, AI labs", color: "bg-amber-500" },
  { num: "03", label: "The Shifts", desc: "Agentic AI, hardware vs. software divergence", color: "bg-emerald-500" },
  { num: "04", label: "The Risks", desc: "Bubble question, supply chain, policy, politics", color: "bg-red-500" },
  { num: "05", label: "The Frontier", desc: "Space compute, humanoids, autonomous vehicles, healthcare", color: "bg-purple-500" },
];

export default function Agenda() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <h2 className="text-sm uppercase tracking-widest text-blue-400 font-mono mb-3">
          Overview
        </h2>
        <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8">
          Agenda
        </h3>
        <div className="space-y-4">
          {sections.map((s) => (
            <div key={s.num} className="flex items-start gap-4">
              <div className={`w-1 h-12 rounded-full ${s.color} flex-shrink-0 mt-1`} />
              <div>
                <span className="text-xs font-mono text-slate-500 mr-3">{s.num}</span>
                <span className="text-lg md:text-xl font-heading font-semibold text-white">
                  {s.label}
                </span>
                <p className="text-sm text-slate-400 mt-1">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
