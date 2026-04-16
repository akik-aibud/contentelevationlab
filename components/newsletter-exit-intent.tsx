"use client";

import { useState, useEffect, type FormEvent } from "react";
import {
  X,
  Mail,
  ArrowRight,
  CheckCircle2,
  Zap,
  Target,
  Calendar,
} from "lucide-react";

type State = "idle" | "submitting" | "subscribed";

const SESSION_KEY = "cel-exit-modal-shown";

export function NewsletterExitIntent() {
  const [show, setShow] = useState(false);
  const [state, setState] = useState<State>("idle");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === "1") return;

    function handleMouseLeave(e: MouseEvent) {
      if (e.clientY <= 0) {
        sessionStorage.setItem(SESSION_KEY, "1");
        setShow(true);
        document.removeEventListener("mouseout", handleMouseLeave);
      }
    }

    const timer = setTimeout(() => {
      document.addEventListener("mouseout", handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  function handleClose() {
    setShow(false);
    document.body.style.overflow = "";
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setState("submitting");
    setTimeout(() => {
      setState("subscribed");
      setTimeout(handleClose, 2500);
    }, 1200);
  }

  useEffect(() => {
    if (show) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center px-4">
      <button
        onClick={handleClose}
        className="absolute inset-0 bg-primary-deep/60 backdrop-blur-sm"
        aria-label="Close"
      />

      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl">
        {/* Header */}
        <div className="relative overflow-hidden bg-primary-deep px-8 pb-8 pt-6">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative">
            <div className="flex items-start justify-between">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                Before you go
              </div>
              <button
                onClick={handleClose}
                className="rounded-lg p-1.5 text-white/50 transition hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <h2 className="mt-4 font-serif text-3xl text-white">
              Don&apos;t leave without
              <br />
              <span className="text-accent">the playbook.</span>
            </h2>
          </div>
        </div>

        {/* Body */}
        <div className="px-8 py-8">
          {state === "subscribed" ? (
            <div className="flex flex-col items-center py-6 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50">
                <CheckCircle2 className="h-8 w-8 text-emerald-500" />
              </div>
              <h3 className="font-serif text-2xl text-primary-deep">
                You&apos;re in.
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Your first tip lands this week.
              </p>
            </div>
          ) : (
            <>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                Join 200+ Ottawa pros who get one content strategy, one
                example, and one action to grow their brand — every week.
              </p>

              <div className="mb-6 grid grid-cols-3 gap-3">
                {[
                  { icon: Zap, label: "Weekly tip" },
                  { icon: Target, label: "Ottawa focus" },
                  { icon: Calendar, label: "Early access" },
                ].map((b) => (
                  <div
                    key={b.label}
                    className="flex flex-col items-center rounded-xl bg-primary-soft/40 px-3 py-4 text-center"
                  >
                    <b.icon className="mb-2 h-5 w-5 text-primary" />
                    <span className="text-xs font-medium text-primary-deep">
                      {b.label}
                    </span>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/40" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    autoFocus
                    className="w-full rounded-xl border border-border bg-muted/50 py-3.5 pl-11 pr-4 text-sm text-primary-deep placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <button
                  type="submit"
                  disabled={state === "submitting"}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary-deep py-3.5 text-sm font-medium text-white transition hover:bg-primary disabled:opacity-70"
                >
                  {state === "submitting" ? (
                    "Subscribing…"
                  ) : (
                    <>
                      Get the Playbook{" "}
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
              <p className="mt-4 text-center text-xs text-muted-foreground/50">
                No spam. Unsubscribe anytime.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
