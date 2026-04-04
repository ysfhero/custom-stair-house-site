import Link from "next/link";

const useCases = [
  "Flooring store jobs where the stair detail has to match the customer’s actual floor.",
  "Installers who are done relying on generic stair parts or shaky stain matches.",
  "Trade buyers who need a repeatable source for matching stair treads on active jobs.",
];

const benefits = [
  {
    title: "Built from the actual floor",
    text: "Using the project flooring material gives you a much better chance of getting the stair tread to read like part of the install, not a near miss.",
  },
  {
    title: "Protect the finished look",
    text: "A matching stair tread helps the staircase feel complete instead of becoming the one detail the customer notices for the wrong reason.",
  },
  {
    title: "Made for repeat trade work",
    text: "For flooring stores and installers, this creates a better system for solving the same stair-matching problem across multiple projects.",
  },
];

const steps = [
  "Send the job details and tell us what kind of tread you need.",
  "Provide the flooring material tied to the project.",
  "We fabricate the stair tread around the actual match requirement.",
  "Pick up or receive the finished piece and keep the install moving.",
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
        <h1 className="page-title">Exact-match stair treads made from the customer&apos;s actual flooring.</h1>
        <p className="page-lead">
          Custom Stair House fabricates custom wood stair treads from customer-provided flooring material so flooring stores, installers, and trade buyers can stop forcing generic parts into jobs where the stair finish has to actually match.
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
            If the stair tread looks wrong, the whole staircase looks wrong.
          </h2>
          <p className="text-base leading-7 text-stone-600">
            On wood-flooring jobs, the stair detail is too visible to fake. A bad tread match can make a strong install feel cheap, unfinished, or thrown together at the last minute.
          </p>
          <p className="text-base leading-7 text-stone-600">
            That is why stores and installers need something better than a generic part, a rushed workaround, or stain matching that only looks acceptable from far away.
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
            The process is built to be simple enough for repeat trade orders and fast enough to keep jobs moving.
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
              Send the project details and flooring information, and we&apos;ll tell you what is needed to quote it properly.
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
