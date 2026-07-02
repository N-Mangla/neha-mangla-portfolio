import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition focus-ring";

export function buttonStyles(variant: "primary" | "secondary" | "ghost" = "primary") {
  return cn(
    base,
    variant === "primary" && "bg-ink text-white shadow-card hover:-translate-y-0.5 hover:bg-slate-800",
    variant === "secondary" && "border border-line bg-white text-ink shadow-card hover:-translate-y-0.5 hover:bg-slate-50",
    variant === "ghost" && "text-slate-700 hover:bg-white/70"
  );
}

export function Button({
  className,
  variant = "primary",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "ghost" }) {
  return <button className={cn(buttonStyles(variant), className)} {...props} />;
}
