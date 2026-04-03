import Link from "next/link";

const products = [
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
    title: "Flush Mount Vent Covers",
    text: "Matching vents made from the same flooring material for a more complete final look.",
    href: "/vent-covers",
  },
];

const trustPoints = [
  "Typical turnaround is 1–4 business days depending on production load.",
  "Built for flooring stores, installers, and wood-flooring sellers.",
  "Exact-match accessories made from customer-provided flooring material.",
  "5+ years of experience in this specialty before launching in Virginia.",
];

const buyerTypes = [
  "Flooring stores",
  "Engineered wood flooring sellers",
  "Flooring installers",
  "Contractors and builders handling wood flooring projects",
];

const reasons = [
  {
    title: "Exact material match",
    text: "We manufacture from the flooring material provided for the project rather than relying on a guess-heavy stain match.",
  },
  {
    title: "Fast turnaround",
    text: "Typical turnaround is 1–4 business days depending on production load, which helps projects keep moving.",
  },
  {
    title: "Cleaner finished result",
    text: "The goal is a finished look that fits the actual floor instead of looking like an afterthought.",
  },
  {
    title: "Built for repeat use",
    text: "For flooring professionals, this solves a recurring finishing problem more reliably across multiple jobs.",
  },
];

const steps = [
  "Send project details or contact us.",
  "Provide the flooring material.",
  "We fabricate the matching accessory.",
  "You receive a cleaner, more complete finishing solution.",
];

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
                We make matching wood flooring accessories from your customer&apos;s flooring material so your installs finish cleaner,
                stain-match headaches go down, and customers get a result that actually looks right.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/request-a-quote" className="cta-primary">
                Request a Quote
              </Link>
              <Link href="/for-flooring-stores" className="cta-secondary">
                Become a Dealer
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-stone-100 p-8">
            <div className="space-y-6">
              <div>
                <p className="eyebrow">Trust bar</p>
                <h2 className="mt-2 text-2xl font-semibold text-stone-950">
                  Built to solve a finishing problem that shows up again and again.
                </h2>
              </div>
              <ul className="space-y-3 text-sm leading-6 text-stone-700">
                {trustPoints.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
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
            If stair nosings, treads, or vent covers do not match the installed floor properly, the result looks off,
            the customer notices, and the flooring store or installer gets blamed.
          </p>
          <p className="text-lg leading-8 text-stone-600">
            Many teams either try to stain-match in-house, use generic accessory options that do not really fit,
            or scramble late in the project when the mismatch becomes obvious.
          </p>
        </div>
      </section>

      <section className="section-shell py-8">
        <div className="max-w-3xl space-y-4 pb-8">
          <p className="eyebrow">The solution</p>
          <h2 className="text-3xl font-semibold tracking-tight text-stone-950">
            We help flooring professionals finish the job properly.
          </h2>
          <p className="text-lg leading-8 text-stone-600">
            Custom Stair House makes exact-match accessories from customer-provided flooring material so the finished job looks cleaner and the handoff feels stronger.
          </p>
        </div>
        <div className="card-grid">
          {products.map((item) => (
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
              We work best with flooring stores, engineered wood flooring sellers, installers, and strong-fit trade buyers who need matching accessories done quickly and consistently.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {buyerTypes.map((item) => (
              <div key={item} className="rounded-2xl border border-stone-200 bg-stone-50 p-4 text-sm font-medium text-stone-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-8">
        <div className="max-w-3xl space-y-4 pb-8">
          <p className="eyebrow">Why customers use us</p>
          <h2 className="text-3xl font-semibold tracking-tight text-stone-950">
            Why flooring stores and installers choose Custom Stair House.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {reasons.map((item) => (
            <div key={item.title} className="card">
              <h3 className="text-xl font-semibold text-stone-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-stone-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div className="space-y-4">
            <p className="eyebrow">How it works</p>
            <h2 className="text-3xl font-semibold tracking-tight text-stone-950">Simple process.</h2>
            <p className="text-lg leading-8 text-stone-600">
              The process should feel straightforward, especially for repeat trade buyers.
            </p>
          </div>
          <ol className="grid gap-4">
            {steps.map((step, index) => (
              <li key={step} className="rounded-2xl border border-stone-200 bg-white p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-stone-900 text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <p className="pt-1 text-base leading-7 text-stone-700">{step}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-shell py-8">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-8">
          <div className="max-w-3xl space-y-4">
            <p className="eyebrow">Proof and credibility</p>
            <h2 className="text-3xl font-semibold tracking-tight text-stone-950">
              Built by someone who knows the trade.
            </h2>
            <p className="text-lg leading-8 text-stone-600">
              Today, the strongest immediate trust signals are trade experience, local service focus, and physical samples for stores and trade partners.
            </p>
            <p className="text-base leading-7 text-stone-600">
              Over time, this section should be upgraded with installed project photos, dealer testimonials, before/after examples, and product close-ups in finished homes.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell pb-20 pt-16">
        <div className="rounded-[2rem] bg-stone-900 px-8 py-12 text-white">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div className="space-y-3">
              <p className="eyebrow text-stone-300">Dealer CTA</p>
              <h2 className="text-3xl font-semibold tracking-tight">
                Want a reliable matching-accessory partner?
              </h2>
              <p className="max-w-2xl text-base leading-7 text-stone-300">
                If you run a flooring store, sell engineered wood flooring, or handle regular wood-floor installs,
                we&apos;d love to show you samples, discuss pricing, and make repeat ordering easier.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row md:flex-col">
              <Link href="/request-a-quote" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-950 transition hover:bg-stone-200">
                Request Pricing
              </Link>
              <Link href="/for-flooring-stores" className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Ask About Dealer Fit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
