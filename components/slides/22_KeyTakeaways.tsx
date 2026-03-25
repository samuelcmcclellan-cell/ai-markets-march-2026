"use client";
const takeaways = [
  {
    num: "01",
    title: "The capex cycle is real and financing itself.",
    body: "$750B in combined 2026E capex. These companies have the cash flows to sustain it.",
    color: "bg-orange-500",
  },
  {
    num: "02",
    title: "Follow the atoms, not the bits (for now).",
    body: "Semiconductors and memory are the immediate winners. Software's reckoning is underway.",
    color: "bg-amber-500",
  },
  {
    num: "03",
    title: "Bottlenecks shift.",
    body: "Today it's power and HBM. Tomorrow it could be helium, packaging, or regulatory gridlock.",
    color: "bg-emerald-500",
  },
  {
    num: "04",
    title: "Get intentional about exposure.",
    body: "AI is not one trade — it's an entire supply chain. Pick your layer.",
    color: "bg-teal-500",
  },
];

export default function KeyTakeaways() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8">
          Key Takeaways
        </h3>
        <div className="space-y-5">
          {takeaways.map((t) => (
            <div key={t.num} className="flex items-start gap-4">
              <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center flex-shrink-0`}>
                <span className="text-sm font-heading font-bold text-white">{t.num}</span>
              </div>
              <div>
                <p className="text-lg md:text-xl font-heading font-bold text-white">
                  {t.title}
                </p>
                <p className="text-sm text-slate-400 mt-1">
                  {t.body}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-500 mt-8 text-center font-mono">
          AI Markets — March 2026
        </p>
      </div>
    </div>
  );
}
