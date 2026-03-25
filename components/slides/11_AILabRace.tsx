"use client";
const labs = [
  { name: "OpenAI", val: "~$840B", detail: "$25B ARR (Q1 2026)", color: "border-orange-500", textColor: "text-orange-400" },
  { name: "Anthropic", val: "~$380B", detail: "$19B ARR, Series E", color: "border-amber-500", textColor: "text-amber-400" },
  { name: "xAI", val: "~$230B", detail: "$20B round, Elon Musk's AI venture", color: "border-teal-500", textColor: "text-teal-400" },
];

export default function AILabRace() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <h2 className="text-sm uppercase tracking-widest text-amber-400 font-mono mb-3">
          AI Lab Race
        </h2>
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-1">
          The AI lab race
        </h3>
        <p className="text-sm text-slate-400 mb-6">
          Mostly private. Revenue growing explosively but profitability uncertain.
        </p>
        <div className="space-y-4">
          {labs.map((lab) => (
            <div
              key={lab.name}
              className={`bg-navy-700/50 rounded-xl p-5 border-l-4 ${lab.color} border border-slate-700/30 flex items-center justify-between`}
            >
              <div>
                <p className="text-lg font-heading font-bold text-white">{lab.name}</p>
                <p className="text-xs text-slate-400 mt-1">{lab.detail}</p>
              </div>
              <div className="text-right">
                <p className={`text-3xl md:text-4xl font-heading font-bold ${lab.textColor}`}>
                  {lab.val}
                </p>
                <p className="text-[10px] text-slate-500 mt-1">Valuation</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-slate-600 mt-4">
          Sources: PitchBook, press reports, company statements. Valuations as of Q1 2026.
        </p>
      </div>
    </div>
  );
}
