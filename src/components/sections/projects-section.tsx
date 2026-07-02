import { ArrowUpRight, Github, LockKeyhole } from "lucide-react";
import { buttonStyles } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MotionSection } from "@/components/ui/motion-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/lib/data";

export function ProjectsSection() {
  return (
    <MotionSection id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Public work and selected product experience."
        description="A mix of public demos and professional product work, focused on UI architecture, workflow design, and full-stack delivery."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {projects.map((project) => {
          const isPublicProject = Boolean(project.href || project.github);

          return (
            <Card
              key={project.title}
              className="flex flex-col justify-between transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-ocean-100 bg-ocean-50 px-3 py-1 text-xs font-bold text-ocean-700">
                  {isPublicProject ? (
                    <>
                      <ArrowUpRight size={13} />
                      Public demo
                    </>
                  ) : (
                    <>
                      <LockKeyhole size={13} />
                      Professional summary
                    </>
                  )}
                </span>

                <h3 className="mt-4 text-2xl font-black text-ink">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-muted">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-porcelain px-3 py-1.5 text-xs font-semibold text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {isPublicProject ? (
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className={buttonStyles("primary") + " px-4 py-2"}
                    >
                      Live <ArrowUpRight size={16} />
                    </a>
                  ) : null}

                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className={buttonStyles("secondary") + " px-4 py-2"}
                    >
                      <Github size={16} /> Code
                    </a>
                  ) : null}
                </div>
              ) : null}
            </Card>
          );
        })}
      </div>
    </MotionSection>
  );
}