"use client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell, LabelList } from "recharts";

const powerData = [
  { year: "2020", twh: 196 },
  { year: "2024", twh: 325 },
  { year: "2026E", twh: 500 },
  { year: "2030E", twh: 1000 },
];

export default function PoweringBuildout() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <h2 className="text-sm uppercase tracking-widest text-blue-400 font-mono mb-3">
          The Landscape
        </h2>
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6">
          Powering the buildout
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm font-heading font-semibold text-white mb-3">
              Data Center Power Demand (TWh)
            </p>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={powerData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="year" tick={{ fill: "#94a3b8", fontSize: 11 }} />
                  <YAxis tick={{ fill: "#94a3b8", fontSize: 11 }} />
                  <Bar dataKey="twh" radius={[4, 4, 0, 0]}>
                    {powerData.map((_, i) => (
                      <Cell key={i} fill={i >= 2 ? "#f59e0b" : "#64748b"} />
                    ))}
                    <LabelList dataKey="twh" position="top" fill="#94a3b8" fontSize={10} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="space-y-4">
            <div className="stat-card accent-border-amber">
              <p className="text-sm font-heading font-semibold text-white mb-2">Nuclear Deals</p>
              <p className="text-xs text-slate-400">
                Microsoft: Three Mile Island restart (835 MW). Google Kairos SMR: 500 MW by 2030.
                Amazon: 3 nuclear investments. Oracle: nuclear-powered DCs. Meta: seeking 1–4 GW nuclear.
              </p>
            </div>
            <div className="stat-card accent-border-amber">
              <p className="text-sm font-heading font-semibold text-white mb-2">Gas Turbines</p>
              <p className="text-xs text-slate-400">
                xAI Colossus 2: 41 gas turbines (1.2 GW behind-the-meter).
                GE Vernova: 80 GW backlog, $150B pending orders.
              </p>
            </div>
            <div className="flex gap-3">
              <div className="stat-card flex-1 text-center">
                <p className="text-2xl font-heading font-bold text-amber-400">500 TWh</p>
                <p className="text-[10px] text-slate-500 mt-1">2026E DC power</p>
              </div>
              <div className="stat-card flex-1 text-center">
                <p className="text-2xl font-heading font-bold text-amber-400">2,600 GW</p>
                <p className="text-[10px] text-slate-500 mt-1">Grid queue</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-[10px] text-slate-600 mt-3">
          Sources: IEA, EIA, company announcements, PJM Interconnection.
        </p>
      </div>
    </div>
  );
}
