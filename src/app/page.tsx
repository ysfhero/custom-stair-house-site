import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="border-b border-stone-200 bg-white">
        <div className="section-shell grid gap-14 py-20 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="eyebrow">Exact-match wood flooring accessories</p>
              <h1 className="text-5xl font-semibold tracking-tight text-stone-950 md:text-6xl">
                Exact-match stair treads, stair nosings, and vent covers for flooring stores.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-stone-600">
                We make matching wood flooring accessories from your customer&apos;s flooring material so
                installs finish cleaner, stain-match headaches go down, and the final result looks right.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/request-a-quote" className="cta-primary">
                Request a Quote
              </Link>
              <Link href="/for-flooring-stores" className="cta-secondary">
                For Flooring Stores
              </Link>
            </div>

            <div className="grid gap-4 text-sm text-stone-600 sm:grid-cols-2">
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                Typical turnaround: 1–4 business days depending on production load.
              </div>
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                Built for flooring stores, installers, and wood-flooring professionals.
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-stone-100 p-8">
            <div className="space-y-6">
              <div>
                <p className="eyebrow">Core offer</p>
                <h2 className="mt-2 text-2xl font-semibold text-stone-950">Cleaner finished jobs without the mismatch headache.</h2>
              </div>
              <ul className="space-y-3 text-sm leading-6 text-stone-700">
                <li>• Custom stair treads</li>
                <li>• Stair nosings made from customer-provided flooring material</li>
                <li>• Flush mount vent covers and matching accessories</li>
                <li>• Dealer and trade-friendly ordering flow</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="max-w-3xl space-y-4">
          <p className="eyebrow">The problem</p>
          <h2 className="text-3xl font-semibold tracking-tight text-stone-950">
            Bad accessory matching creates problems downstream.
          </h2>
          <p className="text-lg leading-8 text-stone-600">
            If stair nosings, treads, or vent covers do not match the floor properly, the end result looks off,
            customers notice, and the flooring store or installer gets blamed.
          </p>
        </div>
      </section>

      <section className="section-shell py-8">
        <div className="card-grid">
          {[
            {
              title: "Custom Stair Treads",
              text: "High-value exact-match stair components for projects where finish quality matters.",
              href: "/stair-treads",
            },
            {
              title: "Stair Nosings",
              text: "A clean solution for one of the most common wood-flooring finishing problems.",
              href: "/stair-nosings",
            },
            {
              title: "Vent Covers",
              text: "Matching vents made from the same flooring material for a more complete final look.",
              href: "/vent-covers",
            },
          ].map((item) => (
            <div key={item.href} className="card flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-stone-950">{item.title}</h3>
              <p className="flex-1 text-sm leading-6 text-stone-600">{item.text}</p>
              <Link href={item.href} className="text-sm font-semibold text-stone-900">
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="grid gap-8 rounded-[2rem] border border-stone-200 bg-white p-8 md:grid-cols-2">
          <div className="space-y-4">
            <p className="eyebrow">Who it&apos;s for</p>
            <h2 className="text-3xl font-semibold tracking-tight text-stone-950">
              Built for repeat flooring professionals.
            </h2>
            <p className="text-lg leading-8 text-stone-600">
              The site and offer are built first for flooring stores, wood-flooring sellers, installers, and strong-fit trade buyers.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Flooring stores",
              "Wood-flooring sellers",
              "Installers and contractors",
              "Builders handling wood flooring projects",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm font-medium text-stone-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pb-20">
        <div className="rounded-[2rem] bg-stone-900 px-8 py-12 text-white">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div className="space-y-3">
              <p className="eyebrow text-stone-300">Next step</p>
              <h2 className="text-3xl font-semibold tracking-tight">
                Need a reliable exact-match accessory partner?
              </h2>
              <p className="max-w-2xl text-base leading-7 text-stone-300">
                If you run a flooring store, sell engineered wood flooring, or handle regular wood-floor installs,
                we&apos;d love to show you samples and discuss pricing.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row md:flex-col">
              <Link href="/request-a-quote" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-950 transition hover:bg-stone-200">
                Request a Quote
              </Link>
              <Link href="/how-it-works" className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
