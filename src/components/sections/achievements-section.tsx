import { Card } from "@/components/ui/card";
import { MotionSection } from "@/components/ui/motion-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { achievements } from "@/lib/data";

export function AchievementsSection() {
  return (
    <MotionSection id="achievements">
      <SectionHeading
        eyebrow="Achievements"
        title="Recognition and engineering practices."
        description="A snapshot of ownership, delivery quality, and modern engineering practices."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {achievements.map((achievement) => {
          const Icon = achievement.icon;

          return (
            <Card
              key={achievement.title}
              className="text-center transition hover:-translate-y-1 hover:shadow-soft"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-ocean-50 text-ocean-700">
                <Icon size={22} />
              </span>

              <h3 className="mt-5 text-xl font-black text-ink">
                {achievement.title}
              </h3>

              <p className="mt-3 leading-7 text-muted">
                {achievement.description}
              </p>
            </Card>
          );
        })}
      </div>
    </MotionSection>
  );
}