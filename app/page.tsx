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
        <Founders />
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
          <a href="#services" className="hover:text-primary-deep">Services</a>
          <a href="#framework" className="hover:text-primary-deep">Framework</a>
          <a href="#pricing" className="hover:text-primary-deep">Pricing</a>
          <a href="#about" className="hover:text-primary-deep">About</a>
        </nav>
        <a
          href={BOOKING_URL}
          className="inline-flex items-center gap-1.5 rounded-full bg-primary-deep px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-primary"
        >
          Book Consultation
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
            Business-first content systems in Ottawa
          </div>

          <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-primary-deep md:text-7xl">
            Be the name{" "}
            <span className="relative inline-block">
              <span className="relative z-10">everyone follows</span>
              <span className="absolute bottom-2 left-0 right-0 -z-0 h-3 bg-accent/40" />
            </span>
            .
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Strategy, scripts, filming, editing, and conversion-ready CTAs that
            turn attention into leads. Built for professionals who sell trust.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={BOOKING_URL}
              className="group inline-flex items-center gap-2 rounded-full bg-primary-deep px-7 py-4 text-base font-medium text-white shadow-lg shadow-primary-deep/20 transition hover:bg-primary"
            >
              Book Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-7 py-4 text-base font-medium text-primary-deep transition hover:border-primary hover:text-primary"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-accent-deep" />
              One filming day = one full season
            </div>
            <div className="flex items-center gap-1.5">
              <Target className="h-4 w-4 text-accent-deep" />
              Seasonal strategy, every video with a purpose
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-accent-deep" />
              Ottawa, ON
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-border pt-12 md:grid-cols-5">
          <RevenuePillar icon={Shield} label="Authority" />
          <RevenuePillar icon={TrendingUp} label="Visibility" />
          <RevenuePillar icon={Clock} label="Consistency" />
          <RevenuePillar icon={Star} label="Credibility" />
          <RevenuePillar icon={Target} label="Conversion" />
        </div>
        <p className="mt-6 text-center text-sm font-medium text-muted-foreground">
          If your revenue depends on these — we build your content system.
        </p>
      </div>
    </section>
  );
}

function RevenuePillar({
  icon: Icon,
  label,
}: {
  icon: typeof Shield;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div className="font-serif text-lg font-semibold text-primary-deep">
        {label}
      </div>
    </div>
  );
}

/* ─────────────────────────── LOGO STRIP ─────────────────────────── */

function LogoStrip() {
  const industries = [
    "Real Estate",
    "Insurance Advisors",
    "Legal Professionals",
    "Consultants & Coaches",
    "Local Business Owners",
  ];
  return (
    <section className="border-y border-border/60 bg-muted py-10">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Industries we commonly work with
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
    "Post when they have time",
    "Have no messaging consistency",
    "Feel uncomfortable on camera",
    "Spend too much time editing",
    "Don't have a clear conversion path",
    "Get views but no pipeline",
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-12 text-center">
          <div className="mb-4 text-xs font-medium uppercase tracking-widest text-accent-deep">
            The Problem
          </div>
          <h2 className="font-serif text-4xl text-primary-deep md:text-5xl">
            It isn&apos;t video.
            <br />
            <span className="text-muted-foreground">It&apos;s structure.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Some of the most talented people in Ottawa — realtors, advisors,
            clinic owners, lawyers, coaches — are exceptional face-to-face. But
            online, their value gets flattened into random posts and &ldquo;nice
            videos&rdquo; that don&apos;t convert. Not because they lack skills
            — because they lack a repeatable system.
          </p>
        </div>
        <div className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-primary-deep">
          Most professionals:
        </div>
        <ul className="grid gap-3 md:grid-cols-2">
          {pains.map((p) => (
            <li
              key={p}
              className="flex items-start gap-3 rounded-2xl border border-border bg-white p-5 text-primary-deep"
            >
              <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent-soft">
                <span className="text-accent-deep">✕</span>
              </div>
              {p}
            </li>
          ))}
        </ul>
        <p className="mt-10 text-center text-lg text-muted-foreground">
          We built a lab-style approach: test what fits{" "}
          <span className="italic">your</span> personality and market, engineer
          a strategy that feels natural, and create content that makes your
          expertise{" "}
          <span className="font-semibold text-primary-deep">
            impossible to miss
          </span>
          .
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
      title: "Strategic Positioning",
      desc: "We define your authority angle, content pillars, and messaging structure so your content feels intentional — not random.",
      outputs: ["Authority angle", "Content pillars", "Messaging structure"],
    },
    {
      icon: Video,
      num: "02",
      title: "Batch Production",
      desc: "One focused filming session — studio or on-location — creates an entire seasonal content system.",
      outputs: ["Studio or on-location", "Full seasonal batch", "Ready to publish"],
    },
    {
      icon: TrendingUp,
      num: "03",
      title: "Conversion Engineering",
      desc: "Every piece of content is designed around a measurable action: DM. Call. Booking. Lead magnet. This is where attention becomes revenue.",
      outputs: ["Measurable CTAs", "Funnel design", "Attention → revenue"],
    },
  ];
  return (
    <section id="framework" className="bg-primary-deep py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <div className="mb-4 text-xs font-medium uppercase tracking-widest text-accent">
            The CEL 3-Step Growth Framework
          </div>
          <h2 className="font-serif text-4xl md:text-5xl">
            Strategy before setup.
            <br />
            <span className="text-accent">Growth architecture, not just visuals.</span>
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
  const reasons = [
    {
      title: "Business mindset before camera setup",
      desc: "We understand the revenue goal before a single light gets turned on.",
    },
    {
      title: "Messaging clarity before shooting",
      desc: "Every script is built around a positioning angle, not a trend.",
    },
    {
      title: "Structured authority positioning",
      desc: "Your expertise becomes the brand — consistently, across every platform.",
    },
    {
      title: "Conversion-first design",
      desc: "Every video ends with a measurable next step, not a hope for likes.",
    },
    {
      title: "Seasonal scalability",
      desc: "One filming day produces a full season of content you can trust.",
    },
  ];
  return (
    <section className="bg-muted py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16 text-center">
          <div className="mb-4 text-xs font-medium uppercase tracking-widest text-accent-deep">
            Why Businesses Choose CEL
          </div>
          <h2 className="font-serif text-4xl text-primary-deep md:text-5xl">
            Most production companies focus on visuals.
            <br />
            <span className="text-muted-foreground">
              We focus on growth architecture.
            </span>
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="flex items-start gap-4 rounded-2xl bg-white p-6 ring-1 ring-border"
            >
              <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-soft">
                <Check className="h-4 w-4 text-primary" />
              </div>
              <div>
                <div className="font-serif text-lg font-semibold text-primary-deep">
                  {r.title}
                </div>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {r.desc}
                </p>
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
      title: "Content Strategy Coaching",
      desc: "Discovery sessions assess your positioning, audience, revenue model, authority gaps, and conversion pathways.",
    },
    {
      title: "Script Development",
      desc: "Personalized scripts built around your authority pillars, educational themes, and seasonal priorities.",
    },
    {
      title: "Video Production",
      desc: "Professional-grade filming, studio or on-location, engineered for authentic delivery and reusable content.",
    },
    {
      title: "Social Media Optimization",
      desc: "Platform-native delivery so every piece lands with the right audience at the right moment.",
    },
    {
      title: "Conversion Engineering",
      desc: "Every video ends with a measurable action — DM, call, booking, or lead magnet.",
    },
    {
      title: "Seasonal Strategy Updates",
      desc: "A personalized content roadmap with clear positioning and measurable direction, refreshed each season.",
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
      text: "This platform has completely transformed how we manage our marketing campaigns. The ease of use and powerful features have made a significant impact on our ROI.",
      author: "Zara Bush",
      role: "Marketing Director",
    },
    {
      text: "This platform has revolutionized our business operations. The seamless integration and powerful features have helped us scale our marketing efforts efficiently while maintaining excellent customer relationships.",
      author: "Elsie Roy",
      role: "Entrepreneur",
    },
    {
      text: "The automation capabilities are incredible. We've saved countless hours and improved our customer engagement significantly.",
      author: "Ashwin Santiago",
      role: "CEO & Founder",
    },
    {
      text: "The analytics and reporting features give us insights we never had before. Our conversion rates have improved by 40%.",
      author: "Kaden Scott",
      role: "Sales Manager",
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

/* ─────────────────────────── FOUNDERS ─────────────────────────── */

function Founders() {
  const founders = [
    {
      name: "Sina Aminnia",
      role: "Co-Founder",
      bio: "Brand strategist and ICF-trained coach with 8+ years in audience development. Built social platforms reaching 380,000 followers. Background in mechanical engineering.",
      initials: "SA",
    },
    {
      name: "Soroush Saravani",
      role: "Co-Founder & Strategy Lead",
      bio: "Business growth strategist and ICF-trained coach specializing in authority-building for service-based businesses.",
      initials: "SS",
    },
  ];
  return (
    <section id="about" className="bg-muted py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center">
          <div className="mb-4 text-xs font-medium uppercase tracking-widest text-accent-deep">
            Meet the Lab
          </div>
          <h2 className="font-serif text-4xl text-primary-deep md:text-5xl">
            Strategy-first.
            <br />
            <span className="text-muted-foreground">
              Professional-grade production.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            An Ottawa-based content strategy and production studio. We help
            high-quality professionals become recognized names by building
            trust through clarity, consistency, and strategy.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {founders.map((f) => (
            <div
              key={f.name}
              className="flex flex-col rounded-3xl bg-white p-8 ring-1 ring-border"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-deep font-serif text-xl font-semibold text-accent">
                  {f.initials}
                </div>
                <div>
                  <div className="font-serif text-2xl text-primary-deep">
                    {f.name}
                  </div>
                  <div className="text-sm font-medium text-accent-deep">
                    {f.role}
                  </div>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {f.bio}
              </p>
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
      name: "Showcase",
      price: "$1,490",
      cadence: "one-time",
      tag: "Start here",
      pitch: "Build your first professional presence online.",
      features: [
        "2-hour discovery & coaching session",
        "2-hour content strategy session",
        "90-minute training",
        "4 hours filming with operator",
        "6 scripts",
        "6 edited videos with cover & captions",
        "8 branded photos",
      ],
      cta: "Book Showcase",
      featured: false,
    },
    {
      name: "Consistency",
      price: "$799",
      cadence: "/ month",
      tag: "Stay active",
      pitch: "Stay active online without the overwhelm.",
      features: [
        "Initial 2-hour discovery & strategy",
        "90-minute training",
        "4 scripts monthly",
        "5 filming hours every 2 months",
        "4 edited videos monthly",
        "8 branded photos",
        "Seasonal 90-min strategy meetings",
      ],
      cta: "Start Consistency",
      featured: false,
    },
    {
      name: "Authority",
      price: "$1,159",
      cadence: "/ month",
      tag: "Most popular",
      pitch: "Position yourself as a trusted expert.",
      features: [
        "Initial 2-hour discovery & strategy",
        "90-minute training",
        "6 scripts monthly",
        "4 carousel posts monthly",
        "5 filming hours monthly",
        "6 edited videos monthly",
        "15 branded photos",
        "Monthly 90-min strategy meetings",
      ],
      cta: "Become Authority",
      featured: true,
    },
    {
      name: "Influence",
      price: "$1,499",
      cadence: "/ month",
      tag: "Growth engine",
      pitch: "Turn your social media into a growth engine.",
      features: [
        "Initial 2-hour discovery & strategy",
        "90-minute training",
        "8 scripts monthly",
        "6 carousel posts monthly",
        "5 filming hours monthly",
        "8 edited videos monthly",
        "20 branded photos",
        "Biweekly 90-min meetings",
        "1-hour live strategy training",
        "Seasonal sales funnel analysis",
      ],
      cta: "Unlock Influence",
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-3xl p-7 ${
                t.featured
                  ? "bg-primary-deep text-white shadow-2xl shadow-primary-deep/20 ring-2 ring-accent"
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
                className={`font-serif text-2xl ${
                  t.featured ? "text-white" : "text-primary-deep"
                }`}
              >
                {t.name}
              </h3>
              <p
                className={`mt-2 text-sm ${
                  t.featured ? "text-white/70" : "text-muted-foreground"
                }`}
              >
                {t.pitch}
              </p>
              <div className="mt-4 flex items-baseline gap-1">
                <span
                  className={`font-serif text-4xl font-semibold ${
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
                className={`mt-8 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-5 py-3.5 text-sm font-medium transition ${
                  t.featured
                    ? "bg-accent text-primary-deep hover:bg-accent/90"
                    : "bg-primary-deep text-white hover:bg-primary"
                }`}
              >
                {t.cta} <ArrowRight className="h-4 w-4 flex-shrink-0" />
              </a>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Every package starts with a discovery session to map your
          positioning, audience, and authority gaps — so the content we build
          fits your business, not a template.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────── FAQ ─────────────────────────── */

function FAQ() {
  const items = [
    {
      q: "I feel uncomfortable on camera. Will this still work?",
      a: "Yes. Our discovery and coaching sessions are designed to help you find a delivery style that feels natural. We coach before we shoot — most clients tell us the filming day felt easier than they expected.",
    },
    {
      q: "What makes this different from hiring a regular videographer?",
      a: "A videographer sells you footage. We build a system: strategic positioning, content pillars, scripts, batch production, and conversion engineering — so every video has a measurable job to do.",
    },
    {
      q: "How often do we film?",
      a: "It depends on the package. Showcase is a one-time 4-hour filming day. Consistency films every two months. Authority and Influence run on monthly cadences. One focused session produces a full batch.",
    },
    {
      q: "Do I need a following to start?",
      a: "No. We build the system that grows the audience. Most of our clients start small — strategy and consistency do the heavy lifting.",
    },
    {
      q: "What industries do you usually work with?",
      a: "Real estate professionals, insurance advisors, legal professionals, consultants and coaches, and local business owners. Anyone whose revenue depends on trust and authority.",
    },
    {
      q: "Where do you film?",
      a: "In our Ottawa studio or on-location anywhere in the National Capital Region, depending on what fits your brand.",
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
      <div className="relative mx-auto max-w-4xl px-6">
        <div className="text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-accent">
            Get in touch
          </div>
          <h2 className="font-serif text-5xl leading-tight md:text-6xl">
            Ready to turn your content
            <br />
            into a{" "}
            <span className="text-accent">growth system?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
            CEL&apos;s experts are ready to respond with precision and care.
            Send us a message and we&apos;ll get back to you within 24–48
            hours.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <ContactCard
            icon={Phone}
            label="Call"
            value={PHONE}
            href={`tel:${PHONE_TEL}`}
          />
          <ContactCard
            icon={Mail}
            label="Email"
            value={EMAIL}
            href={`mailto:${EMAIL}?subject=Book%20Consultation`}
          />
          <ContactCard
            icon={MapPin}
            label="Visit"
            value="Ottawa, ON"
          />
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`mailto:${EMAIL}?subject=Book%20Consultation`}
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-medium text-primary-deep shadow-xl shadow-accent/20 transition hover:bg-accent/90"
          >
            Book Consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-medium text-white transition hover:bg-white/10"
          >
            Call {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-accent/40 hover:bg-white/[0.08]">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent/15">
        <Icon className="h-5 w-5 text-accent" />
      </div>
      <div>
        <div className="text-xs font-medium uppercase tracking-wider text-white/50">
          {label}
        </div>
        <div className="mt-1 font-medium text-white">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
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
              Engineered solutions to make you the name everyone follows.
              Business-first content systems in Ottawa.
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
                <a href="#about" className="hover:text-primary-deep">
                  About
                </a>
              </li>
              <li>
                <a href="#book" className="hover:text-primary-deep">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row">
          <div>
            © {new Date().getFullYear()} Content Elevation Lab. All rights reserved.
          </div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-primary-deep">Privacy</a>
            <a href="#" className="hover:text-primary-deep">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
