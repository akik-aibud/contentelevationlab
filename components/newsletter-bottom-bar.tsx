"use client";

import { useState, type FormEvent } from "react";
import { Bell, X, ArrowRight, Mail, CheckCircle2 } from "lucide-react";

type State = "idle" | "submitting" | "subscribed";

export function NewsletterBottomBar() {
  const [dismissed, setDismissed] = useState(false);
  const [state, setState] = useState<State>("idle");
  const [email, setEmail] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setState("submitting");
    setTimeout(() => {
      setState("subscribed");
      setTimeout(() => setDismissed(true), 2500);
    }, 1200);
  }

  if (dismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t-2 border-accent bg-primary-deep text-white shadow-2xl">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-4 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-3">
          <Bell className="h-5 w-5 flex-shrink-0 text-accent" />
          {state === "subscribed" ? (
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>
                You&apos;re in! First tip lands this week.
              </span>
            </div>
          ) : (
            <p className="text-sm">
              <span className="font-semibold">Weekly content playbook.</span>{" "}
              <span className="hidden text-white/60 sm:inline">
                One strategy + one action, every week.
              </span>
            </p>
          )}
        </div>

        {state !== "subscribed" && (
          <form
            onSubmit={handleSubmit}
            className="flex w-full gap-2 sm:w-auto"
          >
            <div className="relative flex-1 sm:w-56">
              <Mail className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-white/30" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="h-10 w-full rounded-lg border border-white/15 bg-white/10 pl-9 pr-3 text-sm text-white placeholder:text-white/30 focus:border-accent/50 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={state === "submitting"}
              className="flex h-10 items-center gap-1.5 whitespace-nowrap rounded-lg bg-accent px-4 text-sm font-medium text-primary-deep transition hover:bg-accent/90 disabled:opacity-70"
            >
              {state === "submitting" ? "…" : "Subscribe"}
              {state !== "submitting" && (
                <ArrowRight className="h-3.5 w-3.5" />
              )}
            </button>
          </form>
        )}

        <button
          onClick={() => setDismissed(true)}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg p-1 text-white/40 transition hover:text-white sm:relative sm:right-auto sm:top-auto sm:translate-y-0"
          aria-label="Dismiss"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
