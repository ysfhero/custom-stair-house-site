import Link from "next/link";

const products = [
  {
    title: "Stair Treads",
    text: "Cut from the project flooring. Matches the floor it's sitting on instead of looking like it came from a different job.",
    href: "/stair-treads",
  },
  {
    title: "Stair Nosings",
    text: "The edge detail that kills most installs. We make it from the actual floor so it looks like it belongs.",
    href: "/stair-nosings",
  },
  {
    title: "Flush Mount Vent Covers",
    text: "Same material, same finish. The vent disappears into the floor instead of interrupting it.",
    href: "/vent-covers",
  },
];

const testimonials = [
  {
    quote: "We've been sending stair nosing work to Custom Stair House for six months now. Turnaround is fast and the match is always right. Our customers stop noticing the stair — which is exactly what we want.",
    author: "Mark T.",
    role: "Owner, flooring store — Northern Virginia",
  },
  {
    quote: "I was skeptical at first, but the first order came back looking better than anything I'd sourced before. We now route all our custom stair work through them.",
    author: "James R.",
    role: "Flooring installer — Sterling, VA",
  },
];

const steps = [
  {
    title: "Tell us what you need",
    text: "Product type, measurements, timeline. A photo helps.",
  },
  {
    title: "Drop off the flooring material",
    text: "We build from the actual project floor. That's what makes the match work.",
  },
  {
    title: "Pick up the finished piece",
    text: "Typical turnaround: 1–4 business days. Keep the job moving.",
  },
];

export const metadata = {
  title: "Custom Stair House | Exact-Match Stair Treads, Nosings, and Vent Covers in Northern Virginia",
  description:
    "Custom Stair House makes exact-match stair treads, stair nosings, and vent covers from customer-provided flooring material for flooring stores, installers, and wood-flooring professionals in Northern Virginia.",
};

export default function HomePage() {
  return (
    <div className="page-shell">

      {/* HERO */}
      <section className="grid gap-12 rounded-[2.5rem] bg-white p-8 shadow-[0_24px_80px_rgba(28,25,23,0.08)] md:grid-cols-[1.2fr_0.8fr] md:p-12">
        <div className="space-y-6">
          <p className="eyebrow">Northern Virginia · Flooring stores &amp; installers</p>
          <h1 className="text-5xl font-semibold tracking-tight text-stone-950 md:text-6xl">
            Stair treads, nosings, and vent covers that actually match the floor.
          </h1>
          <p className="max-w-xl text-lg leading-8 text-stone-600">
            We fabricate them from the customer&apos;s own flooring material. No stain-match guesswork. No generic trim compromises. 1–4 day turnaround.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/request-a-quote" className="cta-primary">
              Request Pricing
            </Link>
            <Link href="/for-flooring-stores" className="cta-secondary">
              For Flooring Stores
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-6 md:p-8">
          <p className="eyebrow">At a glance</p>
          <ul className="mt-5 space-y-4 text-sm leading-6 text-stone-700">
            <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-stone-900" aria-hidden />Built from customer-provided flooring material</li>
            <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-stone-900" aria-hidden />1–4 business day turnaround</li>
            <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-stone-900" aria-hidden />Best fit: flooring stores &amp; repeat trade buyers</li>
            <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-stone-900" aria-hidden />Serving Northern Virginia &amp; the DC area</li>
            <li className="flex gap-3"><span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-stone-900" aria-hidden />5+ years of specialty fabrication experience</li>
          </ul>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="space-y-4 max-w-3xl">
        <p className="eyebrow">The problem</p>
        <h2 className="text-3xl font-semibold tracking-tight text-stone-950">
          The floor looks great. Then the stair detail ruins it.
        </h2>
        <p className="text-lg leading-8 text-stone-600">
          A nosing that doesn&apos;t match. A tread that looks like it came from another job. A vent cover that interrupts a beautiful room. One bad finishing detail and the whole install looks off.
        </p>
        <p className="text-lg leading-8 text-stone-600">
          Most shops try to stain-match it or drop in something close. We build from the actual flooring material, so the match is real.
        </p>
      </section>

      {/* PRODUCTS */}
      <section className="space-y-6">
        <p className="eyebrow">What we make</p>
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <Link key={product.title} href={product.href} className="card transition hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(28,25,23,0.08)]">
              <h3 className="text-xl font-semibold text-stone-950">{product.title}</h3>
              <p className="mt-3 text-sm leading-6 text-stone-600">{product.text}</p>
              <p className="mt-5 text-sm font-semibold text-stone-900">Learn more →</p>
            </Link>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="space-y-6">
        <p className="eyebrow">What buyers say</p>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <div key={t.author} className="rounded-[2rem] border border-stone-200 bg-white p-8 space-y-4">
              <p className="text-base leading-7 text-stone-700">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <p className="text-sm font-semibold text-stone-950">{t.author}</p>
                <p className="text-sm text-stone-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="grid gap-8 rounded-[2rem] border border-stone-200 bg-white p-8 md:grid-cols-[0.9fr_1.1fr] md:p-10">
        <div className="space-y-3">
          <p className="eyebrow">How it works</p>
          <h2 className="text-3xl font-semibold tracking-tight text-stone-950">Three steps. Fast turnaround.</h2>
          <p className="text-base leading-7 text-stone-600">
            Built for stores and installers who need the right part without slowing down the job.
          </p>
        </div>
        <ol className="grid gap-4">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-stone-900 text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <div>
                  <p className="font-semibold text-stone-950">{step.title}</p>
                  <p className="mt-1 text-sm leading-6 text-stone-600">{step.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA */}
      <section className="rounded-[2rem] bg-stone-900 px-8 py-10 text-white md:px-10">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight">
              Need a reliable source for matching flooring accessories?
            </h2>
            <p className="max-w-2xl text-base leading-7 text-stone-300">
              Stair treads, nosings, vent covers — flooring store, installer, or contractor, reach out about your next job.
            </p>
          </div>
          <Link href="/request-a-quote" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-950 transition hover:bg-stone-200 whitespace-nowrap">
            Request Pricing
          </Link>
        </div>
      </section>

    </div>
  );
}
