"use client";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, LabelList } from "recharts";

const segments = [
  { name: "Logic", value: 270, pct: "40%", color: "#f6693d" },
  { name: "Memory", value: 190, pct: "28%", color: "#ffb800" },
  { name: "Equipment", value: 110, pct: "16%", color: "#64748b" },
  { name: "Analog", value: 75, pct: "11%", color: "#00a854" },
  { name: "Opto/Sensors", value: 60, pct: "9%", color: "#e8478d" },
  { name: "Discrete", value: 45, pct: "7%", color: "#008b8b" },
];

export default function SemiMarket() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <h2 className="text-sm uppercase tracking-widest text-amber-400 font-mono mb-3">
          Semiconductor Market
        </h2>
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-1">
          The ~$680B semiconductor market
        </h3>
        <p className="text-sm text-slate-400 mb-5">
          Logic + Memory = ~68% of the market — AI&apos;s center of gravity.
        </p>
        <div className="h-56 md:h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={segments} layout="vertical" barCategoryGap="15%">
              <XAxis type="number" tick={{ fill: "#94a3b8", fontSize: 10 }} unit="B" />
              <YAxis type="category" dataKey="name" tick={{ fill: "#94a3b8", fontSize: 11 }} width={90} />
              <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                {segments.map((seg, i) => (
                  <Cell key={i} fill={seg.color} />
                ))}
                <LabelList dataKey="value" position="right" fill="#94a3b8" fontSize={10} formatter={(v) => `$${v}B`} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg px-4 py-2 mt-3">
          <p className="text-sm font-heading font-semibold text-amber-400">
            Logic + Memory = ~$460B (~68% of total) — AI&apos;s center of gravity.
          </p>
        </div>
        <p className="text-[10px] text-slate-600 mt-2">
          Sources: WSTS, SIA, Gartner, SEMI. Figures reflect 2025 estimates; 2026 total market forecast ~$720B.
        </p>
      </div>
    </div>
  );
}
