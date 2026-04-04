import Link from "next/link";

export const metadata = {
  title: "Custom Stair Treads | Exact-Match Wood Stair Treads in Northern Virginia",
  description:
    "Custom wood stair treads made from customer-provided flooring material for flooring stores, installers, and wood-flooring professionals in Northern Virginia.",
};

export default function StairTreadsPage() {
  return (
    <div className="page-shell gap-14">

      <section className="space-y-5">
        <p className="eyebrow">Stair Treads</p>
        <h1 className="page-title">Custom stair treads cut from the same flooring you installed.</h1>
        <p className="page-lead">
          Generic stair treads always look close, but not right. We make them from the customer&apos;s actual flooring material so the staircase looks like part of the floor, not a last-minute fix.
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
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-stone-950">
            The stair is the first thing customers notice when the floor is done.
          </h2>
          <p className="text-base leading-7 text-stone-600">
            If the tread looks off — wrong tone, wrong texture, obvious mismatch — it cheapens the whole install. Stain-matching it in-house rarely works, and stock treads are always a compromise.
          </p>
          <p className="text-base leading-7 text-stone-600">
            We solve this cleanly: bring us the flooring material and we build the tread from it. 1–4 business day turnaround.
          </p>
        </div>
        <div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-6 space-y-3">
          <p className="eyebrow">Best fit for</p>
          <ul className="space-y-3 text-sm leading-6 text-stone-600">
            <li>• Flooring stores that want a dependable local source for repeat stair tread work.</li>
            <li>• Installers handling wood-floor projects where the stair finish has to look right the first time.</li>
            <li>• Contractors who need a fast, reliable match without the guesswork.</li>
          </ul>
        </div>
      </section>

      <section className="rounded-[2rem] bg-stone-900 px-8 py-10 text-white">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight">Need pricing for a stair tread job?</h2>
            <p className="max-w-2xl text-base leading-7 text-stone-300">
              Send the project details and flooring information — we&apos;ll tell you what&apos;s needed to quote it.
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
