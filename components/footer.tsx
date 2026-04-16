import Link from "next/link";
import { Phone, Mail, MapPin, Sparkles } from "lucide-react";
import { SITE } from "./site-config";
import { FooterNewsletter } from "./footer-newsletter";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      {/* Newsletter band */}
      <div className="border-b border-border bg-primary-deep">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <FooterNewsletter />
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-deep">
                <Sparkles className="h-4 w-4 text-accent" />
              </div>
              <span className="font-serif text-lg font-semibold text-primary-deep">
                {SITE.name}
              </span>
            </Link>
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
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="hover:text-primary-deep"
                >
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent-deep" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:text-primary-deep"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent-deep" />
                {SITE.location}
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-4 text-xs font-medium uppercase tracking-wider text-primary-deep">
              Explore
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/services" className="hover:text-primary-deep">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-deep">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-deep">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/#framework" className="hover:text-primary-deep">
                  Framework
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row">
          <div>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </div>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-primary-deep">
              Privacy
            </Link>
            <Link href="#" className="hover:text-primary-deep">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
