import Link from "next/link";
import { ArrowRight, Check, Target, Video, TrendingUp } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "Services & Pricing — Content Elevation Lab",
  description:
    "Strategy, scripts, filming, editing, and conversion-ready CTAs. Four packages built for Ottawa's trust-based professionals.",
};

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

const framework = [
  {
    icon: Target,
    num: "01",
    title: "Strategic Positioning",
    desc: "We define your authority angle, content pillars, and messaging structure so your content feels intentional — not random.",
  },
  {
    icon: Video,
    num: "02",
    title: "Batch Production",
    desc: "One focused filming session — studio or on-location — creates an entire seasonal content system.",
  },
  {
    icon: TrendingUp,
    num: "03",
    title: "Conversion Engineering",
    desc: "Every piece of content is designed around a measurable action. This is where attention becomes revenue.",
  },
];

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

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageHero
          eyebrow="Services & Pricing"
          title={
            <>
              Everything you need.
              <br />
              <span className="text-muted-foreground">
                Nothing you don&apos;t.
              </span>
            </>
          }
          subtitle="Strategy, scripts, filming, editing, and conversion-ready CTAs — delivered through four packages built for Ottawa's trust-based professionals."
        />

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12 text-center">
              <div className="mb-4 text-xs font-medium uppercase tracking-widest text-accent-deep">
                What We Do
              </div>
              <h2 className="font-serif text-4xl text-primary-deep md:text-5xl">
                Six services. One integrated system.
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

        <section className="bg-primary-deep py-24 text-white">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-16 text-center">
              <div className="mb-4 text-xs font-medium uppercase tracking-widest text-accent">
                The CEL 3-Step Framework
              </div>
              <h2 className="font-serif text-4xl md:text-5xl">
                How every engagement runs.
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {framework.map((s) => (
                <div
                  key={s.num}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:border-accent/50"
                >
                  <div className="absolute -right-4 -top-4 font-serif text-8xl font-bold text-white/5">
                    {s.num}
                  </div>
                  <div className="relative">
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                      <s.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-3 font-serif text-2xl text-white">
                      {s.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/70">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-white to-primary-soft/30 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-16 text-center">
              <div className="mb-4 text-xs font-medium uppercase tracking-widest text-accent-deep">
                Packages
              </div>
              <h2 className="font-serif text-4xl text-primary-deep md:text-5xl">
                Pick your starting line.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Every package starts with a discovery session to map your
                positioning, audience, and authority gaps.
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
                  <Link
                    href="/contact"
                    className={`mt-8 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-5 py-3.5 text-sm font-medium transition ${
                      t.featured
                        ? "bg-accent text-primary-deep hover:bg-accent/90"
                        : "bg-primary-deep text-white hover:bg-primary"
                    }`}
                  >
                    {t.cta}{" "}
                    <ArrowRight className="h-4 w-4 flex-shrink-0" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary-deep py-20 text-white">
          <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
            <h2 className="font-serif text-4xl md:text-5xl">
              Not sure which fits?
            </h2>
            <p className="mt-4 max-w-xl text-white/70">
              Book a consultation. We&apos;ll help you choose the package that
              matches your goals, budget, and timeline.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-medium text-primary-deep transition hover:bg-accent/90"
            >
              Book Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
