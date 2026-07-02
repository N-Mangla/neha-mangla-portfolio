import { ArrowUpRight, Github, Layers3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonStyles } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MotionSection } from "@/components/ui/motion-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { featuredProject } from "@/lib/data";

export function FeaturedProjectSection() {
  return (
    <MotionSection id="work">
      <SectionHeading
        eyebrow="Featured work"
        title="A project that reflects production UI thinking."
        description="A public demo built with safe mock data to demonstrate complex calendar workflows, API-driven states, event density handling, and testable UI transformation logic."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
        <Card className="flex flex-col justify-between overflow-hidden p-0">
          <div className="border-b border-line/70 p-6">
            <Badge>{featuredProject.eyebrow}</Badge>
            <h3 className="mt-5 text-3xl font-black tracking-tight text-ink md:text-4xl">{featuredProject.title}</h3>
            <p className="mt-4 leading-8 text-muted">{featuredProject.description}</p>
          </div>

          <div className="grid gap-3 p-6">
            {featuredProject.outcomes.map((outcome) => (
              <div key={outcome} className="flex gap-3 rounded-2xl bg-porcelain p-4 text-sm leading-6 text-slate-700">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-ocean-500" />
                {outcome}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 border-t border-line/70 p-6">
            <a href={featuredProject.liveUrl} target="_blank" rel="noreferrer" className={buttonStyles("primary")}>
              Live demo <ArrowUpRight size={17} />
            </a>
            <a href={featuredProject.githubUrl} target="_blank" rel="noreferrer" className={buttonStyles("secondary")}>
              <Github size={17} /> GitHub
            </a>
          </div>
        </Card>

        <Card className="relative overflow-hidden bg-ink p-4 text-white">
          <div className="absolute inset-0 bg-grid bg-[size:34px_34px] opacity-10" />
          <div className="relative rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ocean-100">Workforce Calendar UI</p>
                <h4 className="mt-1 text-2xl font-black">Roster Planner</h4>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-right">
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">Range</p>
                <p className="font-bold">Week view</p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-4 gap-3">
              {["Events", "Resources", "Leave", "Extra"].map((label, index) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                  <p className="text-xs text-white/50">{label}</p>
                  <p className="mt-2 text-2xl font-black">{[72, 4, 14, 2][index]}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
              <div className="mb-4 flex flex-wrap gap-2">
                {featuredProject.stack.slice(0, 5).map((item) => (
                  <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
                    {item}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-7 overflow-hidden rounded-2xl border border-white/10">
                {Array.from({ length: 14 }).map((_, index) => (
                  <div key={index} className="min-h-28 border-b border-r border-white/10 p-2 last:border-r-0">
                    <span className="text-xs text-white/40">{index + 1}</span>
                    <div className="mt-3 space-y-2">
                      <div className="h-6 rounded-lg bg-ocean-500/70" />
                      {index % 3 === 0 ? <div className="h-6 rounded-lg bg-orange-400/70" /> : null}
                      {index % 5 === 0 ? <div className="h-6 rounded-lg bg-slate-400/50" /> : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3 rounded-2xl border border-ocean-100/20 bg-ocean-500/10 p-4 text-sm text-ocean-50">
              <Layers3 size={18} />
              Mock API → transformation layer → calendar UI model → product components
            </div>
          </div>
        </Card>
      </div>
    </MotionSection>
  );
}
