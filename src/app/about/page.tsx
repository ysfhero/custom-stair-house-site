import Link from "next/link";

export const metadata = {
  title: "About",
  description:
    "Learn about Custom Stair House, the trade background behind the business, and the local service focus.",
};

export default function AboutPage() {
  return (
    <div className="page-shell gap-14">
      <section className="space-y-5">
        <p className="eyebrow">About</p>
        <h1 className="page-title">A practical trade-focused business, not a generic custom shop.</h1>
        <p className="page-lead">
          Custom Stair House exists to help flooring professionals solve exact-match accessory problems with less friction and a better finished result.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-6">
          <p className="eyebrow">Trade background</p>
          <p className="mt-3 text-base leading-7 text-stone-600">
            The business is built around real trade experience, not generic design language. That matters because the product only has value if it solves the actual finishing problem in the field.
          </p>
        </div>
        <div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-6">
          <p className="eyebrow">Local focus</p>
          <p className="mt-3 text-base leading-7 text-stone-600">
            Serving Northern Virginia and the Washington area with a focus on repeat trade buyers, flooring stores, installers, and strong-fit projects.
          </p>
        </div>
      </section>

      <section className="rounded-[2rem] border border-stone-200 bg-white p-8">
        <div className="max-w-3xl space-y-4">
          <p className="eyebrow">Why the company exists</p>
          <h2 className="text-3xl font-semibold tracking-tight text-stone-950">
            The goal is simple: help the finished floor look right.
          </h2>
          <p className="text-base leading-7 text-stone-600">
            Stair treads, nosings, and vent covers are often the part of the job that exposes a mismatch. Custom Stair House exists to reduce that problem with a tighter, more trade-friendly solution.
          </p>
        </div>
      </section>

      <section className="rounded-[2rem] bg-stone-900 px-8 py-10 text-white">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="space-y-3">
            <p className="eyebrow text-stone-300">CTA</p>
            <h2 className="text-3xl font-semibold tracking-tight">Want to see if there’s a fit for your project or store?</h2>
            <p className="max-w-2xl text-base leading-7 text-stone-300">
              Reach out with the type of project or accessory need you are trying to solve.
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
