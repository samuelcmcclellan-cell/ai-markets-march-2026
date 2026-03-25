"use client";
const statements = [
  {
    headline: "AI is the largest capital expenditure cycle in history.",
    supporting:
      "Amazon, Alphabet, Microsoft, Meta, and Oracle spent ~$325B in combined 2025 capex — with 2026 estimates exceeding $400B. Cumulative AI data center investment is on track to exceed $2 trillion by 2030.",
  },
  {
    headline: "It touches every layer of the economy.",
    supporting:
      "From the raw silicon in the ground, to the chips in a data center, to the AI agent booking your flight — this is a full-stack economic transformation.",
  },
  {
    headline: "The market is repricing everything.",
    supporting:
      "Semiconductor stocks (SOXX) and software stocks (IGV) are diverging sharply. The same AI wave is creating winners and losers simultaneously.",
  },
];

export default function WhyAIMatters() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <h2 className="text-sm uppercase tracking-widest text-blue-400 font-mono mb-3">
          Why AI Matters to Markets
        </h2>
        <div className="space-y-10 mt-6">
          {statements.map((s, i) => (
            <div key={i}>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-white leading-tight mb-3">
                {s.headline}
              </h3>
              <p className="text-base md:text-lg text-slate-400 font-body leading-relaxed max-w-3xl">
                {s.supporting}
              </p>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-slate-600 mt-auto pt-4">
          Sources: Company earnings guidance (Q4 2025/Q1 2026), Bloomberg, S&P Global Market Intelligence. Data updated March 2026.
        </p>
      </div>
    </div>
  );
}
