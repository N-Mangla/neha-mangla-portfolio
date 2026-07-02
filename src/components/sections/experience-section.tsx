import { Card } from "@/components/ui/card";
import { MotionSection } from "@/components/ui/motion-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { experiences } from "@/lib/data";

export function ExperienceSection() {
  return (
    <MotionSection id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="7+ years across enterprise SaaS and full-stack product delivery."
        description="A public-facing summary of product engineering work across enterprise SaaS, full-stack delivery, and workflow-heavy applications."
      />

      <div className="mt-12 space-y-5">
        {experiences.map((experience) => (
          <Card key={experience.company} className="grid gap-6 md:grid-cols-[0.32fr_0.68fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-ocean-700">{experience.period}</p>
              <h3 className="mt-3 text-2xl font-black text-ink">{experience.company}</h3>
              <p className="mt-1 font-semibold text-muted">{experience.role}</p>
            </div>
            <div className="space-y-4">
              {experience.bullets.map((bullet) => (
                <div key={bullet} className="flex gap-3 text-sm leading-7 text-slate-700 md:text-base">
                  <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-ocean-500" />
                  <p>{bullet}</p>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </MotionSection>
  );
}
