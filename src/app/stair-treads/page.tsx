import Link from "next/link";

const useCases = [
  "Projects where finish quality matters and a generic stair part would look off.",
  "Flooring store jobs where the accessory needs to match the customer’s actual flooring material.",
  "Trade buyers who want a cleaner finished result without forcing a bad stain match.",
];

const benefits = [
  {
    title: "Better visual match",
    text: "Built from the flooring material provided for the project so the stair component fits the floor more naturally.",
  },
  {
    title: "Stronger customer result",
    text: "A cleaner finished stair detail helps the whole job feel more complete at handoff.",
  },
  {
    title: "Useful for repeat trade buyers",
    text: "Flooring stores and installers can use the process repeatedly instead of solving the same matching problem from scratch every time.",
  },
];

const steps = [
  "Send project details and what you need priced.",
  "Provide the flooring material for the project.",
  "We fabricate the stair tread to fit the matching requirement.",
  "Pickup or delivery is coordinated based on the job.",
];

export const metadata = {
  title: "Custom Stair Treads | Exact-Match Wood Stair Treads in Northern Virginia",
  description:
    "Custom wood stair treads made from customer-provided flooring material for flooring stores, installers, and wood-flooring professionals in Northern Virginia.",
};

export default function StairTreadsPage() {
  return (
    <div className="page-shell gap-14">
      <section className="space-y-5">
        <p className="eyebrow">Custom Stair Treads</p>
        <h1 className="page-title">Custom stair treads made to match hardwood floors more cleanly.</h1>
        <p className="page-lead">
          Custom Stair House makes custom wood stair treads from customer-provided flooring material so flooring stores, installers, and trade buyers get a cleaner visual match and a stronger finished result.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/request-a-quote" className="cta-primary">
            Request Pricing
          </Link>
          <Link href="/for-flooring-stores" className="cta-secondary">
            For Flooring Stores
          </Link>
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <p className="eyebrow">Why it matters</p>
          <h2 className="text-3xl font-semibold tracking-tight text-stone-950">
            A stair tread that does not fit the floor visually can pull down the whole job.
          </h2>
          <p className="text-base leading-7 text-stone-600">
            On projects where the floor finish matters, generic stair components or loose stain matching can make the transition feel off.
            Exact-match treads are about getting the finish right, not just filling a category.
          </p>
        </div>
        <div className="rounded-[2rem] border border-stone-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-stone-950">Best fit for</h3>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-stone-600">
            {useCases.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {benefits.map((item) => (
          <div key={item.title} className="card">
            <h3 className="text-xl font-semibold text-stone-950">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-stone-600">{item.text}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-8 rounded-[2rem] border border-stone-200 bg-white p-8 md:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <p className="eyebrow">Ordering process</p>
          <h2 className="text-3xl font-semibold tracking-tight text-stone-950">A straightforward path from quote to fabrication.</h2>
          <p className="text-base leading-7 text-stone-600">
            The process should stay simple enough for trade buyers to reuse without friction.
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
            <p className="eyebrow text-stone-300">Next step</p>
            <h2 className="text-3xl font-semibold tracking-tight">Need pricing for a stair tread job?</h2>
            <p className="max-w-2xl text-base leading-7 text-stone-300">
              Send the project details and we can tell you what is needed to move the quote forward.
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
