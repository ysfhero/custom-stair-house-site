import Link from "next/link";

const products = [
  {
    title: "Custom Stair Treads",
    text: "Exact-match stair components for projects where the stair finish needs to look intentional, not improvised.",
    href: "/stair-treads",
  },
  {
    title: "Stair Nosings",
    text: "A cleaner solution for one of the most common wood-flooring finishing problems on live jobs.",
    href: "/stair-nosings",
  },
  {
    title: "Flush Mount Vent Covers",
    text: "Matching vents made from the same flooring material so the finished floor looks complete.",
    href: "/vent-covers",
  },
];

const trustPoints = [
  "Typical turnaround is 1–4 business days depending on production load.",
  "Built for flooring stores, installers, and wood-flooring sellers.",
  "Made from customer-provided flooring material for a truer match.",
  "5+ years of specialty experience before launching in Virginia.",
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
    text: "We build from the flooring material tied to the project instead of relying on a guess-heavy stain match.",
  },
  {
    title: "Fast turnaround",
    text: "Typical turnaround is 1–4 business days depending on production load, which helps jobs keep moving.",
  },
  {
    title: "Cleaner finished result",
    text: "The goal is a finish detail that fits the actual floor instead of looking like an obvious compromise.",
  },
  {
    title: "Built for repeat use",
    text: "For flooring professionals, this solves a recurring finishing problem more reliably across multiple jobs.",
  },
];

const oldWay = [
  "Relying on generic accessory options that are close, but not really right.",
  "Wasting time trying to stain-match nosings or transitions in-house.",
  "Finding out too late that the stair or vent detail breaks the look of the finished floor.",
  "Having the customer notice the mismatch after the install is basically done.",
];

const customWay = [
  "Use the actual flooring material tied to the project.",
  "Fabricate the matching accessory around the floor instead of forcing a guess.",
  "Reduce stain-match headaches, rework, and last-minute scrambling.",
  "Hand off a cleaner finished result that looks intentional.",
];

const examples = [
  "From a single custom vent cover to repeat stair nosing orders for dealer projects.",
  "From one stair tread replacement to larger matching runs for active installs.",
  "From one-off project needs to repeat ordering relationships with flooring stores.",
];

const steps = [
  "Send the project details or contact us with what you need.",
  "Provide the flooring material for the project.",
  "We fabricate the matching accessory.",
  "Pick up or receive a cleaner finishing solution for the install.",
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="border-b border-stone-200 bg-white">
        <div className="section-shell grid gap-14 py-20 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="eyebrow">Exact-match stair treads, stair nosings, and vent covers</p>
              <h1 className="text-5xl font-semibold tracking-tight text-stone-950 md:text-6xl">
                Custom stair treads, stair nosings, and vent covers made to match hardwood floors more cleanly.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-stone-600">
                We make exact-match wood flooring accessories from your customer&apos;s flooring material so flooring stores, installers, and trade buyers get a cleaner finish, fewer stain-match headaches, and a result that actually looks right.
              </p>
              <p className="max-w-2xl text-base leading-7 text-stone-600">
                Best fit for flooring stores, installers, and repeat trade buyers who keep running into the same finishing problem: the floor looks good, but the accessory does not.
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
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-stone-100 p-8">
            <div className="space-y-6">
              <div>
                <p className="eyebrow">Quick trust points</p>
                <h2 className="mt-2 text-2xl font-semibold text-stone-950">
                  Built around a recurring trade problem.
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
            Matching problems usually show up at the worst point in the job.
          </h2>
          <p className="text-lg leading-8 text-stone-600">
            If stair nosings, treads, or vent covers do not match the installed floor properly, the result looks off, the customer notices, and the flooring store or installer gets blamed.
          </p>
          <p className="text-lg leading-8 text-stone-600">
            Many teams either try to stain-match in-house, use generic accessory options that do not really fit, or scramble late in the project when the mismatch becomes obvious.
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
            We help flooring professionals finish the job properly.
          </h2>
          <p className="text-lg leading-8 text-stone-600">
            Custom Stair House makes exact-match accessories from customer-provided flooring material so the finished job looks cleaner, the handoff feels stronger, and the detail does not look like an afterthought.
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
              Built primarily for repeat flooring professionals.
            </h2>
            <p className="text-lg leading-8 text-stone-600">
              We work best with flooring stores, engineered wood flooring sellers, installers, and strong-fit trade buyers who need matching accessories done quickly and consistently.
            </p>
            <p className="text-base leading-7 text-stone-600">
              Strong-fit one-off projects can still work, but the sweet spot is buyers who run into this problem repeatedly and want a reliable solution.
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
        <div className="grid gap-8 rounded-[2rem] border border-stone-200 bg-stone-50 p-8 md:grid-cols-[1fr_1fr] md:items-start">
          <div className="space-y-4">
            <p className="eyebrow">Project fit examples</p>
            <h2 className="text-3xl font-semibold tracking-tight text-stone-950">
              Not a generic woodworking shop.
            </h2>
            <p className="text-lg leading-8 text-stone-600">
              The offer stays narrow on purpose: exact-match wood flooring accessories that solve real finishing problems.
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
            <h2 className="text-3xl font-semibold tracking-tight text-stone-950">Simple process.</h2>
            <p className="text-lg leading-8 text-stone-600">
              The process should feel straightforward, especially for repeat trade buyers who need things to move quickly.
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
              The next upgrade here should be installed project photos, dealer testimonials, before/after examples, and close-up product shots so the page proves the match instead of only describing it.
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
                If you run a flooring store, sell engineered wood flooring, or handle regular wood-floor installs, we&apos;d love to show you samples, discuss pricing, and make repeat ordering easier.
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
