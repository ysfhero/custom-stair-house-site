import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navItems = [
  { href: "/products", label: "Products" },
  { href: "/for-flooring-stores", label: "For Flooring Stores" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

const footerLinks = [
  { href: "/stair-treads", label: "Stair Treads" },
  { href: "/stair-nosings", label: "Stair Nosings" },
  { href: "/vent-covers", label: "Vent Covers" },
  { href: "/for-flooring-stores", label: "For Flooring Stores" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/request-a-quote", label: "Request a Quote" },
  { href: "/service-area", label: "Service Area" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export const metadata: Metadata = {
  metadataBase: new URL("https://customstairhouse.com"),
  title: {
    default: "Custom Stair House | Exact-Match Stair Treads, Nosings, and Vent Covers",
    template: "%s | Custom Stair House",
  },
  description:
    "Exact-match stair treads, stair nosings, and vent covers made from your customer's flooring material for cleaner installs and better finished results.",
  openGraph: {
    title: "Custom Stair House",
    description:
      "Exact-match stair treads, stair nosings, and vent covers for flooring stores, installers, and wood-flooring professionals.",
    url: "https://customstairhouse.com",
    siteName: "Custom Stair House",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-stone-50 text-stone-900">
        <div className="flex min-h-screen flex-col">
          <header className="border-b border-stone-200 bg-white/95 backdrop-blur">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-4">
              <Link href="/" className="text-lg font-semibold tracking-tight text-stone-950">
                Custom Stair House
              </Link>
              <nav className="hidden items-center gap-6 md:flex">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-stone-700 transition hover:text-stone-950"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <Link
                href="/request-a-quote"
                className="inline-flex items-center justify-center rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
              >
                Request a Quote
              </Link>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t border-stone-200 bg-white">
            <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-stone-950">Custom Stair House</h2>
                <p className="max-w-md text-sm leading-6 text-stone-600">
                  Exact-match stair treads, stair nosings, and vent covers for flooring stores,
                  installers, and wood-flooring professionals.
                </p>
                <p className="text-sm text-stone-600">
                  Serving Northern Virginia and the Washington area.
                </p>
              </div>

              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">
                  Navigation
                </h3>
                <ul className="space-y-3">
                  {footerLinks.slice(0, 5).map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="text-sm text-stone-700 hover:text-stone-950">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">
                  More
                </h3>
                <ul className="space-y-3">
                  {footerLinks.slice(5).map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="text-sm text-stone-700 hover:text-stone-950">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
