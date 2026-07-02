"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { navItems, profile } from "@/lib/data";
import { buttonStyles } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/50 bg-porcelain/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="#top" className="flex items-center gap-3 focus-ring rounded-full">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-sm font-black text-white shadow-card">
            NM
          </span>
          <span className="hidden text-sm font-bold text-ink sm:block">Neha Mangla</span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-white hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a className="rounded-full p-2 text-slate-600 transition hover:bg-white hover:text-ink" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a className="rounded-full p-2 text-slate-600 transition hover:bg-white hover:text-ink" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a
            className={buttonStyles("primary") + " hidden px-4 py-2 md:inline-flex"}
            href={profile.emailUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Mail size={16} /> Contact
          </a>
        </div>
      </div>
    </header>
  );
}
