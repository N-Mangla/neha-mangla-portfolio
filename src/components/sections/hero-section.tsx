"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonStyles } from "@/components/ui/button";
import { highlights, profile } from "@/lib/data";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-16 pt-16 md:px-8 md:pb-24 md:pt-24">
      <div className="absolute inset-0 -z-10 bg-grid bg-[size:44px_44px] opacity-40" />
      <div className="absolute left-1/2 top-24 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-ocean-100 blur-3xl" />

      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <Badge className="gap-2">
            <Sparkles size={14} /> {profile.tagline}
          </Badge>
          <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-[-0.04em] text-ink md:text-7xl lg:text-8xl">
            {profile.role}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted md:text-xl">{profile.summary}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="#work" className={buttonStyles("primary")}>
              View work <ArrowDown size={17} />
            </Link>
            <a href={profile.github} target="_blank" rel="noreferrer" className={buttonStyles("secondary")}>
              <Github size={17} /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className={buttonStyles("secondary")}>
              <Linkedin size={17} /> LinkedIn
            </a>
            <a
              href={profile.emailUrl}
              target="_blank"
              rel="noreferrer"
              className={buttonStyles("secondary")}
            >
              <Mail size={17} /> Email
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="rounded-[2rem] border border-white/70 bg-white/75 p-4 shadow-soft backdrop-blur">
            <div className="rounded-[1.5rem] bg-ink p-6 text-white">
              <div className="mb-10 flex items-center justify-between">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">Product Engineering</span>
                <span className="text-xs text-white/60">React + TypeScript</span>
              </div>
              <div className="grid gap-3">
                {highlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ocean-500/20 text-ocean-100">
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className="text-lg font-black">{item.label}</p>
                        <p className="text-sm text-white/60">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
