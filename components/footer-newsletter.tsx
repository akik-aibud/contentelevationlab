"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Mail, CheckCircle2, Sparkles } from "lucide-react";

type State = "idle" | "submitting" | "subscribed";

export function FooterNewsletter() {
  const [state, setState] = useState<State>("idle");
  const [email, setEmail] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setState("submitting");
    setTimeout(() => {
      setState("subscribed");
      if (typeof window !== "undefined") {
        localStorage.setItem("cel-subscribed", "1");
      }
    }, 1200);
  }

  return (
    <div className="grid items-center gap-8 md:grid-cols-5">
      <div className="md:col-span-3">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent">
          <Sparkles className="h-3 w-3" />
          Newsletter
        </div>
        <h3 className="font-serif text-2xl text-white md:text-3xl">
          Get the content playbook.
        </h3>
        <p className="mt-2 text-sm text-white/60">
          One strategy, one example, one action — every week. No fluff.
        </p>
      </div>

      <div className="md:col-span-2">
        {state === "subscribed" ? (
          <div className="flex items-center gap-3 rounded-xl bg-emerald-500/15 p-4">
            <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-emerald-400" />
            <div>
              <div className="text-sm font-medium text-white">
                You&apos;re in!
              </div>
              <div className="text-xs text-white/50">
                First tip lands this week.
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <div className="relative flex-1">
              <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/25" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="h-12 w-full rounded-xl border border-white/15 bg-white/10 pl-10 pr-4 text-sm text-white placeholder:text-white/30 focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20"
              />
            </div>
            <button
              type="submit"
              disabled={state === "submitting"}
              className="flex h-12 items-center gap-1.5 whitespace-nowrap rounded-xl bg-accent px-5 text-sm font-medium text-primary-deep shadow-lg shadow-accent/20 transition hover:bg-accent/90 disabled:opacity-70"
            >
              {state === "submitting" ? (
                "…"
              ) : (
                <>
                  Subscribe <ArrowRight className="h-3.5 w-3.5" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
