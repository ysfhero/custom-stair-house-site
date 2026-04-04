import Link from "next/link";

const steps = [
  {
    title: "Send the job details",
    text: "Start with what you need: stair tread, stair nosing, vent cover, or another matching accessory. Include measurements, photos, and anything that helps us understand the job faster.",
  },
  {
    title: "Provide the flooring material",
    text: "Because the goal is an exact match, the flooring tied to the project matters. That is what lets us build around the real floor instead of guessing at the finish.",
  },
  {
    title: "We fabricate the match",
    text: "Custom Stair House builds the accessory around the actual material requirement instead of forcing a generic substitute or risky stain-match workaround.",
  },
  {
    title: "Pickup or delivery",
    text: "Once complete, the order moves to handoff so your store, installer, or customer can keep the project moving.",
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
        <h1 className="page-title">A simple process for getting the match right without slowing down the job.</h1>
        <p className="page-lead">
          The goal is straightforward: make it easy for flooring stores, installers, and trade buyers to get the right matching accessory without unnecessary back-and-forth, guesswork, or delay.
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
          <p className="eyebrow">Best fit</p>
          <p className="mt-3 text-base leading-7 text-stone-600">
            Best for flooring stores, installers, and repeat trade buyers who want a dependable answer when the finishing detail has to actually match the floor.
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
            <h2 className="text-3xl font-semibold tracking-tight">Ready to price a job?</h2>
            <p className="max-w-2xl text-base leading-7 text-stone-300">
              Send the project details and we&apos;ll tell you what is needed next to quote it properly.
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
