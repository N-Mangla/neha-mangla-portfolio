import { ArrowUpRight } from "lucide-react";
import { buttonStyles } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MotionSection } from "@/components/ui/motion-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile, socialActions } from "@/lib/data";

export function ContactSection() {
  return (
    <MotionSection id="contact">
      <Card className="overflow-hidden bg-ink p-0 text-white">
        <div className="relative p-8 md:p-12">
          <div className="absolute inset-0 bg-grid bg-[size:38px_38px] opacity-10" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <SectionHeading
                className="mx-0 text-left [&_h2]:text-white [&_p]:text-white/65"
                eyebrow="Contact"
                title="Let’s connect around product engineering."
                description="For engineering conversations, collaborations, or professional inquiries, email me or connect with me on LinkedIn/GitHub."
              />
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
                Email
              </p>

              <a
                href={profile.emailUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Email ${profile.name}`}
                className="mt-2 block break-all text-2xl font-black text-white hover:text-ocean-100"
              >
                {profile.email}
              </a>

              <div className="mt-6 flex flex-wrap gap-3">
                {socialActions.map((action) => {
                  const Icon = action.icon;

                  return (
                    <a
                      key={action.label}
                      href={action.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${action.label}`}
                      className={
                        buttonStyles("secondary") +
                        " border-white/10 bg-white/10 px-4 py-2 text-white hover:bg-white/20"
                      }
                    >
                      <Icon size={16} />
                      {action.label}
                      <ArrowUpRight size={14} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </MotionSection>
  );
}