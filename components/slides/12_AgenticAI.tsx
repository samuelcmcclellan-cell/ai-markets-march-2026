"use client";
const chatbot = [
  "Single query, human-in-the-loop",
  "User types prompt, model responds",
  "~1x compute per user",
  "Limited tool integration",
];

const agent = [
  "Multi-step autonomous workflows",
  "Tool use: browse, code, execute",
  "10–100x more compute per user",
  "Can replace entire workflows",
];

export default function AgenticAI() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <h2 className="text-sm uppercase tracking-widest text-emerald-400 font-mono mb-3">
          The Shifts
        </h2>
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6">
          From chatbots to coworkers
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="stat-card">
            <p className="text-sm font-heading font-semibold text-slate-400 mb-3">
              Chatbots (2023–2024)
            </p>
            <ul className="space-y-2">
              {chatbot.map((item, i) => (
                <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                  <span className="text-slate-600 mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="stat-card accent-border-green">
            <p className="text-sm font-heading font-semibold text-emerald-400 mb-3">
              Agents (2025+)
            </p>
            <ul className="space-y-2">
              {agent.map((item, i) => (
                <li key={i} className={`text-sm flex items-start gap-2 ${i === 2 ? "text-amber-400 font-semibold" : "text-slate-300"}`}>
                  <span className="text-emerald-500 mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-slate-800 rounded-lg p-4 mt-5 border border-slate-700/50">
          <p className="text-sm font-heading font-semibold text-white">
            Implication: Inference compute demand explodes. Software vendors must adapt or be replaced.
          </p>
        </div>
        <div className="mt-4 bg-navy-700/30 rounded-lg p-3 border border-slate-700/30">
          <p className="text-xs text-slate-500 italic">
            IMAGE: Chatbot vs. agent comparison — single prompt/response vs. multi-step autonomous workflow
          </p>
        </div>
        <p className="text-[10px] text-slate-600 mt-2">
          Sources: Industry analysis, OpenAI, Anthropic product updates.
        </p>
      </div>
    </div>
  );
}
