import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { NAV_LINKS, SITE } from "./site-config";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-deep">
            <Sparkles className="h-4 w-4 text-accent" />
          </div>
          <span className="font-serif text-lg font-semibold text-primary-deep">
            {SITE.name}
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-primary-deep"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href={SITE.booking}
          className="inline-flex items-center gap-1.5 rounded-full bg-primary-deep px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-primary"
        >
          Book Consultation
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </header>
  );
}
