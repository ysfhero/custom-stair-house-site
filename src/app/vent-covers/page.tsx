import Link from "next/link";

const useCases = [
  "Projects where visible floor vents need to match the surrounding wood floor more cleanly.",
  "Trade buyers who want the vent detail to feel intentional instead of patched together.",
  "Accessory add-ons that improve the final finished look of the project.",
];

export const metadata = {
  title: "Flush Mount Vent Covers | Custom Wood Vent Covers to Match Flooring",
  description:
    "Custom wood vent covers and flush mount vent covers made to match hardwood flooring for a cleaner finished look.",
};

export default function VentCoversPage() {
  return (
    <div className="page-shell gap-14">
      <section className="space-y-5">
        <p className="eyebrow">Flush Mount Vent Covers</p>
        <h1 className="page-title">Custom wood vent covers that match hardwood floors more cleanly.</h1>
        <p className="page-lead">
          Custom Stair House makes custom wood vent covers and flush mount vent covers that match the surrounding flooring material so the finished floor looks complete instead of broken up by a generic vent.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-6">
          <p className="eyebrow">Why they matter</p>
          <p className="mt-3 text-base leading-7 text-stone-600">
            Even when the floor itself looks strong, an unmatched vent can break the visual flow. Matching vent covers help the whole result feel more finished.
          </p>
        </div>
        <div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-6">
          <p className="eyebrow">Best fit</p>
          <ul className="mt-3 space-y-3 text-sm leading-6 text-stone-600">
            {useCases.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-[2rem] bg-stone-900 px-8 py-10 text-white">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="space-y-3">
            <p className="eyebrow text-stone-300">CTA</p>
            <h2 className="text-3xl font-semibold tracking-tight">Need a vent cover quote?</h2>
            <p className="max-w-2xl text-base leading-7 text-stone-300">
              Send the project details and we can tell you what is needed next.
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
