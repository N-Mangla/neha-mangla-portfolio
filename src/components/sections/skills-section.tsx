import { Card } from "@/components/ui/card";
import { MotionSection } from "@/components/ui/motion-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillGroups } from "@/lib/data";

export function SkillsSection() {
  return (
    <MotionSection id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="A stack shaped around product engineering."
        description="Grouped by the way skills are used in real product teams: UI, state, APIs, backend support, quality, and workflow design."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => {
          const Icon = group.icon;
          return (
            <Card key={group.title} className="transition hover:-translate-y-1 hover:shadow-soft">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ocean-50 text-ocean-700">
                  <Icon size={20} />
                </span>
                <h3 className="text-lg font-black text-ink">{group.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold text-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </MotionSection>
  );
}
