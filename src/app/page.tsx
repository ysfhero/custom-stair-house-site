import Link from "next/link";

const products = [
  {
    title: "Custom Stair Treads",
    text: "Built from the project flooring so the stair finish matches the floor instead of looking patched together.",
    href: "/stair-treads",
  },
  {
    title: "Stair Nosings",
    text: "A better answer than generic trims or in-house stain matching when the edge detail has to look right.",
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
    text: "Using the actual flooring material removes one of the biggest reasons matching accessories look off in the finished job.",
  },
  {
    title: "Keep jobs moving",
    text: "Typical turnaround is 1–4 business days, which helps stores and installers avoid delays at the worst point in the project.",
  },
  {
    title: "Make the finished floor look complete",
    text: "When the nosing, tread, or vent cover actually matches, the whole install looks sharper and more professional.",
  },
  {
    title: "Built for repeat trade orders",
    text: "This is especially valuable for flooring stores and installers who run into the same matching problem on job after job.",
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
  "Deliver a finished detail that looks like it belongs with the floor from the start.",
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

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="border-b border-stone-200 bg-white">
        <div className="section-shell grid gap-14 py-20 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="eyebrow">Matching stair treads, nosings, and vent covers made from the actual floor</p>
              <h1 className="text-5xl font-semibold tracking-tight text-stone-950 md:text-6xl">
                Exact-match stair treads, stair nosings, and vent covers for flooring stores and installers.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-stone-600">
                We fabricate matching wood flooring accessories from the customer&apos;s actual flooring material, so the finished job looks right without the usual stain-match headaches, generic trim compromises, or last-minute scrambling.
              </p>
              <p className="max-w-2xl text-base leading-7 text-stone-600">
                Best fit for flooring stores, engineered wood sellers, installers, and trade buyers who run into the same problem over and over: the floor looks good, but the matching detail does not.
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

          <div className="rounded-[2rem] border border-stone-200 bg-stone-100 p-8">
            <div className="space-y-6">
              <div>
                <p className="eyebrow">Quick trust points</p>
                <h2 className="mt-2 text-2xl font-semibold text-stone-950">
  Built for the jobs where the match matters.
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
        <div className="max-w-3xl space-y-4 pb-8">
          <p className="eyebrow">The problem</p>
          <h2 className="text-3xl font-semibold tracking-tight text-stone-950">
            One bad accessory can make the whole floor look wrong.
          </h2>
          <p className="text-lg leading-8 text-stone-600">
            When a stair nosing, tread, or vent cover does not match the installed floor, the customer notices. The detail looks off, the job feels unfinished, and the flooring store or installer gets blamed for it.
          </p>
          <p className="text-lg leading-8 text-stone-600">
            That usually leads to stain-matching by guesswork, generic accessory compromises, or a late scramble once the mismatch becomes impossible to ignore.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-stone-200 bg-white p-8">
            <p className="eyebrow">The old way</p>
            <h3 className="mt-2 text-2xl font-semibold text-stone-950">Too much guessing. Too much patchwork.</h3>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-stone-600">
              {oldWay.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-stone-900 bg-stone-900 p-8 text-white">
            <p className="eyebrow text-stone-300">The Custom Stair House way</p>
            <h3 className="mt-2 text-2xl font-semibold">Build around the actual flooring material.</h3>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-stone-300">
              {customWay.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-shell py-8">
        <div className="max-w-3xl space-y-4 pb-8">
          <p className="eyebrow">The solution</p>
          <h2 className="text-3xl font-semibold tracking-tight text-stone-950">
            We make the matching pieces manufacturers often do not.
          </h2>
          <p className="text-lg leading-8 text-stone-600">
            Custom Stair House fabricates exact-match stair treads, stair nosings, vent covers, and related accessories from customer-provided flooring material so the finished job looks consistent from floor to detail.
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
              Best fit for flooring stores and repeat trade buyers.
            </h2>
            <p className="text-lg leading-8 text-stone-600">
              Our best-fit customers are flooring stores first, followed by engineered wood flooring sellers, installers, and other trade buyers who keep running into the same matching problem on live jobs.
            </p>
            <p className="text-base leading-7 text-stone-600">
              One-off projects can still be a fit, but this service is most valuable for buyers who need a dependable local source for matching accessories again and again.
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
            Why flooring stores and installers keep coming back.
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
        <div className="grid gap-8 rounded-[2rem] border border-stone-200 bg-stone-50 p-8 md:grid-cols-[1fr_1fr] md:items-start">
          <div className="space-y-4">
            <p className="eyebrow">Project fit examples</p>
            <h2 className="text-3xl font-semibold tracking-tight text-stone-950">
              Not a general shop. A matching-accessory specialist.
            </h2>
            <p className="text-lg leading-8 text-stone-600">
              We stay focused on the accessories that make finished wood-flooring jobs look complete, not patched together.
            </p>
          </div>
          <ul className="space-y-3 text-sm leading-6 text-stone-600">
            {examples.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div className="space-y-4">
            <p className="eyebrow">How it works</p>
            <h2 className="text-3xl font-semibold tracking-tight text-stone-950">Simple process. Fast turnaround.</h2>
            <p className="text-lg leading-8 text-stone-600">
              The goal is to make ordering straightforward for stores, installers, and repeat trade buyers who need the right match without slowing down the job.
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
              Built by people who know the flooring trade.
            </h2>
            <p className="text-lg leading-8 text-stone-600">
              Custom Stair House is built around a real trade problem: flooring stores and installers need matching accessories that actually work with the floor they sold or installed.
            </p>
            <p className="text-base leading-7 text-stone-600">
              We back that up with specialty fabrication experience, local service, physical samples, and a process designed for repeat trade relationships instead of one-off guesswork.
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
                Need a reliable source for matching stair treads, nosings, or vent covers?
              </h2>
              <p className="max-w-2xl text-base leading-7 text-stone-300">
                If you run a flooring store, sell engineered wood flooring, or handle regular wood-floor installs, reach out about pricing, samples, or your next job. We&apos;ll help you get the match right.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row md:flex-col">
              <Link href="/request-a-quote" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-950 transition hover:bg-stone-200">
                Request Pricing
              </Link>
              <Link href="/for-flooring-stores" className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
Ask About Dealer Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
