import { Card } from "@/components/ui/card";
import { MotionSection } from "@/components/ui/motion-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { education } from "@/lib/data";

export function EducationSection() {
  const Icon = education.icon;

  return (
    <MotionSection id="education">
      <SectionHeading eyebrow="Education" title="Academic foundation." />

      <Card className="mx-auto mt-10 max-w-3xl text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-ocean-50 text-ocean-700">
          <Icon size={24} />
        </span>

        <h3 className="mx-auto mt-5 max-w-2xl text-2xl font-black text-ink">
          {education.degree}
        </h3>

        <p className="mt-2 text-lg font-semibold text-muted">
          {education.university}, India
        </p>

        <p className="mt-1 text-sm font-bold uppercase tracking-[0.18em] text-ocean-700">
          {education.period}
        </p>

        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted">
          Computer Science foundation with focus on software engineering, web
          development, databases, and system design fundamentals.
        </p>
      </Card>
    </MotionSection>
  );
}