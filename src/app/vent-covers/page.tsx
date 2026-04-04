import Link from "next/link";

const useCases = [
  "Jobs where the floor looks great but a generic vent would ruin the finished room.",
  "Flooring stores and installers who want the vent detail to disappear into the floor instead of calling attention to itself.",
  "Trade buyers who care about finish quality and do not want one cheap-looking detail dragging down the whole install.",
];

const reasons = [
  {
    title: "Stop breaking the visual flow",
    text: "A matching flush mount vent cover keeps the room reading like one finished surface instead of a good floor interrupted by the wrong part.",
  },
  {
    title: "Better than stock vent covers",
    text: "Using the project flooring material gives you a far cleaner result than dropping in a generic vent and hoping nobody notices.",
  },
  {
    title: "Built for finish-sensitive jobs",
    text: "For flooring stores, installers, and trade buyers, matching vents are one of the details that make the whole job feel complete instead of compromised.",
  },
];

export const metadata = {
  title: "Flush Mount Vent Covers | Custom Wood Vent Covers to Match Flooring",
  description:
    "Custom wood vent covers and flush mount vent covers made from project flooring material for a cleaner finished look.",
};

export default function VentCoversPage() {
  return (
    <div className="page-shell gap-14">
      <section className="space-y-5">
        <p className="eyebrow">Flush Mount Vent Covers</p>
        <h1 className="page-title">Custom wood vent covers made from the project floor so the vent does not ruin the room.</h1>
        <p className="page-lead">
          Custom Stair House makes custom wood vent covers and flush mount vent covers from the flooring tied to the job, so the finished room looks clean, complete, and consistent instead of getting broken up by an obvious stock vent.
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
            One bad vent cover can make a finished floor feel patched together.
          </h2>
          <p className="mt-5 text-base leading-7 text-stone-600">
            Even when the wood floor itself looks great, the wrong vent cover can break the visual flow immediately. Customers notice it. Installers notice it. And the room stops feeling complete.
          </p>
          <p className="mt-4 text-base leading-7 text-stone-600">
            Matching vent covers solve that by keeping the vent detail aligned with the actual floor instead of settling for something that looks close enough.
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
              Send the job details and flooring information, and we&apos;ll tell you what is needed to quote it properly.
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
