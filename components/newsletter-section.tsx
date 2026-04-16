"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Mail,
  Zap,
  Target,
  Calendar,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

type State = "idle" | "submitting" | "subscribed";

const benefits = [
  {
    icon: Zap,
    text: "One actionable content tip every week",
  },
  {
    icon: Target,
    text: "Ottawa-specific growth strategies",
  },
  {
    icon: Calendar,
    text: "Early access to seasonal filming slots",
  },
];

export function NewsletterSection() {
  const [state, setState] = useState<State>("idle");
  const [email, setEmail] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setState("submitting");
    setTimeout(() => setState("subscribed"), 1200);
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-deep via-primary-deep to-[#1a0b2e] py-24 text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #d4a24c40 0%, transparent 50%), radial-gradient(circle at 75% 75%, #6b2fa540 0%, transparent 50%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-3xl bg-white/[0.06] ring-1 ring-white/10 backdrop-blur-sm">
          <div className="grid md:grid-cols-5">
            {/* Left — Content */}
            <div className="p-10 md:col-span-3 md:p-14">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-accent">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Free weekly insight
              </div>

              <h2 className="font-serif text-4xl leading-tight md:text-5xl">
                Get the content playbook
                <br />
                <span className="text-accent">Ottawa pros read.</span>
              </h2>

              <p className="mt-5 max-w-lg text-base leading-relaxed text-white/60">
                One email a week. No fluff, no pitch — just one strategy, one
                example, and one action you can take today to turn your
                expertise into content that converts.
              </p>

              <ul className="mt-8 space-y-4">
                {benefits.map((b) => (
                  <li
                    key={b.text}
                    className="flex items-center gap-3 text-sm text-white/80"
                  >
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-accent/15">
                      <b.icon className="h-4 w-4 text-accent" />
                    </div>
                    {b.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — Form / Success */}
            <div className="flex flex-col items-center justify-center bg-accent/10 p-10 md:col-span-2 md:p-14">
              {state === "subscribed" ? (
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/20">
                    <CheckCircle2 className="h-8 w-8 text-emerald-400" />
                  </div>
                  <h3 className="font-serif text-2xl text-white">
                    You&apos;re in.
                  </h3>
                  <p className="mt-2 text-sm text-white/60">
                    Check your inbox — your first tip lands this week.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20">
                    <Mail className="h-7 w-7 text-accent" />
                  </div>
                  <p className="mb-6 text-center text-sm text-white/70">
                    Join 200+ Ottawa professionals getting smarter about
                    content every week.
                  </p>
                  <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-xs space-y-3"
                  >
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="h-13 w-full rounded-xl border border-white/15 bg-white/10 py-3.5 pl-11 pr-4 text-sm text-white placeholder:text-white/30 backdrop-blur focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={state === "submitting"}
                      className="flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-accent py-3.5 text-sm font-medium text-primary-deep shadow-lg shadow-accent/20 transition hover:bg-accent/90 disabled:opacity-70"
                    >
                      {state === "submitting" ? (
                        <>
                          <svg
                            className="-ml-1 mr-2 h-4 w-4 animate-spin"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
                          </svg>
                          Subscribing…
                        </>
                      ) : (
                        <>
                          Subscribe{" "}
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </form>
                  <p className="mt-4 text-center text-xs text-white/30">
                    No spam. Unsubscribe anytime.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
