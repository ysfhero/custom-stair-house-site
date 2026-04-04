import Link from "next/link";

const painPoints = [
  "The floor looks right, but the nosing looks like it came from a different job.",
  "Stores and installers get blamed when the edge detail ruins the finished look.",
  "Late-stage stain matching creates unnecessary risk, delay, and frustration.",
];

const fitPoints = [
  "Flooring stores that need a cleaner, more dependable finish detail for customers.",
  "Installers handling wood-floor projects where the edge detail has to look right the first time.",
  "Repeat trade buyers who want a better answer than generic nosings or guesswork.",
];

const steps = [
  "Share the job details and what type of nosing the project needs.",
  "Provide the flooring material tied to the job.",
  "We fabricate the matching nosing around the real floor requirement.",
  "Coordinate pickup or delivery and keep the install moving.",
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
        <h1 className="page-title">Exact-match stair nosings for jobs where a bad edge detail is not acceptable.</h1>
        <p className="page-lead">
          When stair nosing does not match the installed floor, the finished job looks off immediately. Custom Stair House makes exact-match wood stair nosings from project flooring material so the transition looks right instead of looking like an obvious compromise.
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
            Stair nosing mismatch is one of the fastest ways to cheapen a good floor.
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
            The right nosing protects the look of the whole install.
          </h2>
          <p className="text-base leading-7 text-stone-600">
            A good stair nosing does more than check a box. It keeps the edge detail aligned with the rest of the floor, cuts down on ugly visual breaks, and gives flooring professionals a more reliable way to hand off a finished job with confidence.
          </p>
        </div>
      </section>

      <section className="grid gap-8 rounded-[2rem] border border-stone-200 bg-white p-8 md:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <p className="eyebrow">Ordering process</p>
          <h2 className="text-3xl font-semibold tracking-tight text-stone-950">Simple enough for repeat jobs.</h2>
          <p className="text-base leading-7 text-stone-600">
            The process is designed for stores and installers who need a local matching source they can come back to again.
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

      <section className="rounded-[2rem] bg-stone-900 px-8 py-10 text-white">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="space-y-3">
            <p className="eyebrow text-stone-300">CTA</p>
            <h2 className="text-3xl font-semibold tracking-tight">Need pricing for an exact-match stair nosing?</h2>
            <p className="max-w-2xl text-base leading-7 text-stone-300">
              Send the job details and flooring information, and we&apos;ll tell you what is needed to quote the project properly.
            </p>
          </div>
          <Link href="/request-a-quote" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-950 transition hover:bg-stone-200">
            Request Pricing
          </Link>
        </div>
      </section>
    </div>
  );
}
