import Link from "next/link";

const painPoints = [
  "The floor looks good, but the nosing looks like it belongs to a different job.",
  "Stores and installers get blamed when the transition detail looks off.",
  "Trying to force a stain match late in the process creates risk and frustration.",
];

const fitPoints = [
  "Flooring stores that want a cleaner finished result for customers.",
  "Installers handling wood-floor projects where finish quality matters.",
  "Trade buyers who want a repeatable way to solve a recurring mismatch issue.",
];

const steps = [
  "Share the project details and what type of nosing is needed.",
  "Provide the flooring material tied to the project.",
  "We fabricate the exact-match nosing around the real floor requirement.",
  "Coordinate pickup or delivery and keep the job moving.",
];

export const metadata = {
  title: "Stair Nosings | Custom Wood Stair Nosings to Match Hardwood Floors",
  description:
    "Custom wood stair nosings for flooring stores, installers, and wood-flooring professionals who need stair nosing to match hardwood floors more cleanly.",
};

export default function StairNosingsPage() {
  return (
    <div className="page-shell gap-14">
      <section className="space-y-5">
        <p className="eyebrow">Custom Stair Nosings</p>
        <h1 className="page-title">Custom stair nosings that match hardwood floors the way the finish should look.</h1>
        <p className="page-lead">
          When stair nosing does not match the installed floor properly, the finished job looks off. Custom Stair House makes exact-match wood stair nosings from project flooring material so the transition feels intentional instead of improvised.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/request-a-quote" className="cta-primary">
            Request Pricing
          </Link>
          <Link href="/how-it-works" className="cta-secondary">
            How It Works
          </Link>
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-6">
          <p className="eyebrow">The mismatch problem</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-stone-950">
            Stair nosing mismatch is small on paper and obvious in real life.
          </h2>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-stone-600">
            {painPoints.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-6">
          <p className="eyebrow">Best fit buyers</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-stone-950">
            Best for stores and installers who care how the job finishes.
          </h2>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-stone-600">
            {fitPoints.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-[2rem] border border-stone-200 bg-white p-8">
        <div className="max-w-3xl space-y-4">
          <p className="eyebrow">Why exact match matters</p>
          <h2 className="text-3xl font-semibold tracking-tight text-stone-950">
            The right nosing does more than fill a requirement.
          </h2>
          <p className="text-base leading-7 text-stone-600">
            It helps the floor transition look intentional, reduces the chance of an ugly visual break, and gives flooring professionals a more reliable way to finish the job properly.
          </p>
        </div>
      </section>

      <section className="grid gap-8 rounded-[2rem] border border-stone-200 bg-white p-8 md:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <p className="eyebrow">Ordering process</p>
          <h2 className="text-3xl font-semibold tracking-tight text-stone-950">Simple enough to reuse on repeat jobs.</h2>
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

      <section className="rounded-[2rem] bg-stone-900 px-8 py-10 text-white">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="space-y-3">
            <p className="eyebrow text-stone-300">CTA</p>
            <h2 className="text-3xl font-semibold tracking-tight">Need an exact-match stair nosing quote?</h2>
            <p className="max-w-2xl text-base leading-7 text-stone-300">
              Send the details and we&apos;ll tell you what is needed to price the project properly.
            </p>
          </div>
          <Link href="/request-a-quote" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-950 transition hover:bg-stone-200">
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
