import Link from "next/link";

export const metadata = {
  title: "Flush Mount Vent Covers | Custom Wood Vent Covers to Match Flooring",
  description:
    "Custom wood vent covers and flush mount vent covers made from project flooring material for a cleaner finished look in Northern Virginia.",
};

export default function VentCoversPage() {
  return (
    <div className="page-shell gap-14">

      <section className="space-y-5">
        <p className="eyebrow">Flush Mount Vent Covers</p>
        <h1 className="page-title">Custom vent covers made from the floor so the vent disappears instead of sticking out.</h1>
        <p className="page-lead">
          A stock vent cover in a hardwood floor is one of the fastest ways to ruin the room. We make flush mount vent covers from the customer&apos;s actual flooring material so the finished floor looks complete, not interrupted.
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
            Customers notice vent covers. Usually for the wrong reason.
          </h2>
          <p className="text-base leading-7 text-stone-600">
            Even when the hardwood floor looks exceptional, a metal or plastic vent interrupts the visual flow immediately. It&apos;s a small detail that draws the wrong kind of attention.
          </p>
          <p className="text-base leading-7 text-stone-600">
            We make them from the project flooring so the vent reads as part of the floor instead of a compromise.
          </p>
        </div>
        <div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-6 space-y-3">
          <p className="eyebrow">Best fit for</p>
          <ul className="space-y-3 text-sm leading-6 text-stone-600">
            <li>• Flooring stores and installers who want the finished room to look complete, not patched.</li>
            <li>• Contractors where finish quality matters and generic vents are not good enough.</li>
            <li>• Trade buyers who want matching vent covers as part of a complete flooring package.</li>
          </ul>
        </div>
      </section>

      <section className="rounded-[2rem] bg-stone-900 px-8 py-10 text-white">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight">Need pricing for a matching vent cover?</h2>
            <p className="max-w-2xl text-base leading-7 text-stone-300">
              Send the job details and flooring information — we&apos;ll quote it.
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
