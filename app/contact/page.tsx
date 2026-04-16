import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { SITE } from "@/components/site-config";

export const metadata = {
  title: "Contact — Content Elevation Lab",
  description:
    "Ready to turn your content into a growth system? Get in touch with CEL's team in Ottawa.",
};

const topics = [
  "Showcase Package",
  "Consistency Package",
  "Authority Package",
  "Influence Package",
  "Strategy consultation",
  "Something else",
];

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <PageHero
          eyebrow="Get in touch"
          title={
            <>
              Ready to turn your content
              <br />
              into a{" "}
              <span className="relative inline-block">
                <span className="relative z-10">growth system?</span>
                <span className="absolute bottom-2 left-0 right-0 -z-0 h-3 bg-accent/40" />
              </span>
            </>
          }
          subtitle="We make it easy to connect with our team. CEL's experts are ready to respond with precision and care."
        />

        <section className="pb-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-10 lg:grid-cols-5">
              <div className="lg:col-span-2">
                <div className="mb-4 text-xs font-medium uppercase tracking-widest text-accent-deep">
                  Contact details
                </div>
                <h2 className="font-serif text-3xl text-primary-deep">
                  Let&apos;s talk.
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Fill out the form and we&apos;ll get back to you within
                  24–48 hours. Prefer to talk first? Call or email anytime.
                </p>

                <div className="mt-8 space-y-4">
                  <ContactRow
                    icon={Phone}
                    label="Call"
                    value={SITE.phone}
                    href={`tel:${SITE.phoneTel}`}
                  />
                  <ContactRow
                    icon={Mail}
                    label="Email"
                    value={SITE.email}
                    href={`mailto:${SITE.email}`}
                  />
                  <ContactRow
                    icon={MapPin}
                    label="Visit"
                    value={SITE.location}
                  />
                  <ContactRow
                    icon={Clock}
                    label="Response time"
                    value="Within 24–48 hours"
                  />
                </div>
              </div>

              <form
                action={`mailto:${SITE.email}`}
                method="post"
                encType="text/plain"
                className="rounded-3xl border border-border bg-white p-8 shadow-sm lg:col-span-3"
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="First name" name="first_name" required />
                  <Field label="Last name" name="last_name" required />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    required
                  />
                  <Field label="Phone" name="phone" type="tel" />
                </div>

                <div className="mt-5">
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-primary-deep">
                    What can we help with?
                  </label>
                  <select
                    name="topic"
                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-primary-deep focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select a topic…
                    </option>
                    {topics.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mt-5">
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-primary-deep">
                    Tell us about your business
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="What you do, who you serve, and what you're trying to achieve with content…"
                    className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-primary-deep placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    required
                  />
                </div>

                <div className="mt-5 space-y-3 text-sm text-muted-foreground">
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="consent_updates"
                      className="mt-1 h-4 w-4 rounded border-border accent-primary"
                    />
                    <span>
                      I&apos;d like to receive non-promotional service updates
                      via email or text.
                    </span>
                  </label>
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="consent_marketing"
                      className="mt-1 h-4 w-4 rounded border-border accent-primary"
                    />
                    <span>
                      I&apos;d like to receive marketing and promotional
                      communications.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-deep px-7 py-4 text-base font-medium text-white transition hover:bg-primary"
                >
                  Send message
                </button>
                <p className="mt-4 text-center text-xs text-muted-foreground">
                  We respect your time. No spam, no pressure — just a real
                  reply from our team.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ContactRow({
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
  const content = (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5 transition hover:border-primary/40">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary-soft">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {label}
        </div>
        <div className="mt-1 font-medium text-primary-deep">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-xs font-medium uppercase tracking-wider text-primary-deep"
      >
        {label}
        {required && <span className="text-accent-deep"> *</span>}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        required={required}
        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-primary-deep placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
