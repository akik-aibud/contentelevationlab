import Link from "next/link";
import { ArrowRight, Check, Star } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "About — Content Elevation Lab",
  description:
    "Ottawa-based content strategy and production studio. Strategy-first planning, content coaching, and professional-grade production for trust-based professionals.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageHero
          eyebrow="About Us"
          title={
            <>
              We don&apos;t just make videos.
              <br />
              <span className="text-muted-foreground">
                We build brand systems.
              </span>
            </>
          }
          subtitle="Content Elevation Lab is an Ottawa-based content strategy + production studio built for professionals who are already great in real life — but whose expertise doesn't fully show online yet."
        />

        {/* ── WHAT WE DO ── */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              We build a personal brand system that helps people recognize you,
              trust you, and choose you — before they ever meet you.
            </p>
            <p className="mt-6 text-lg font-medium text-primary-deep">
              Our work blends three things most teams don&apos;t combine in one
              place:
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Strategy-first content planning",
                  desc: "What to say, how to say it, and why it works.",
                },
                {
                  title: "Content coaching",
                  desc: "So you show up confidently and consistently as yourself.",
                },
                {
                  title: "High-quality production",
                  desc: "So your presence looks as professional as your service.",
                },
              ].map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl border border-border bg-white p-6"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-soft text-primary">
                    <Check className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-lg text-primary-deep">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OUR STORY ── */}
        <section className="bg-muted py-24">
          <div className="mx-auto max-w-4xl px-6">
            <div className="mb-4 text-xs font-medium uppercase tracking-widest text-accent-deep">
              Our Story
            </div>
            <h2 className="font-serif text-4xl text-primary-deep md:text-5xl">
              It started with a simple observation.
            </h2>
            <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Some of the most talented people in Ottawa — realtors, advisors,
                clinic owners, lawyers, coaches — are exceptional face-to-face.
                They build trust fast, explain clearly, and close confidently.
              </p>
              <p>
                But online? Their value often gets flattened into random posts,
                inconsistent content, or &ldquo;nice videos&rdquo; that
                don&apos;t convert. Not because they lack skills — because they
                lack a{" "}
                <span className="font-semibold text-primary-deep">
                  repeatable system
                </span>{" "}
                that translates real-world credibility into digital trust.
              </p>
              <p>
                So we built a lab-style approach: we test what fits{" "}
                <span className="italic">your</span> personality and market,
                engineer a strategy that feels natural, and create content that
                makes your expertise impossible to miss.
              </p>
            </div>
          </div>
        </section>

        {/* ── MISSION ── */}
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-6">
            <div className="mb-4 text-xs font-medium uppercase tracking-widest text-accent-deep">
              Our Mission
            </div>
            <h2 className="font-serif text-4xl text-primary-deep md:text-5xl">
              Help high-quality professionals become the name people recognize
              and follow.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Not by chasing trends, but by building trust through clarity,
              consistency, and strategy.
            </p>
            <div className="mt-10 space-y-4">
              {[
                "Turn years of experience into content that's easy to understand and hard to ignore",
                "Help you show up online the way you already show up in person: confident, helpful, and credible",
                "Create a system that drives real outcomes — DMs, calls, bookings, and long-term trust — not just views",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5"
                >
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary-soft">
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <p className="text-primary-deep">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 rounded-2xl bg-primary-soft/50 p-8">
              <p className="font-serif text-xl leading-relaxed text-primary-deep">
                Because the goal isn&apos;t &ldquo;more content.&rdquo;
                <br />
                The goal is a brand that works — every day, even when
                you&apos;re busy.
              </p>
            </div>
          </div>
        </section>

        {/* ── TEAM ── */}
        <section className="bg-primary-deep py-24 text-white">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mb-16 text-center">
              <div className="mb-4 text-xs font-medium uppercase tracking-widest text-accent">
                Our Team
              </div>
              <h2 className="font-serif text-4xl md:text-5xl">
                The people behind the lab.
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <FounderCard
                name="Sina Aminnia"
                role="Co-Founder"
                initials="SA"
                paragraphs={[
                  "Sina is a brand strategist, ICF-trained life and business coach, and serial digital growth builder with over eight years of hands-on experience in audience development and personal branding.",
                  "With a background in mechanical engineering and as the co-founder of Nika — one of the first child talent development institutes in Iran based on Multiple Intelligences theory — Sina has built and scaled multiple social media platforms from zero to 380,000 followers. He deeply understands how digital ecosystems work, how content drives authority, and how strategic positioning transforms visibility into business growth.",
                  "He believes social media is not about posting — it's about positioning. And when strategy meets authenticity, authority becomes inevitable.",
                ]}
              />
              <FounderCard
                name="Soroush Saravani"
                role="Co-Founder & Strategy Lead"
                initials="SS"
                paragraphs={[
                  "Soroush is a business growth strategist, ICF-trained coach, and marketing professional focused on helping service-based businesses build authority through structured content systems.",
                  "With experience in business development, brand positioning, and marketing strategy, he has supported entrepreneurs in clarifying their message, strengthening their presence, and implementing growth-focused systems. His coaching background allows him to lead strategic discovery sessions that identify real business needs before execution begins.",
                  "He believes content should not just look professional — it should position you as the trusted expert in your field.",
                ]}
              />
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-16 text-center">
              <div className="mb-4 text-xs font-medium uppercase tracking-widest text-accent-deep">
                Client Stories
              </div>
              <h2 className="font-serif text-4xl text-primary-deep md:text-5xl">
                What our clients say.
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  text: "This platform has completely transformed how we manage our marketing campaigns. The ease of use and powerful features have made a significant impact on our ROI.",
                  name: "Zara Bush",
                  role: "Marketing Director",
                },
                {
                  text: "This platform has revolutionized our business operations. The seamless integration and powerful features have helped us scale our marketing efforts efficiently while maintaining excellent customer relationships.",
                  name: "Elsie Roy",
                  role: "Entrepreneur",
                },
                {
                  text: "The automation capabilities are incredible. We've saved countless hours and improved our customer engagement significantly.",
                  name: "Ashwin Santiago",
                  role: "CEO & Founder",
                },
                {
                  text: "The analytics and reporting features give us insights we never had before. Our conversion rates have improved by 40%.",
                  name: "Kaden Scott",
                  role: "Sales Manager",
                },
              ].map((q) => (
                <div
                  key={q.name}
                  className="rounded-3xl border border-border bg-white p-8"
                >
                  <div className="mb-4 flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-accent text-accent"
                      />
                    ))}
                  </div>
                  <p className="mb-6 text-lg leading-relaxed text-primary-deep">
                    &ldquo;{q.text}&rdquo;
                  </p>
                  <div>
                    <div className="font-medium text-primary-deep">
                      {q.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {q.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-muted py-20">
          <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
            <h2 className="font-serif text-4xl text-primary-deep md:text-5xl">
              Ready to work together?
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Schedule a free consultation to discuss your content needs and
              discover how we can help your business thrive.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-deep px-7 py-4 text-base font-medium text-white transition hover:bg-primary"
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

function FounderCard({
  name,
  role,
  initials,
  paragraphs,
}: {
  name: string;
  role: string;
  initials: string;
  paragraphs: string[];
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/15 font-serif text-xl font-semibold text-accent">
          {initials}
        </div>
        <div>
          <div className="font-serif text-2xl text-white">{name}</div>
          <div className="text-sm font-medium text-accent">{role}</div>
        </div>
      </div>
      <div className="space-y-4">
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className={`text-sm leading-relaxed ${
              i === paragraphs.length - 1
                ? "italic text-accent/80"
                : "text-white/70"
            }`}
          >
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}
