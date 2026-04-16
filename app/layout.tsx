import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  title: "Content Elevation Lab — Be the Name Everyone Follows in Ottawa",
  description:
    "Ottawa's content system for trust-based professionals. One filming day → 90 days of content that converts. Real estate, legal, insurance, consultants.",
  openGraph: {
    title: "Content Elevation Lab — Be the Name Everyone Follows",
    description:
      "Turn face-to-face credibility into digital authority. Ottawa-based content system built for conversion.",
    type: "website",
    locale: "en_CA",
  },
  metadataBase: new URL("https://contentelevationlab.ca"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
