import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-xxl border border-line/80 bg-white/86 p-6 shadow-card backdrop-blur",
        className
      )}
      {...props}
    />
  );
}
