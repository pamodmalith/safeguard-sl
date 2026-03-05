"use client";

import { Users, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="border-b border-border bg-teal-400/5 min-h-[30vh] items-center flex">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-balance text-4xl font-bold text-foreground lg:text-4xl">
              About Digital SafeGuard SL
            </h1>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              A free educational project dedicated to protecting older adults in
              Sri Lanka from digital financial scams.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-background py-12 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="flex items-center gap-2.5 mb-6">
            <Target className="h-5 w-5 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
          </div>
          <div className="flex flex-col gap-3 text-base leading-relaxed text-muted-foreground">
            <p>
              Older adults in Sri Lanka are increasingly targeted by digital
              financial scams, including SMS phishing, WhatsApp impersonation,
              and fraudulent phone calls. Many lack access to interactive,
              accessible resources that teach them how to visually identify
              these threats safely.
            </p>
            <p>
              Digital SafeGuard SL was created to fill this gap. Instead of
              dense, text-heavy warnings that are easy to ignore, we provide a
              hands-on, interactive experience that builds real awareness
              through practice and cognitive feedback.
            </p>
            <p>
              This website is completely free, requires no login, and works on
              any device with an internet connection. Our goal is simple: help
              you recognise a scam before it causes harm.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
