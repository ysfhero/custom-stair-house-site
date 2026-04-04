import Link from "next/link";

const reasons = [
  "Your customer wants matching stair parts or vent covers, and the manufacturer does not have a good answer.",
  "You are tired of stain-match guesswork, ugly finish details, and last-minute scrambling.",
  "You want a local supplier you can use again instead of solving the same problem from scratch on every job.",
];

const outcomes = [
  {
    title: "Protect the finished job",
    text: "When the accessory actually matches the floor, the install looks more complete and the customer sees a better final result.",
  },
  {
    title: "Reduce friction for your team",
    text: "Instead of forcing a workaround late in the project, you have a cleaner path to the right part.",
  },
  {
    title: "Create a repeatable source",
    text: "The real value is not one order. It is knowing who to call the next time a matching tread, nosing, or vent cover comes up.",
  },
];

const onboarding = [
  "Reach out with the kinds of jobs and accessory requests you see most often.",
  "Review pricing direction, turnaround, and sample availability.",
  "Run a first order through the quote process.",
  "If the fit is strong, make us part of your normal workflow for matching accessories.",
];

export const metadata = {
  title: "For Flooring Stores | Exact-Match Stair Accessories and Repeat Ordering",
  description:
    "A trade-focused page for flooring stores and wood-flooring sellers that need a reliable supplier for exact-match stair treads, stair nosings, and vent covers.",
};

export default function ForFlooringStoresPage() {
  return (
    <div className="page-shell gap-14">
      <section className="space-y-5">
        <p className="eyebrow">For Flooring Stores</p>
        <h1 className="page-title">A local matching-accessory partner for flooring stores that want the job to finish right.</h1>
        <p className="page-lead">
          This page is for flooring stores and wood-flooring sellers who need a reliable source for custom stair treads, stair nosings, vent covers, and other matching accessories built from real customer flooring.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/request-a-quote" className="cta-primary">
            Ask About Dealer Pricing
          </Link>
          <Link href="/stair-nosings" className="cta-secondary">
            See Stair Nosings
          </Link>
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-6">
          <p className="eyebrow">Why stores use us</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-stone-950">
            Because customers notice when the finish detail looks wrong.
          </h2>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-stone-600">
            {reasons.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-6">
          <p className="eyebrow">Samples and relationship fit</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-stone-950">
            Built for stores that want a dependable local source.
          </h2>
          <p className="mt-5 text-base leading-7 text-stone-600">
            If your store regularly runs into customers who need matching stair parts or vent covers, we can talk through samples, pricing, and what repeat ordering could look like.
          </p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {outcomes.map((item) => (
          <div key={item.title} className="card">
            <h3 className="text-xl font-semibold text-stone-950">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-stone-600">{item.text}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-8 rounded-[2rem] border border-stone-200 bg-white p-8 md:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <p className="eyebrow">How to start</p>
          <h2 className="text-3xl font-semibold tracking-tight text-stone-950">Simple onboarding for a first order.</h2>
          <p className="text-base leading-7 text-stone-600">
            The goal is simple: get a real job through the system cleanly, then make repeat ordering easy.
          </p>
        </div>
        <ol className="grid gap-4">
          {onboarding.map((step, index) => (
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
            <h2 className="text-3xl font-semibold tracking-tight">Want a better answer for matching-accessory jobs?</h2>
            <p className="max-w-2xl text-base leading-7 text-stone-300">
              Reach out about your store, the accessory requests you see most often, and the kinds of jobs you want help with.
            </p>
          </div>
          <Link href="/request-a-quote" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-950 transition hover:bg-stone-200">
            Ask About Dealer Pricing
          </Link>
        </div>
      </section>
    </div>
  );
}
