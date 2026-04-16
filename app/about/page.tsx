import Link from "next/link";
import { ArrowRight, Target, Video, TrendingUp, Sparkles } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "About — Content Elevation Lab",
  description:
    "Ottawa-based content strategy and production studio building trust through clarity, consistency, and strategy.",
};

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

const values = [
  {
    icon: Target,
    title: "Strategy first",
    desc: "Every engagement starts with positioning, not production. We understand the revenue goal before a single light is turned on.",
  },
  {
    icon: Sparkles,
    title: "Authentic delivery",
    desc: "We coach before we film. Our process helps professionals sound like themselves on camera — not like a scripted ad.",
  },
  {
    icon: Video,
    title: "Professional production",
    desc: "Studio-grade filming and editing in Ottawa. Every piece is built to look and feel worthy of your expertise.",
  },
  {
    icon: TrendingUp,
    title: "Conversion-focused",
    desc: "Growth architecture, not just visuals. Every video ends with a measurable next step tied to your business goals.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageHero
          eyebrow="About the Lab"
          title={
            <>
              Strategy-first.
              <br />
              <span className="text-muted-foreground">
                Professional-grade production.
              </span>
            </>
          }
          subtitle="Content Elevation Lab is an Ottawa-based content strategy and production studio. We help high-quality professionals become recognized names by building trust through clarity, consistency, and strategy."
        />

        <section className="py-20">
          <div className="mx-auto max-w-4xl px-6">
            <div className="rounded-3xl bg-primary-soft/40 p-10 md:p-14">
              <div className="mb-4 text-xs font-medium uppercase tracking-widest text-accent-deep">
                Our Mission
              </div>
              <h2 className="font-serif text-3xl text-primary-deep md:text-4xl">
                Translate real-world credibility into digital trust.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Some of the most talented people in Ottawa — realtors,
                advisors, clinic owners, lawyers, coaches — are exceptional
                face-to-face. But online, their value gets flattened into
                random posts and nice videos that don&apos;t convert. Not
                because they lack skills, but because they lack a repeatable
                system.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                We built a lab-style approach: test what fits{" "}
                <span className="italic">your</span> personality and market,
                engineer a strategy that feels natural, and create content
                that makes your expertise impossible to miss.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-muted py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mb-12 text-center">
              <div className="mb-4 text-xs font-medium uppercase tracking-widest text-accent-deep">
                Meet the Founders
              </div>
              <h2 className="font-serif text-4xl text-primary-deep md:text-5xl">
                Built by strategists.
                <br />
                <span className="text-muted-foreground">Run like a lab.</span>
              </h2>
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

        <section className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-16 text-center">
              <div className="mb-4 text-xs font-medium uppercase tracking-widest text-accent-deep">
                What We Stand For
              </div>
              <h2 className="font-serif text-4xl text-primary-deep md:text-5xl">
                Four principles behind every engagement.
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="flex gap-5 rounded-2xl border border-border bg-white p-7"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-primary-deep">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary-deep py-20 text-white">
          <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
            <h2 className="font-serif text-4xl md:text-5xl">
              Ready to work together?
            </h2>
            <p className="mt-4 max-w-xl text-white/70">
              Book a consultation and we&apos;ll show you what a seasonal
              content system could look like for your business.
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
