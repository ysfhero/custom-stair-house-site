import Link from "next/link";

export const metadata = {
  title: "Stair Nosings | Custom Wood Stair Nosings to Match Hardwood Floors",
  description:
    "Custom wood stair nosings made from customer-provided flooring material for flooring stores, installers, and wood-flooring professionals in Northern Virginia.",
};

export default function StairNosingsPage() {
  return (
    <div className="page-shell gap-14">

      <section className="space-y-5">
        <p className="eyebrow">Stair Nosings</p>
        <h1 className="page-title">Stair nosings made from the actual floor — not stain-matched, not close enough.</h1>
        <p className="page-lead">
          The nosing is the most visible edge detail on any hardwood stair. When it doesn&apos;t match, the customer notices immediately. We make it from the project flooring so it looks right instead of looking like a compromise.
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
            Stain-matching nosings is a gamble. Fabricating them from the floor is not.
          </h2>
          <p className="text-base leading-7 text-stone-600">
            In-house stain matching takes time, rarely gets it exactly right, and puts the installer or store on the hook if the customer is unhappy. Generic nosings are always a visible compromise.
          </p>
          <p className="text-base leading-7 text-stone-600">
            We remove the guesswork: bring us the flooring material and we fabricate the nosing from it. The result looks like it was part of the floor from the start.
          </p>
        </div>
        <div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-6 space-y-3">
          <p className="eyebrow">Best fit for</p>
          <ul className="space-y-3 text-sm leading-6 text-stone-600">
            <li>• Flooring stores who want a cleaner, more dependable answer for stair nosing on every job.</li>
            <li>• Installers where the edge detail has to look right the first time — no rework.</li>
            <li>• Trade buyers who want a repeat source, not a one-off workaround.</li>
          </ul>
        </div>
      </section>

      <section className="rounded-[2rem] bg-stone-900 px-8 py-10 text-white">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight">Need pricing for stair nosing?</h2>
            <p className="max-w-2xl text-base leading-7 text-stone-300">
              Send the job details and flooring information — we&apos;ll quote it properly.
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
