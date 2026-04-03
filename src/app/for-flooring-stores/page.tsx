import Link from "next/link";

const reasons = [
  "You need a better answer when customers ask for accessories that actually match the floor.",
  "You want fewer stain-match headaches and fewer ugly finishing compromises.",
  "You want a supplier relationship that can be reused instead of solved from scratch each time.",
];

const outcomes = [
  {
    title: "Better end result for the customer",
    text: "When the accessories match the floor properly, the finished install looks more intentional and complete.",
  },
  {
    title: "Less friction for the store or installer",
    text: "Instead of trying to improvise a match late in the project, you have a cleaner path to the right part.",
  },
  {
    title: "Repeat-order value",
    text: "The real value is not one order. It is becoming the default option for recurring matching-accessory work.",
  },
];

const onboarding = [
  "Reach out with the types of projects and accessory needs you see most often.",
  "Review pricing direction and sample availability.",
  "Use the quote process on a first trial order.",
  "If the fit is strong, make repeat ordering part of your normal workflow.",
];

export const metadata = {
  title: "For Flooring Stores",
  description:
    "A trade-focused page for flooring stores and wood-flooring sellers that need a reliable exact-match accessory partner.",
};

export default function ForFlooringStoresPage() {
  return (
    <div className="page-shell gap-14">
      <section className="space-y-5">
        <p className="eyebrow">For Flooring Stores</p>
        <h1 className="page-title">A matching-accessory partner built for repeat flooring professionals.</h1>
        <p className="page-lead">
          This page is for flooring stores and wood-flooring sellers who want a cleaner way to handle stair treads, stair nosings, vent covers, and other matching accessory requests.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/request-a-quote" className="cta-primary">
            Ask About Pricing
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
            Built around a problem your customers can see immediately.
          </h2>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-stone-600">
            {reasons.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-6">
          <p className="eyebrow">Sample availability</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-stone-950">
            Samples help the relationship start faster.
          </h2>
          <p className="mt-5 text-base leading-7 text-stone-600">
            This section will be expanded later with showroom sample guidance, physical sample drop details,
            and the best way to start a dealer or trade relationship.
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
            The first goal is not complexity. It is getting a real job through the system cleanly.
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
            <h2 className="text-3xl font-semibold tracking-tight">Want to see if there’s a dealer fit?</h2>
            <p className="max-w-2xl text-base leading-7 text-stone-300">
              Reach out about your store, the accessory requests you see most often, and the type of jobs you want help with.
            </p>
          </div>
          <Link href="/request-a-quote" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-950 transition hover:bg-stone-200">
            Ask About Dealer Fit
          </Link>
        </div>
      </section>
    </div>
  );
}
