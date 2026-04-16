"use client";

import { useState, useEffect, type FormEvent } from "react";
import { X, Mail, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

type State = "idle" | "submitting" | "subscribed";

const SESSION_KEY = "cel-scroll-card-dismissed";

export function NewsletterScrollReveal() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [state, setState] = useState<State>("idle");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === "1") {
      setDismissed(true);
      return;
    }
    if (localStorage.getItem("cel-subscribed") === "1") {
      setDismissed(true);
      return;
    }

    function onScroll() {
      const scrollPct =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      if (scrollPct > 0.55) setShow(true);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleDismiss() {
    sessionStorage.setItem(SESSION_KEY, "1");
    setDismissed(true);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setState("submitting");
    setTimeout(() => {
      setState("subscribed");
      localStorage.setItem("cel-subscribed", "1");
      setTimeout(handleDismiss, 2500);
    }, 1200);
  }

  if (dismissed || !show) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 w-80 overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-border animate-in slide-in-from-bottom-4 fade-in duration-500">
      <div className="relative bg-gradient-to-r from-primary-deep to-primary px-5 py-4">
        <Sparkles className="absolute right-4 top-4 h-5 w-5 text-accent/30" />
        <button
          onClick={handleDismiss}
          className="absolute right-2 top-2 rounded-lg p-1 text-white/40 transition hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="pr-6">
          <div className="mb-1 text-xs font-medium uppercase tracking-wider text-accent">
            Free weekly insight
          </div>
          <h4 className="font-serif text-lg leading-snug text-white">
            The playbook Ottawa pros read.
          </h4>
        </div>
      </div>

      <div className="px-5 py-5">
        {state === "subscribed" ? (
          <div className="flex items-center gap-3 rounded-xl bg-emerald-50 p-4">
            <CheckCircle2 className="h-5 w-5 text-emerald-500" />
            <div>
              <div className="text-sm font-medium text-emerald-800">
                You&apos;re in!
              </div>
              <div className="text-xs text-emerald-600">
                First tip lands this week.
              </div>
            </div>
          </div>
        ) : (
          <>
            <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
              One strategy + one action per week. No fluff.
            </p>
            <form onSubmit={handleSubmit} className="space-y-2.5">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground/40" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-border bg-muted/50 py-2.5 pl-9 pr-3 text-sm text-primary-deep placeholder:text-muted-foreground/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button
                type="submit"
                disabled={state === "submitting"}
                className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-primary-deep py-2.5 text-sm font-medium text-white transition hover:bg-primary disabled:opacity-70"
              >
                {state === "submitting" ? (
                  "Subscribing…"
                ) : (
                  <>
                    Subscribe <ArrowRight className="h-3.5 w-3.5" />
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
