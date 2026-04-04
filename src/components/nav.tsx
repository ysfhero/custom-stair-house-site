"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

const products = [
  { href: "/stair-treads", label: "Stair Treads" },
  { href: "/stair-nosings", label: "Stair Nosings" },
  { href: "/vent-covers", label: "Flush Mount Vent Covers" },
];

const mainLinks = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/for-flooring-stores", label: "For Flooring Stores" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-4">

        {/* Logo */}
        <Link href="/" className="shrink-0" aria-label="Custom Stair House home">
          <Image
            src="/custom-stair-house-logo.png"
            alt="Custom Stair House"
            width={220}
            height={73}
            className="h-auto w-[160px] sm:w-[200px]"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">

          {/* Products dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setProductsOpen((o) => !o)}
              aria-expanded={productsOpen}
              aria-haspopup="true"
              className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-stone-700 transition hover:bg-stone-100 hover:text-stone-950"
            >
              Products
              <svg
                className={`h-4 w-4 transition-transform ${productsOpen ? "rotate-180" : ""}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {productsOpen && (
              <div className="absolute left-0 top-full mt-1 w-52 rounded-2xl border border-stone-200 bg-white py-2 shadow-lg">
                {products.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    className="block px-4 py-2.5 text-sm text-stone-700 transition hover:bg-stone-50 hover:text-stone-950"
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-stone-700 transition hover:bg-stone-100 hover:text-stone-950"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/request-a-quote"
          className="hidden items-center justify-center rounded-full bg-stone-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-stone-700 md:inline-flex"
        >
          Request a Quote
        </Link>

        {/* Mobile: CTA + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/request-a-quote"
            className="inline-flex items-center justify-center rounded-full bg-stone-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-stone-700"
          >
            Quote
          </Link>
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
            className="rounded-lg p-2 text-stone-700 transition hover:bg-stone-100"
          >
            {mobileOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-stone-200 bg-white px-6 pb-6 pt-4 md:hidden">
          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-stone-400">Products</p>
          <div className="mb-4 space-y-1">
            {products.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-stone-700 transition hover:bg-stone-100"
              >
                {p.label}
              </Link>
            ))}
          </div>
          <div className="space-y-1">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-stone-700 transition hover:bg-stone-100"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
