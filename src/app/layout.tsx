import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { Nav } from "@/components/nav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    images: [
      {
        url: "/custom-stair-house-logo.png",
        width: 1134,
        height: 378,
        alt: "Custom Stair House logo",
      },
    ],
  },
  icons: {
    icon: "/custom-stair-house-logo.png",
    shortcut: "/custom-stair-house-logo.png",
    apple: "/custom-stair-house-logo.png",
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
          <Nav />
          <main className="flex-1">{children}</main>

          <footer className="border-t border-stone-200 bg-white">
            <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
              <div className="space-y-4">
                <Link href="/" className="inline-flex items-center" aria-label="Custom Stair House home">
                  <Image
                    src="/custom-stair-house-logo.png"
                    alt="Custom Stair House"
                    width={220}
                    height={73}
                    className="h-auto w-[170px] sm:w-[220px]"
                  />
                </Link>
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

              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">
                  Contact
                </h3>
                <ul className="space-y-4 text-sm leading-6 text-stone-600">
                  <li>
                    <p className="font-medium text-stone-800">Call or Text</p>
                    <a href="tel:+15712086437" className="hover:text-stone-950">(571) 208-6437</a>
                  </li>
                  <li>
                    <p className="font-medium text-stone-800">Email</p>
                    <a href="mailto:sales@customstairhouse.com" className="hover:text-stone-950">sales@customstairhouse.com</a>
                  </li>
                  <li>
                    <p className="font-medium text-stone-800">Drop-Off Location</p>
                    <a
                      href="https://maps.google.com/?q=45700+Woodland+Rd+%23160+Sterling+VA+20166"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-stone-950"
                    >
                      45700 Woodland Rd #160<br />Sterling, VA 20166
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
