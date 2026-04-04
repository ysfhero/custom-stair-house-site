import Link from "next/link";

const products = [
  {
    title: "Custom Stair Treads",
    text: "Built from the project flooring so the stair finish matches the floor instead of looking like a patch job.",
    href: "/stair-treads",
  },
  {
    title: "Stair Nosings",
    text: "A better answer than generic trims or last-minute stain matching when the edge detail has to look right.",
    href: "/stair-nosings",
  },
  {
    title: "Flush Mount Vent Covers",
    text: "Matching vent covers made from the same flooring material so one bad detail does not ruin the whole room.",
    href: "/vent-covers",
  },
];

const trustPoints = [
  "Typical turnaround: 1–4 business days depending on production load.",
  "Built for flooring stores, installers, and engineered wood sellers.",
  "Made from customer-provided flooring material for a true visual match.",
  "Backed by 5+ years of specialty fabrication experience before launching in Virginia.",
];

const buyerTypes = [
  "Flooring stores",
  "Engineered wood flooring manufacturers and sellers",
  "Flooring installers",
  "Contractors and builders handling wood-flooring jobs",
];

const reasons = [
  {
    title: "Stop stain-match guesswork",
    text: "Using the actual flooring material removes one of the biggest reasons matching accessories look wrong at the end of the job.",
  },
  {
    title: "Protect the finished install",
    text: "When the tread, nosing, or vent actually matches, the customer sees a finished floor instead of a detail that feels cheap or unfinished.",
  },
  {
    title: "Keep jobs moving",
    text: "Typical turnaround is 1–4 business days, which helps stores and installers avoid delays at the worst point in the project.",
  },
  {
    title: "Built for repeat trade orders",
    text: "This is especially useful for flooring stores and installers who run into the same matching problem on job after job.",
  },
];

const oldWay = [
  "Use generic accessory options that are close, but still obviously off.",
  "Try to stain-match nosings or transitions in-house and hope it turns out right.",
  "Discover late in the job that the stair or vent detail breaks the look of the floor.",
  "Have the customer notice the mismatch after the install is basically finished.",
];

const customWay = [
  "Bring in the actual flooring material tied to the job.",
  "We fabricate the accessory around the floor instead of forcing a guess.",
  "Cut down stain-match headaches, rework, and last-minute scrambling.",
  "Deliver a finish detail that looks like it belongs with the floor from the start.",
];

const examples = [
  "Repeat stair nosing orders for flooring stores that want a dependable local partner.",
  "Custom stair tread runs for active installs where the match needs to be right the first time.",
  "Flush mount vent covers and other matching details that keep the finished floor from looking incomplete.",
];

const steps = [
  "Tell us what you need and what kind of accessory the job calls for.",
  "Provide the flooring material for the project.",
  "We fabricate the matching tread, nosing, vent cover, or accessory.",
  "Pick up or receive the finished piece and keep the install moving.",
];

export const metadata = {
  title: "Custom Stair House | Exact-Match Stair Treads, Nosings, and Vent Covers in Northern Virginia",
  description:
    "Custom Stair House makes exact-match stair treads, stair nosings, and vent covers from customer-provided flooring material for flooring stores, installers, and wood-flooring professionals in Northern Virginia.",
};

export default function HomePage() {
  return (
    <div className="page-shell">
      <section className="grid gap-12 rounded-[2.5rem] bg-white p-8 shadow-[0_24px_80px_rgba(28,25,23,0.08)] md:grid-cols-[1.15fr_0.85fr] md:p-12">
        <div className="space-y-7">
          <div className="space-y-4">
            <p className="eyebrow">Exact-match stair treads, nosings, and vent covers made from the customer&apos;s actual flooring</p>
            <h1 className="text-5xl font-semibold tracking-tight text-stone-950 md:text-6xl">
              For flooring stores and installers tired of generic trims, bad stain matches, and finish details that look off.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-stone-600">
              We fabricate matching wood flooring accessories from the customer&apos;s actual flooring material, so the finished job looks right without stain-match guesswork, generic trim compromises, or last-minute scrambling.
            </p>
            <p className="max-w-2xl text-base leading-7 text-stone-600">
              Best fit for flooring stores, engineered wood sellers, installers, and trade buyers who run into the same problem over and over: the floor looks good, but the finishing detail does not.
            </p>
          </div>

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
          <p className="eyebrow">Why buyers call us</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-stone-950">Built for the jobs where the match matters.</h2>
          <ul className="mt-6 space-y-4 text-sm leading-6 text-stone-700">
            {trustPoints.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-stone-900" aria-hidden />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <p className="eyebrow">The problem</p>
          <h2 className="text-3xl font-semibold tracking-tight text-stone-950">
            One bad accessory can make the whole floor look wrong.
          </h2>
          <p className="text-lg leading-8 text-stone-600">
            The floor can look great. Then the stair nosing does not match. Or the vent cover sticks out. Or the tread looks like it came from another job. Suddenly the whole install feels cheaper than it should.
          </p>
          <p className="text-lg leading-8 text-stone-600">
            That usually means stain-matching by guesswork, generic trims that look off, or a late scramble once the mismatch becomes impossible to ignore.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-[2rem] border border-stone-200 bg-white p-6">
            <p className="eyebrow">The usual way</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-stone-600">
              {oldWay.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2rem] border border-stone-200 bg-white p-6">
            <p className="eyebrow">The Custom Stair House way</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-stone-600">
              {customWay.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-4">
          <p className="eyebrow">What we make</p>
          <h2 className="text-3xl font-semibold tracking-tight text-stone-950">
            Matching pieces manufacturers often do not provide.
          </h2>
          <p className="max-w-3xl text-lg leading-8 text-stone-600">
            We fabricate exact-match stair treads, stair nosings, vent covers, and related accessories from customer-provided flooring material so the finished job looks consistent from floor to detail.
          </p>
        </div>

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

      <section className="grid gap-8 rounded-[2rem] border border-stone-200 bg-white p-8 md:grid-cols-[0.95fr_1.05fr] md:p-10">
        <div className="space-y-4">
          <p className="eyebrow">Who it&apos;s for</p>
          <h2 className="text-3xl font-semibold tracking-tight text-stone-950">
            Best fit for flooring stores and repeat trade buyers.
          </h2>
          <p className="text-lg leading-8 text-stone-600">
            Our best-fit customers are flooring stores first, followed by engineered wood flooring sellers, installers, and other trade buyers who keep running into the same matching problem on live jobs.
          </p>
          <p className="text-base leading-7 text-stone-600">
            One-off projects can still be a fit, but this service is most valuable for buyers who need a dependable local source for matching accessories again and again.
          </p>
        </div>
        <div className="rounded-[2rem] bg-stone-50 p-6">
          <ul className="space-y-3 text-sm leading-6 text-stone-700">
            {buyerTypes.map((buyer) => (
              <li key={buyer} className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-stone-900" aria-hidden />
                <span>{buyer}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-4">
          <p className="eyebrow">Why buyers keep coming back</p>
          <h2 className="text-3xl font-semibold tracking-tight text-stone-950">
            A better answer than generic trims and rushed stain matching.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((item) => (
            <div key={item.title} className="card">
              <h3 className="text-xl font-semibold text-stone-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-stone-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 rounded-[2rem] border border-stone-200 bg-white p-8 md:grid-cols-[0.9fr_1.1fr] md:p-10">
        <div className="space-y-4">
          <p className="eyebrow">Project fit examples</p>
          <h2 className="text-3xl font-semibold tracking-tight text-stone-950">
            Not a general shop. A matching-accessory specialist.
          </h2>
          <p className="text-lg leading-8 text-stone-600">
            We stay focused on the accessories that make finished wood-flooring jobs look complete, not patched together.
          </p>
        </div>
        <ul className="grid gap-4">
          {examples.map((example) => (
            <li key={example} className="rounded-2xl border border-stone-200 bg-stone-50 p-5 text-base leading-7 text-stone-700">
              {example}
            </li>
          ))}
        </ul>
      </section>

      <section className="grid gap-8 rounded-[2rem] border border-stone-200 bg-white p-8 md:grid-cols-[0.9fr_1.1fr] md:p-10">
        <div className="space-y-4">
          <p className="eyebrow">How it works</p>
          <h2 className="text-3xl font-semibold tracking-tight text-stone-950">Simple process. Fast turnaround.</h2>
          <p className="text-lg leading-8 text-stone-600">
            The goal is to make ordering straightforward for stores, installers, and repeat trade buyers who need the right match without slowing down the job.
          </p>
        </div>
        <ol className="grid gap-4">
          {steps.map((step, index) => (
            <li key={step} className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-stone-900 text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <p className="pt-1 text-base leading-7 text-stone-700">{step}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-[2rem] border border-stone-200 bg-white p-8 md:p-10">
        <div className="max-w-3xl space-y-4">
          <p className="eyebrow">Proof and credibility</p>
          <h2 className="text-3xl font-semibold tracking-tight text-stone-950">
            Built by people who know the flooring trade.
          </h2>
          <p className="text-lg leading-8 text-stone-600">
            Custom Stair House is built around a real trade problem: flooring stores and installers need matching accessories that actually work with the floor they sold or installed.
          </p>
          <p className="text-base leading-7 text-stone-600">
            We back that up with specialty fabrication experience, local service, physical samples, and a process designed for repeat trade relationships instead of one-off guesswork.
          </p>
        </div>
      </section>

      <section className="rounded-[2rem] bg-stone-900 px-8 py-10 text-white md:px-10">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="space-y-3">
            <p className="eyebrow text-stone-300">Dealer CTA</p>
            <h2 className="text-3xl font-semibold tracking-tight">
              Need a reliable source for matching stair treads, nosings, or vent covers?
            </h2>
            <p className="max-w-2xl text-base leading-7 text-stone-300">
              If you run a flooring store, sell engineered wood flooring, or handle regular wood-floor installs, reach out about pricing, samples, or your next job. We&apos;ll help you get the match right.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/request-a-quote" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-950 transition hover:bg-stone-200">
              Ask About Dealer Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
