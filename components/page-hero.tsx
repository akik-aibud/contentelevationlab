export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-soft/60 via-white to-white pt-20 pb-16">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, #d4a24c22 0%, transparent 40%), radial-gradient(circle at 80% 30%, #6b2fa522 0%, transparent 45%)",
        }}
      />
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-accent-deep">
          {eyebrow}
        </div>
        <h1 className="font-serif text-5xl leading-[1.05] tracking-tight text-primary-deep md:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
