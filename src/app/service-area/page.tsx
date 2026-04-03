import Link from "next/link";

const areas = [
  "Northern Virginia",
  "Washington area",
  "Trade buyers within practical service reach of current operations",
];

export const metadata = {
  title: "Service Area | Custom Stair Treads, Stair Nosings, and Vent Covers in Northern Virginia",
  description:
    "Custom Stair House serves Northern Virginia and the Washington area with custom stair treads, stair nosings, and vent covers made to match hardwood flooring.",
};

export default function ServiceAreaPage() {
  return (
    <div className="page-shell gap-14">
      <section className="space-y-5">
        <p className="eyebrow">Service Area</p>
        <h1 className="page-title">Custom stair treads, stair nosings, and vent covers for Northern Virginia and the Washington area.</h1>
        <p className="page-lead">
          Custom Stair House serves Northern Virginia and the Washington area with exact-match wood flooring accessories built for flooring stores, installers, and trade buyers.
        </p>
      </section>

      <section className="rounded-[2rem] border border-stone-200 bg-white p-8">
        <p className="eyebrow">Current focus</p>
        <ul className="mt-4 grid gap-3 text-sm leading-6 text-stone-600 md:grid-cols-2">
          {areas.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-[2rem] border border-stone-200 bg-stone-50 p-8">
        <p className="eyebrow">SEO note</p>
        <p className="mt-3 max-w-3xl text-base leading-7 text-stone-600">
          Later, this page can expand into city-specific or area-specific pages if the business earns enough proof, demand, and operational readiness to support them honestly.
        </p>
      </section>

      <section className="rounded-[2rem] bg-stone-900 px-8 py-10 text-white">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="space-y-3">
            <p className="eyebrow text-stone-300">CTA</p>
            <h2 className="text-3xl font-semibold tracking-tight">Not sure if your project is in range?</h2>
            <p className="max-w-2xl text-base leading-7 text-stone-300">
              Send the project details and location and we can clarify fit quickly.
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
