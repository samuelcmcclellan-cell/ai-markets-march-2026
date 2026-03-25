"use client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend, Tooltip } from "recharts";

const capexData = [
  { name: "Amazon", fy2024: 75, fy2025: 100, fy2026e: 100 },
  { name: "Alphabet", fy2024: 52.5, fy2025: 75, fy2026e: 75 },
  { name: "Microsoft", fy2024: 55, fy2025: 80, fy2026e: 80 },
  { name: "Meta", fy2024: 37, fy2025: 62, fy2026e: 65 },
  { name: "Oracle", fy2024: 12, fy2025: 16, fy2026e: 25 },
];

export default function HyperscalerCapex() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <h2 className="text-sm uppercase tracking-widest text-amber-400 font-mono mb-3">
          The Market
        </h2>
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-1">
          Who is buying all these chips?
        </h3>
        <div className="flex items-center gap-3 mb-5">
          <span className="text-4xl md:text-5xl font-heading font-bold text-amber-400">$325B+</span>
          <span className="text-sm text-slate-400">Combined hyperscaler 2025 capex</span>
        </div>
        <div className="h-56 md:h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={capexData} barCategoryGap="20%">
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="name" tick={{ fill: "#94a3b8", fontSize: 11 }} />
              <YAxis tick={{ fill: "#94a3b8", fontSize: 11 }} unit="B" />
              <Tooltip
                contentStyle={{ backgroundColor: "#141c33", border: "1px solid #334155", borderRadius: 8 }}
                labelStyle={{ color: "#fff" }}
                itemStyle={{ color: "#94a3b8" }}
                formatter={(value) => [`$${value}B`]}
              />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Bar dataKey="fy2024" name="FY2024" fill="#64748b" radius={[2, 2, 0, 0]} />
              <Bar dataKey="fy2025" name="FY2025" fill="#f59e0b" radius={[2, 2, 0, 0]} />
              <Bar dataKey="fy2026e" name="FY2026E" fill="#f6693d" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-xs text-slate-400 mt-3">
          Expanding buyer base: AI labs (OpenAI, Anthropic), neoclouds (CoreWeave, Lambda), governments, enterprises.
        </p>
        <p className="text-[10px] text-slate-600 mt-2">
          Sources: Company earnings calls, Bloomberg estimates. Figures updated March 2026.
        </p>
      </div>
    </div>
  );
}
