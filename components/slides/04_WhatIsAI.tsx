"use client";
const eras = [
  { period: "1950s–80s", name: "Symbolic AI", desc: "Hand-coded rules and expert systems", active: false },
  { period: "1990s–2010s", name: "Machine Learning", desc: "Statistical pattern recognition at scale", active: false },
  { period: "2012–2020", name: "Deep Learning", desc: "Neural networks trained on massive datasets", active: false },
  { period: "2020–2024", name: "Generative AI", desc: "Creates text, images, code, video", active: false },
  { period: "2025+", name: "Agentic AI", desc: "Autonomous multi-step reasoning and action", active: true },
];

export default function WhatIsAI() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <h2 className="text-sm uppercase tracking-widest text-blue-400 font-mono mb-3">
          What Is AI?
        </h2>
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
          Five paradigms — each building on the last
        </h3>
        <div className="relative mt-8">
          <div className="absolute top-6 left-0 right-0 h-0.5 bg-gradient-to-r from-slate-700 via-amber-500 to-amber-500" />
          <div className="grid grid-cols-5 gap-2 md:gap-3 relative">
            {eras.map((era, i) => (
              <div key={i} className="flex flex-col items-center">
                <div
                  className={`w-3 h-3 rounded-full mb-4 relative z-10 ${
                    era.active ? "bg-amber-500" : "bg-slate-500"
                  }`}
                />
                <div
                  className={`w-full rounded-lg p-3 md:p-4 border ${
                    era.active
                      ? "bg-amber-500/20 border-amber-500/50"
                      : "bg-navy-700/50 border-slate-700/50"
                  }`}
                >
                  <p className="text-[10px] md:text-xs text-slate-500 font-mono mb-1">
                    {era.period}
                  </p>
                  <p
                    className={`text-xs md:text-sm font-heading font-bold mb-1 ${
                      era.active ? "text-amber-400" : "text-white"
                    }`}
                  >
                    {era.name}
                  </p>
                  <p className="text-[10px] md:text-xs text-slate-400 leading-tight">
                    {era.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
