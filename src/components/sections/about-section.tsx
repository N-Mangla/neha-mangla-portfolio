import { Card } from "@/components/ui/card";
import { MotionSection } from "@/components/ui/motion-section";
import { SectionHeading } from "@/components/ui/section-heading";

const focusAreas = [
  "Full-Stack Delivery",
  "React + TypeScript",
  "Backend APIs",
  "Tested Systems",
];

export function AboutSection() {
  return (
    <MotionSection id="about" className="pt-4">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading
          className="text-left lg:mx-0"
          eyebrow="About"
          title="Engineering complex workflows into reliable product systems."
        />

        <Card className="space-y-6 text-base leading-8 text-muted md:text-lg">
          <div className="space-y-5">
            <p>
              I am a Senior Full Stack Engineer with 7+ years of experience
              building enterprise and SaaS applications across React/TypeScript
              frontends, REST APIs, backend workflows, databases, and tested
              product systems.
            </p>

            <p>
              I enjoy working on features where complexity spans both UI and
              backend logic: data transformations, role-based workflows, API
              integration, loading and error states, reusable components, and
              clean service boundaries.
            </p>

            <p>
              My work spans complex React interfaces, API integration, backend
              API implementation, response restructuring, access-controlled
              workflows, and database-backed features across Node.js, NestJS,
              Python, MySQL, and MongoDB.
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