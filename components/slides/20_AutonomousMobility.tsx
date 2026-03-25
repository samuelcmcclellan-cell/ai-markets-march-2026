"use client";
export default function AutonomousMobility() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <h2 className="text-sm uppercase tracking-widest text-purple-400 font-mono mb-3">
          The Frontier
        </h2>
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-1">
          Autonomous mobility
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
          <div>
            <div className="stat-card text-center mb-4">
              <p className="text-4xl font-heading font-bold text-purple-400">2M+</p>
              <p className="text-xs text-slate-500 mt-1">Waymo autonomous rides per month</p>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-heading font-semibold text-white mb-1">The Safety Case Is Improving</p>
                <p className="text-xs text-slate-400">
                  Waymo&apos;s autonomous vehicles now have millions of miles of real-world data showing significantly fewer crashes than human drivers per mile.
                </p>
              </div>
              <div>
                <p className="text-sm font-heading font-semibold text-white mb-1">Continuous Learning Flywheel</p>
                <p className="text-xs text-slate-400">
                  Every mile driven generates training data. More data → better models → safer driving → more cities → more data.
                </p>
              </div>
              <div>
                <p className="text-sm font-heading font-semibold text-white mb-1">Leaders</p>
                <p className="text-xs text-slate-400">
                  Waymo (Alphabet) • Tesla FSD • Cruise (GM) • Baidu Apollo • Mobileye (Intel)
                </p>
              </div>
            </div>
          </div>
          <div className="bg-navy-700/30 rounded-lg p-4 border border-slate-700/30 flex items-center justify-center min-h-[250px]">
            <p className="text-xs text-slate-500 italic text-center">
              IMAGE: Autonomous vehicle or Waymo on city street
            </p>
          </div>
        </div>
        <p className="text-[10px] text-slate-600 mt-3">
          Sources: Waymo safety reports, company disclosures.
        </p>
      </div>
    </div>
  );
}
