"use client";
export default function Humanoids() {
  return (
    <div className="slide-container">
      <div className="slide-content">
        <h2 className="text-sm uppercase tracking-widest text-purple-400 font-mono mb-3">
          The Frontier
        </h2>
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-1">
          Physical AI
        </h3>
        <p className="text-sm text-slate-400 mb-5">
          Humanoids are the next inference endpoints.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="stat-card text-center mb-4">
              <p className="text-4xl font-heading font-bold text-purple-400">$38B</p>
              <p className="text-xs text-slate-500 mt-1">Humanoid robot TAM by 2035</p>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-heading font-semibold text-white mb-1">Embodied Intelligence</p>
                <p className="text-xs text-slate-400">
                  Foundation models are moving from screens to physical bodies. The same AI that powers chatbots will power robots that see, navigate, and manipulate the real world.
                </p>
              </div>
              <div>
                <p className="text-sm font-heading font-semibold text-white mb-1">Key Players</p>
                <p className="text-xs text-slate-400">
                  Tesla Optimus • Figure AI • Boston Dynamics • 1X Technologies • Agility Robotics
                </p>
              </div>
              <div>
                <p className="text-sm font-heading font-semibold text-white mb-1">Applications</p>
                <p className="text-xs text-slate-400">
                  Manufacturing • Warehousing & logistics • Healthcare • Construction • Hazardous environments
                </p>
              </div>
            </div>
          </div>
          <div className="bg-navy-700/30 rounded-lg p-4 border border-slate-700/30 flex items-center justify-center min-h-[250px]">
            <p className="text-xs text-slate-500 italic text-center">
              IMAGE: Humanoid robot in warehouse/manufacturing setting
            </p>
          </div>
        </div>
        <p className="text-[10px] text-slate-600 mt-3">
          Sources: Goldman Sachs, company announcements.
        </p>
      </div>
    </div>
  );
}
