"use client";
const hwWinners = [
  { name: "Micron (MU)", val: "+16%" },
  { name: "Samsung", val: "+16%" },
  { name: "SK Hynix", val: "+12%" },
  { name: "TSMC (TSM)", val: "+10%" },
];

const swLosers = [
  { name: "Adobe (ADBE)", val: "-25%" },
  { name: "Shopify (SHOP)", val: "-22%" },
  { name: "Salesforce (CRM)", val: "-20%" },
  { name: "Intuit (INTU)", val: "-18%" },
  { name: "ServiceNow (NOW)", val: "-15%" },
  { name: "Microsoft (MSFT)", val: "-12%" },
];

export default function GreatDivergence() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <h2 className="text-sm uppercase tracking-widest text-emerald-400 font-mono mb-3">
          The Shifts
        </h2>
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6">
          The great divergence
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="bg-emerald-500/20 border border-emerald-500/40 rounded-lg px-4 py-2 mb-3">
              <p className="text-sm font-heading font-bold text-emerald-400">
                SOXX (Semiconductor ETF) YTD
              </p>
            </div>
            <div className="space-y-2">
              {hwWinners.map((item) => (
                <div key={item.name} className="flex items-center justify-between bg-navy-700/40 rounded-lg px-4 py-2 border border-slate-700/30">
                  <span className="text-sm text-slate-300">{item.name}</span>
                  <span className="text-lg font-heading font-bold text-emerald-400">{item.val}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="bg-red-500/20 border border-red-500/40 rounded-lg px-4 py-2 mb-3">
              <p className="text-sm font-heading font-bold text-red-400">
                IGV (Software ETF) YTD
              </p>
            </div>
            <div className="space-y-2">
              {swLosers.map((item) => (
                <div key={item.name} className="flex items-center justify-between bg-navy-700/40 rounded-lg px-4 py-2 border border-slate-700/30">
                  <span className="text-sm text-slate-300">{item.name}</span>
                  <span className="text-lg font-heading font-bold text-red-400">{item.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg px-4 py-2 mt-4">
          <p className="text-sm font-heading font-semibold text-amber-400">
            Memory supercycle vs. SaaS decline — the same AI wave is bifurcating the market.
          </p>
        </div>
        <p className="text-[10px] text-slate-600 mt-2">
          Sources: Bloomberg, as of March 2026. YTD returns.
        </p>
      </div>
    </div>
  );
}
