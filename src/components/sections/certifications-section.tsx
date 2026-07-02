import { BadgeCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { MotionSection } from "@/components/ui/motion-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { certifications } from "@/lib/data";

function splitCertification(certification: string) {
  const [title, meta] = certification.split(" — ");

  return {
    title,
    meta,
  };
}

export function CertificationsSection() {
  return (
    <MotionSection id="certifications">
      <SectionHeading
        eyebrow="Certifications"
        title="Continuous learning across AI and modern engineering."
        description="Recent certifications and learning programs focused on AI-assisted development, productivity, and modern software engineering workflows."
      />

      <div className="mx-auto mt-10 grid max-w-4xl gap-4">
        {certifications.map((certification) => {
          const { title, meta } = splitCertification(certification);

          return (
            <Card
              key={certification}
              className="flex items-start gap-4 p-5 transition hover:-translate-y-1 hover:shadow-soft"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-ocean-50 text-ocean-700">
                <BadgeCheck size={20} />
              </span>

              <div>
                <p className="text-lg font-black text-ink">{title}</p>
                {meta ? (
                  <p className="mt-1 text-sm font-semibold text-muted">
                    {meta}
                  </p>
                ) : null}
              </div>
            </Card>
          );
        })}
      </div>
    </MotionSection>
  );
}