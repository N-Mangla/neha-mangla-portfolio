import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      <Badge>{eyebrow}</Badge>
      <h2 className="mt-5 text-3xl font-black tracking-tight text-ink md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-8 text-muted md:text-lg">{description}</p> : null}
    </div>
  );
}
