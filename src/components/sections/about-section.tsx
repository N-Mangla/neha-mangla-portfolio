import { Card } from "@/components/ui/card";
import { MotionSection } from "@/components/ui/motion-section";
import { SectionHeading } from "@/components/ui/section-heading";

const focusAreas = [
  "Product UI",
  "Calendar Workflows",
  "API-driven UI",
  "Tested Frontend Systems",
];

export function AboutSection() {
  return (
    <MotionSection id="about" className="pt-4">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading
          className="text-left lg:mx-0"
          eyebrow="About"
          title="Engineering complex workflows into clean product experiences."
        />

        <Card className="space-y-6 text-base leading-8 text-muted md:text-lg">
          <div className="space-y-5">
            <p>
              I am a Senior Full Stack Engineer with 7+ years of experience
              building enterprise and SaaS product interfaces. My strongest areas
              are React, TypeScript, complex product UI, dashboards, scheduling
              workflows, REST API integration, reusable components, and
              test-focused frontend delivery.
            </p>

            <p>
              I enjoy working on interfaces where complexity is both visual and
              architectural: data transformations, permission-aware workflows,
              loading and error states, cached API ranges, reusable UI primitives,
              and clean component boundaries.
            </p>

            <p>
              My work is frontend-heavy, supported by practical backend
              contributions across Node.js, NestJS, Python, MySQL, and MongoDB.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 border-t border-slate-200 pt-5">
            {focusAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-ocean-100 bg-ocean-50 px-3 py-1 text-sm font-semibold text-ocean-700"
              >
                {area}
              </span>
            ))}
          </div>
        </Card>
      </div>
    </MotionSection>
  );
}