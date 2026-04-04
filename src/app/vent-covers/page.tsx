import Link from "next/link";

const useCases = [
  "Projects where visible floor vents need to match the surrounding wood floor instead of standing out.",
  "Flooring stores and installers who want the finished room to look complete, not interrupted by a generic vent.",
  "Trade buyers who want a cleaner vent detail for jobs where finish quality matters.",
];

const reasons = [
  {
    title: "Keep the floor visually consistent",
    text: "A matching flush mount vent cover helps the room read as one finished surface instead of a good floor interrupted by the wrong detail.",
  },
  {
    title: "Better than a generic vent drop-in",
    text: "Using the actual flooring material creates a much stronger visual result than trying to make a stock vent look close enough.",
  },
  {
    title: "Useful on finish-sensitive jobs",
    text: "For stores, installers, and trade buyers, matching vents are one of the details that make the whole job feel more premium.",
  },
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
        <h1 className="page-title">Custom wood vent covers made to match the floor, not interrupt it.</h1>
        <p className="page-lead">
          Custom Stair House makes custom wood vent covers and flush mount vent covers from flooring material tied to the project, so the finished floor looks cleaner, more complete, and less broken up by a generic vent.
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
        <div className="rounded-[2rem] border border-stone-200 bg-white p-6">
          <p className="eyebrow">Why they matter</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-stone-950">
            A generic vent can ruin a beautiful floor faster than people expect.
          </h2>
          <p className="mt-5 text-base leading-7 text-stone-600">
            Even when the floor itself looks great, the wrong vent cover can break the visual flow immediately. Matching vent covers help the floor read as finished instead of patched together.
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

      <section className="grid gap-6 md:grid-cols-3">
        {reasons.map((item) => (
          <div key={item.title} className="card">
            <h3 className="text-xl font-semibold text-stone-950">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-stone-600">{item.text}</p>
          </div>
        ))}
      </section>

      <section className="rounded-[2rem] bg-stone-900 px-8 py-10 text-white">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="space-y-3">
            <p className="eyebrow text-stone-300">CTA</p>
            <h2 className="text-3xl font-semibold tracking-tight">Need pricing for a matching vent cover?</h2>
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
