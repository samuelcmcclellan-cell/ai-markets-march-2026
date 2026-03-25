"use client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LabelList } from "recharts";

const hbmTam = [
  { year: "2023", tam: 4 },
  { year: "2024", tam: 16 },
  { year: "2025E", tam: 35 },
  { year: "2026E", tam: 55 },
  { year: "2028E", tam: 100 },
];

export default function MemoryDeepDive() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <h2 className="text-sm uppercase tracking-widest text-amber-400 font-mono mb-3">
          Memory Deep Dive
        </h2>
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-1">
          The memory wall
        </h3>
        <p className="text-sm text-slate-400 mb-5">
          HBM is the binding constraint in AI infrastructure.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm font-heading font-semibold text-white mb-3">HBM TAM ($B)</p>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={hbmTam}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="year" tick={{ fill: "#94a3b8", fontSize: 11 }} />
                  <YAxis tick={{ fill: "#94a3b8", fontSize: 11 }} />
                  <Bar dataKey="tam" fill="#f6693d" radius={[4, 4, 0, 0]}>
                    <LabelList dataKey="tam" position="top" fill="#94a3b8" fontSize={10} formatter={(v) => `$${v}B`} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-sm font-heading font-semibold text-white">Market Share</p>
            <div className="grid grid-cols-3 gap-2">
              <div className="stat-card text-center">
                <p className="text-2xl font-heading font-bold text-orange-400">~50%</p>
                <p className="text-[10px] text-slate-500 mt-1">SK Hynix</p>
              </div>
              <div className="stat-card text-center">
                <p className="text-2xl font-heading font-bold text-amber-400">~25%</p>
                <p className="text-[10px] text-slate-500 mt-1">Samsung</p>
              </div>
              <div className="stat-card text-center">
                <p className="text-2xl font-heading font-bold text-amber-400">~25%</p>
                <p className="text-[10px] text-slate-500 mt-1">Micron</p>
              </div>
            </div>
            <div className="stat-card">
              <p className="text-sm font-heading font-semibold text-white mb-2">Bandwidth Comparison</p>
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">DDR5</span>
                  <span className="text-slate-300 font-mono">50 GB/s</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">HBM3E</span>
                  <span className="text-amber-400 font-mono font-bold">1,200 GB/s</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">HBM4</span>
                  <span className="text-orange-400 font-mono font-bold">2,000+ GB/s</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-[10px] text-slate-600 mt-3">
          Sources: TrendForce, company disclosures, industry estimates. Market share approximate and shifting.
        </p>
      </div>
    </div>
  );
}
