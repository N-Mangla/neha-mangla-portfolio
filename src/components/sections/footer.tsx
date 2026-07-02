import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-8">
      <p>© {new Date().getFullYear()} {profile.name}. Built with Next.js, TypeScript, and Tailwind CSS.</p>
      <p>Designed for clarity, performance, and product engineering storytelling.</p>
    </footer>
  );
}
