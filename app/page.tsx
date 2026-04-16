import Link from "next/link";
import {
  ArrowRight,
  Check,
  Star,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Target,
  Video,
  TrendingUp,
  Shield,
  Clock,
  ChevronRight,
  Quote,
} from "lucide-react";

const BOOKING_URL = "#book";
const PHONE = "(613) 799-3694";
const PHONE_TEL = "+16137993694";
const EMAIL = "hello@contentelevationlab.ca";

export default function Page() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <LogoStrip />
        <Problem />
        <Framework />
        <Proof />
        <Services />
        <Comparison />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

/* ─────────────────────────── NAV ─────────────────────────── */

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-deep">
            <Sparkles className="h-4 w-4 text-accent" />
          </div>
          <span className="font-serif text-lg font-semibold text-primary-deep">
            Content Elevation Lab
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="#framework" className="hover:text-primary-deep">Framework</a>
          <a href="#services" className="hover:text-primary-deep">Services</a>
          <a href="#pricing" className="hover:text-primary-deep">Pricing</a>
          <a href="#faq" className="hover:text-primary-deep">FAQ</a>
        </nav>
        <a
          href={BOOKING_URL}
          className="inline-flex items-center gap-1.5 rounded-full bg-primary-deep px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-primary"
        >
          Book Free Call
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

/* ─────────────────────────── HERO ─────────────────────────── */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-soft/60 via-white to-white pt-20 pb-24">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, #d4a24c22 0%, transparent 40%), radial-gradient(circle at 80% 30%, #6b2fa522 0%, transparent 45%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-accent-deep">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Now Booking — Spring 2026 Cohort
          </div>

          <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-primary-deep md:text-7xl">
            Be the name{" "}
            <span className="relative inline-block">
              <span className="relative z-10">everyone follows</span>
              <span className="absolute bottom-2 left-0 right-0 -z-0 h-3 bg-accent/40" />
            </span>{" "}
            in Ottawa.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            One filming day. 90 days of content that actually converts. Built
            for real estate agents, lawyers, advisors, and consultants who are
            crushing it offline — and invisible online.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={BOOKING_URL}
              className="group inline-flex items-center gap-2 rounded-full bg-primary-deep px-7 py-4 text-base font-medium text-white shadow-lg shadow-primary-deep/20 transition hover:bg-primary"
            >
              Book Free 30-Min Strategy Call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#framework"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-7 py-4 text-base font-medium text-primary-deep transition hover:border-primary hover:text-primary"
            >
              See the Framework
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Shield className="h-4 w-4 text-accent-deep" />
              No long-term contracts
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-accent-deep" />
              Results in 60 days or we keep filming free
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-accent-deep" />
              Ottawa-based, Canada-wide
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-border pt-12 md:grid-cols-4">
          <Stat value="87%" label="Avg. conversion lift in 90 days" />
          <Stat value="1 day" label="Films 90 days of content" />
          <Stat value="40+" label="Ottawa professionals served" />
          <Stat value="4.9/5" label="Average client rating" />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="font-serif text-4xl font-semibold text-primary-deep md:text-5xl">
        {value}
      </div>
      <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

/* ─────────────────────────── LOGO STRIP ─────────────────────────── */

function LogoStrip() {
  const industries = [
    "Real Estate",
    "Legal",
    "Insurance",
    "Consulting",
    "Coaching",
    "Financial",
  ];
  return (
    <section className="border-y border-border/60 bg-muted py-10">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Trusted by Ottawa&apos;s trust-based professionals
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {industries.map((i) => (
            <span key={i} className="font-serif text-xl text-primary-deep/50">
              {i}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── PROBLEM ─────────────────────────── */

function Problem() {
  const pains = [
    "You're the best in the room — but online, nobody knows you exist.",
    "You post randomly. Sometimes twice a week, sometimes nothing for a month.",
    "You've hired videographers who delivered pretty reels that brought zero clients.",
    "Referrals carry your business. One slow quarter away from panic.",
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-12 text-center">
          <div className="mb-4 text-xs font-medium uppercase tracking-widest text-accent-deep">
            The Problem
          </div>
          <h2 className="font-serif text-4xl text-primary-deep md:text-5xl">
            Face-to-face you&apos;re magnetic.
            <br />
            <span className="text-muted-foreground">Online you&apos;re a ghost.</span>
          </h2>
        </div>
        <ul className="space-y-4">
          {pains.map((p) => (
            <li
              key={p}
              className="flex items-start gap-4 rounded-2xl border border-border bg-white p-6 text-lg text-primary-deep"
            >
              <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent-soft">
                <span className="text-accent-deep">✕</span>
              </div>
              {p}
            </li>
          ))}
        </ul>
        <p className="mt-10 text-center text-lg text-muted-foreground">
          It&apos;s not a skill problem. It&apos;s a{" "}
          <span className="font-semibold text-primary-deep">system problem</span>
          . We build the system.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────── FRAMEWORK ─────────────────────────── */

function Framework() {
  const steps = [
    {
      icon: Target,
      num: "01",
      title: "Positioning",
      desc: "We dig into your expertise, clients, and wins. Then we structure your messaging so every post earns authority — not attention.",
      outputs: ["Niche map", "Pillar topics", "Signature POV"],
    },
    {
      icon: Video,
      num: "02",
      title: "Production",
      desc: "One filming day per quarter. We batch-shoot 60–90 pieces of content so you never have to think 'what do I post today?' again.",
      outputs: ["Pro filming day", "Edited shorts", "Branded captions"],
    },
    {
      icon: TrendingUp,
      num: "03",
      title: "Conversion",
      desc: "Every piece has a measurable job — book a call, download a guide, reply DM. We track what converts and double down.",
      outputs: ["CTA engineering", "Funnel build", "Monthly reporting"],
    },
  ];
  return (
    <section id="framework" className="bg-primary-deep py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <div className="mb-4 text-xs font-medium uppercase tracking-widest text-accent">
            The CEL Framework
          </div>
          <h2 className="font-serif text-4xl md:text-5xl">
            Three steps. Ninety days.
            <br />
            <span className="text-accent">A system you own forever.</span>
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.num}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:border-accent/50 hover:bg-white/[0.07]"
            >
              <div className="absolute -right-4 -top-4 font-serif text-8xl font-bold text-white/5">
                {s.num}
              </div>
              <div className="relative">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 font-serif text-2xl text-white">{s.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-white/70">
                  {s.desc}
                </p>
                <ul className="space-y-2 border-t border-white/10 pt-6">
                  {s.outputs.map((o) => (
                    <li
                      key={o}
                      className="flex items-center gap-2 text-sm text-white/80"
                    >
                      <Check className="h-4 w-4 text-accent" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── PROOF ─────────────────────────── */

function Proof() {
  const cases = [
    {
      industry: "Real Estate",
      before: "3 posts/month, zero inbound",
      after: "12 qualified leads in 60 days",
      metric: "+400%",
      metricLabel: "inbound leads",
      quote:
        "The first filming day paid for itself before the edits even landed. Three listings from Instagram DMs.",
      author: "Zara B.",
      role: "Realtor, Westboro",
    },
    {
      industry: "Legal",
      before: "Invisible outside of Google ads",
      after: "2,400 followers, 8 consultations/wk",
      metric: "+87%",
      metricLabel: "consult book rate",
      quote:
        "I stopped paying for ads. My content IS the ad now — and it converts warmer, better clients.",
      author: "Ashwin S.",
      role: "Family Lawyer, Ottawa",
    },
    {
      industry: "Insurance",
      before: "Cold calling 40 hrs/week",
      after: "Inbound DMs, calendar full",
      metric: "+2.1×",
      metricLabel: "revenue in 4 months",
      quote:
        "I used to chase. Now clients come to me already trusting me. It's a completely different business.",
      author: "Elsie R.",
      role: "Insurance Advisor",
    },
  ];
  return (
    <section className="bg-muted py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <div className="mb-4 text-xs font-medium uppercase tracking-widest text-accent-deep">
            Real Numbers
          </div>
          <h2 className="font-serif text-4xl text-primary-deep md:text-5xl">
            What 90 days actually looks like.
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {cases.map((c) => (
            <div
              key={c.author}
              className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-border"
            >
              <div className="mb-6 inline-flex rounded-full bg-primary-soft px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
                {c.industry}
              </div>
              <div className="mb-6 flex items-baseline gap-2">
                <span className="font-serif text-5xl font-semibold text-primary-deep">
                  {c.metric}
                </span>
                <span className="text-sm text-muted-foreground">
                  {c.metricLabel}
                </span>
              </div>
              <div className="mb-6 space-y-2 border-y border-border py-4 text-sm">
                <div className="flex gap-2">
                  <span className="font-medium text-muted-foreground">Before:</span>
                  <span className="text-primary-deep">{c.before}</span>
                </div>
                <div className="flex gap-2">
                  <span className="font-medium text-accent-deep">After:</span>
                  <span className="text-primary-deep">{c.after}</span>
                </div>
              </div>
              <Quote className="mb-3 h-6 w-6 text-accent" />
              <p className="mb-4 text-sm italic leading-relaxed text-primary-deep">
                &ldquo;{c.quote}&rdquo;
              </p>
              <div className="text-xs font-medium text-muted-foreground">
                — {c.author}, {c.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── SERVICES ─────────────────────────── */

function Services() {
  const services = [
    {
      title: "Content Strategy",
      desc: "Positioning, pillar topics, 90-day content calendar built around your actual wins and ideal clients.",
    },
    {
      title: "Script Development",
      desc: "Hooks that stop the scroll. Stories that build trust. CTAs that convert. All written in your voice.",
    },
    {
      title: "Batch Video Production",
      desc: "One professional filming day. 60–90 finished pieces. Cinematic edits, branded captions, ready to post.",
    },
    {
      title: "Social Optimization",
      desc: "Platform-native strategy for Instagram, LinkedIn, TikTok, and YouTube Shorts. No copy-paste posting.",
    },
    {
      title: "Conversion Engineering",
      desc: "Landing pages, lead magnets, DM funnels, booking flows. Every view has a next step.",
    },
    {
      title: "Monthly Reporting",
      desc: "Clear dashboards showing what's working, what's not, and exactly what we're changing next month.",
    },
  ];
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <div className="mb-4 text-xs font-medium uppercase tracking-widest text-accent-deep">
            What You Get
          </div>
          <h2 className="font-serif text-4xl text-primary-deep md:text-5xl">
            Everything you need.
            <br />
            <span className="text-muted-foreground">Nothing you don&apos;t.</span>
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-border bg-white p-6 transition hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-soft text-primary transition group-hover:bg-primary group-hover:text-white">
                <Check className="h-5 w-5" />
              </div>
              <h3 className="mb-2 font-serif text-xl text-primary-deep">
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── COMPARISON ─────────────────────────── */

function Comparison() {
  const rows = [
    ["Who it's for", "Any business needing video", "Trust-based Ottawa pros"],
    ["Output focus", "Pretty reels", "Conversion-first content"],
    ["Strategy included", "No", "Yes — full 90-day plan"],
    ["Shoot frequency", "Ad-hoc / monthly", "One batch day per quarter"],
    ["Measurement", "Views & likes", "Booked calls & revenue"],
    ["Pricing", "Per-project, unpredictable", "Flat quarterly, transparent"],
  ];
  return (
    <section className="bg-muted py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center">
          <div className="mb-4 text-xs font-medium uppercase tracking-widest text-accent-deep">
            Why CEL
          </div>
          <h2 className="font-serif text-4xl text-primary-deep md:text-5xl">
            Not another video shop.
          </h2>
        </div>
        <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-border">
          <div className="grid grid-cols-3 bg-primary-deep text-white">
            <div className="p-5 text-xs font-medium uppercase tracking-wider text-white/60">
              Compare
            </div>
            <div className="p-5 text-sm font-medium text-white/80">
              Traditional Agency
            </div>
            <div className="flex items-center gap-2 bg-accent/10 p-5 text-sm font-medium text-accent">
              <Sparkles className="h-4 w-4" /> Content Elevation Lab
            </div>
          </div>
          {rows.map((r, i) => (
            <div
              key={r[0]}
              className={`grid grid-cols-3 text-sm ${
                i % 2 === 0 ? "bg-white" : "bg-muted/50"
              }`}
            >
              <div className="p-5 font-medium text-muted-foreground">{r[0]}</div>
              <div className="p-5 text-muted-foreground line-through decoration-accent/40">
                {r[1]}
              </div>
              <div className="bg-accent-soft/40 p-5 font-medium text-primary-deep">
                {r[2]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── TESTIMONIALS ─────────────────────────── */

function Testimonials() {
  const quotes = [
    {
      text: "Akik's team doesn't just film — they think. They reworked my entire positioning and I stopped sounding like every other realtor.",
      author: "Zara Bush",
      role: "Realtor, Westboro",
    },
    {
      text: "40% conversion increase in the first two months. I've never had a marketing investment pay back this fast.",
      author: "Elsie Roy",
      role: "Insurance Advisor",
    },
    {
      text: "I hated being on camera. They made it easy, the edits are cinematic, and now clients tell me they 'feel like they already know me' on the first call.",
      author: "Ashwin Santiago",
      role: "Family Lawyer",
    },
    {
      text: "One filming day. Ninety days of content. I got my weekends back AND doubled my inbound leads. Ridiculous.",
      author: "Kaden Scott",
      role: "Business Coach",
    },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <div className="mb-4 text-xs font-medium uppercase tracking-widest text-accent-deep">
            Client Stories
          </div>
          <h2 className="font-serif text-4xl text-primary-deep md:text-5xl">
            They stopped being invisible.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {quotes.map((q) => (
            <div
              key={q.author}
              className="rounded-3xl border border-border bg-white p-8"
            >
              <div className="mb-4 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="mb-6 text-lg leading-relaxed text-primary-deep">
                &ldquo;{q.text}&rdquo;
              </p>
              <div>
                <div className="font-medium text-primary-deep">{q.author}</div>
                <div className="text-sm text-muted-foreground">{q.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── PRICING ─────────────────────────── */

function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "$2,450",
      cadence: "/ quarter",
      tag: "Test the system",
      features: [
        "1 filming day per quarter",
        "30 edited short-form pieces",
        "Content calendar + scripts",
        "Basic platform optimization",
        "Monthly report",
      ],
      cta: "Start with Starter",
      featured: false,
    },
    {
      name: "Growth",
      price: "$4,950",
      cadence: "/ quarter",
      tag: "Most popular",
      features: [
        "1 filming day per quarter",
        "60 edited pieces (shorts + long)",
        "Full strategy + repositioning",
        "Landing page + lead magnet",
        "DM funnel build",
        "Bi-weekly strategy call",
        "Results guarantee",
      ],
      cta: "Book Growth Call",
      featured: true,
    },
    {
      name: "Authority",
      price: "Custom",
      cadence: "",
      tag: "For teams & firms",
      features: [
        "2 filming days per quarter",
        "90+ pieces across all platforms",
        "Dedicated strategist",
        "Full funnel + automation build",
        "Paid amplification layer",
        "Quarterly on-site workshop",
      ],
      cta: "Request Proposal",
      featured: false,
    },
  ];
  return (
    <section
      id="pricing"
      className="bg-gradient-to-b from-white to-primary-soft/30 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <div className="mb-4 text-xs font-medium uppercase tracking-widest text-accent-deep">
            Transparent Pricing
          </div>
          <h2 className="font-serif text-4xl text-primary-deep md:text-5xl">
            Pick your starting line.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            No hidden fees. No surprise invoices. Upgrade or pause any quarter.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-3xl p-8 ${
                t.featured
                  ? "bg-primary-deep text-white shadow-2xl shadow-primary-deep/20 ring-2 ring-accent lg:-my-4 lg:py-12"
                  : "bg-white ring-1 ring-border"
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-medium uppercase tracking-wider text-primary-deep">
                  {t.tag}
                </div>
              )}
              {!t.featured && (
                <div className="mb-2 text-xs font-medium uppercase tracking-wider text-accent-deep">
                  {t.tag}
                </div>
              )}
              <h3
                className={`font-serif text-3xl ${
                  t.featured ? "text-white" : "text-primary-deep"
                }`}
              >
                {t.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span
                  className={`font-serif text-5xl font-semibold ${
                    t.featured ? "text-white" : "text-primary-deep"
                  }`}
                >
                  {t.price}
                </span>
                <span
                  className={`text-sm ${
                    t.featured ? "text-white/60" : "text-muted-foreground"
                  }`}
                >
                  {t.cadence}
                </span>
              </div>
              <ul
                className={`mt-8 flex-1 space-y-3 border-t pt-8 ${
                  t.featured ? "border-white/10" : "border-border"
                }`}
              >
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check
                      className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                        t.featured ? "text-accent" : "text-primary"
                      }`}
                    />
                    <span
                      className={
                        t.featured ? "text-white/90" : "text-primary-deep"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href={BOOKING_URL}
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition ${
                  t.featured
                    ? "bg-accent text-primary-deep hover:bg-accent/90"
                    : "bg-primary-deep text-white hover:bg-primary"
                }`}
              >
                {t.cta} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">
          All plans include our{" "}
          <span className="font-medium text-primary-deep">
            60-day results guarantee
          </span>
          : if you don&apos;t see measurable pipeline lift, we film your next
          quarter free.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────── FAQ ─────────────────────────── */

function FAQ() {
  const items = [
    {
      q: "I hate being on camera. Will this still work?",
      a: "90% of our clients said the exact same thing on day one. Our filming day is built for people who hate being filmed — we coach, we laugh, we do 30 takes if needed. By lunch you forget the camera is there.",
    },
    {
      q: "How fast will I see results?",
      a: "Most clients see measurable pipeline lift (DMs, booked calls, leads) within 45–60 days of their first filming day. If you don't, we film the next quarter free — that's our guarantee in writing.",
    },
    {
      q: "What makes this different from a regular videographer?",
      a: "A videographer sells you footage. We sell you a conversion system. Strategy, positioning, scripts, production, funnels, and reporting — all integrated. The video is 20% of the work; the other 80% is what makes it actually grow your business.",
    },
    {
      q: "Do I need a following to start?",
      a: "No. In fact, most of our clients start with under 500 followers. We build the system that grows the audience — you don't need to bring one.",
    },
    {
      q: "Can I pause between quarters?",
      a: "Yes. Every engagement is quarterly, month-to-month invoicing. Pause, resume, or upgrade whenever it fits your business.",
    },
    {
      q: "Where do you film?",
      a: "Our Ottawa studio, your office, or anywhere in the National Capital Region. For Authority clients we travel anywhere in Canada.",
    },
  ];
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12 text-center">
          <div className="mb-4 text-xs font-medium uppercase tracking-widest text-accent-deep">
            Questions
          </div>
          <h2 className="font-serif text-4xl text-primary-deep md:text-5xl">
            You&apos;re probably wondering…
          </h2>
        </div>
        <div className="space-y-3">
          {items.map((it) => (
            <details
              key={it.q}
              className="group rounded-2xl border border-border bg-white p-6 transition open:shadow-md"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-medium text-primary-deep">
                {it.q}
                <ChevronRight className="h-5 w-5 flex-shrink-0 text-accent-deep transition-transform group-open:rotate-90" />
              </summary>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {it.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── FINAL CTA ─────────────────────────── */

function FinalCTA() {
  return (
    <section
      id="book"
      className="relative overflow-hidden bg-primary-deep py-24 text-white"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 50%, #d4a24c30 0%, transparent 50%), radial-gradient(circle at 70% 50%, #6b2fa540 0%, transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-accent">
          Spring 2026 — Only 6 Slots Left
        </div>
        <h2 className="font-serif text-5xl leading-tight md:text-6xl">
          Stop being Ottawa&apos;s{" "}
          <span className="text-accent">best-kept secret</span>.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
          Book a free 30-minute strategy call. We&apos;ll audit your current
          content, show you what&apos;s blocking growth, and hand you a plan —
          whether you hire us or not.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`mailto:${EMAIL}?subject=Free%20Strategy%20Call`}
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-medium text-primary-deep shadow-xl shadow-accent/20 transition hover:bg-accent/90"
          >
            Book Free Strategy Call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-medium text-white transition hover:bg-white/10"
          >
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
        </div>
        <p className="mt-6 text-sm text-white/50">
          No pitch. No pressure. You walk away with a plan either way.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────── FOOTER ─────────────────────────── */

function Footer() {
  return (
    <footer className="border-t border-border bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-deep">
                <Sparkles className="h-4 w-4 text-accent" />
              </div>
              <span className="font-serif text-lg font-semibold text-primary-deep">
                Content Elevation Lab
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Ottawa&apos;s content system for trust-based professionals. Built
              for conversion, not just clicks.
            </p>
          </div>
          <div>
            <div className="mb-4 text-xs font-medium uppercase tracking-wider text-primary-deep">
              Contact
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent-deep" />
                <a href={`tel:${PHONE_TEL}`} className="hover:text-primary-deep">
                  {PHONE}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent-deep" />
                <a href={`mailto:${EMAIL}`} className="hover:text-primary-deep">
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent-deep" />
                Ottawa, ON, Canada
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-4 text-xs font-medium uppercase tracking-wider text-primary-deep">
              Explore
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#framework" className="hover:text-primary-deep">
                  Framework
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-deep">
                  Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-primary-deep">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary-deep">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row">
          <div>
            © {new Date().getFullYear()} Content Elevation Lab. All rights
            reserved.
          </div>
          <div>Rebuilt for conversion by akik-aibud</div>
        </div>
      </div>
    </footer>
  );
}
