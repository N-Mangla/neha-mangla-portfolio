import { cn } from "@/lib/utils";

export function Badge({ className, children }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-ocean-100 bg-ocean-50 px-3 py-1 text-xs font-semibold text-ocean-700",
        className
      )}
    >
      {children}
    </span>
  );
}
