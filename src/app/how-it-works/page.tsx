import Link from "next/link";

const steps = [
  {
    title: "Send the job details",
    text: "Start with the product needed, the project type, and any measurements, notes, or photos you already have.",
  },
  {
    title: "Provide the flooring material",
    text: "Because the goal is an exact match, the flooring material tied to the project is a key part of the process.",
  },
  {
    title: "Fabrication",
    text: "Custom Stair House fabricates the accessory around the actual matching requirement instead of forcing a generic substitute.",
  },
  {
    title: "Pickup or delivery",
    text: "Once complete, the order moves to the handoff stage so the project can keep moving.",
  },
];

export const metadata = {
  title: "How It Works",
  description:
    "See how Custom Stair House handles quote requests, flooring material intake, fabrication, and delivery.",
};

export default function HowItWorksPage() {
  return (
    <div className="page-shell gap-14">
      <section className="space-y-5">
        <p className="eyebrow">How It Works</p>
        <h1 className="page-title">A simple process that makes ordering feel clear and low-friction.</h1>
        <p className="page-lead">
          This page exists to remove uncertainty. Buyers should understand fast what to send, how the match works, and what happens next.
        </p>
      </section>

      <section className="grid gap-4">
        {steps.map((step, index) => (
          <div key={step.title} className="rounded-[2rem] border border-stone-200 bg-white p-6">
            <div className="flex items-start gap-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-900 text-sm font-semibold text-white">
                {index + 1}
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-stone-950">{step.title}</h2>
                <p className="mt-3 text-base leading-7 text-stone-600">{step.text}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-6">
          <p className="eyebrow">Typical fit</p>
          <p className="mt-3 text-base leading-7 text-stone-600">
            Best for flooring stores, installers, and trade buyers who want a cleaner accessory solution tied to the real flooring material.
          </p>
        </div>
        <div className="rounded-[2rem] border border-stone-200 bg-white p-6">
          <p className="eyebrow">Turnaround</p>
          <p className="mt-3 text-base leading-7 text-stone-600">
            Typical turnaround is 1–4 business days depending on production load, order complexity, and scheduling.
          </p>
        </div>
      </section>

      <section className="rounded-[2rem] bg-stone-900 px-8 py-10 text-white">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="space-y-3">
            <p className="eyebrow text-stone-300">CTA</p>
            <h2 className="text-3xl font-semibold tracking-tight">Ready to start a quote?</h2>
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
