import Link from "next/link";

export const metadata = {
  title: "How It Works | Custom Stair House",
  description:
    "How Custom Stair House handles orders for exact-match stair treads, nosings, and vent covers.",
};

export default function HowItWorksPage() {
  return (
    <div className="page-shell gap-14">

      <section className="space-y-5">
        <p className="eyebrow">How It Works</p>
        <h1 className="page-title">Three steps. 1–4 business days.</h1>
        <p className="page-lead">
          Built to be simple for flooring stores, installers, and trade buyers who need the right match without slowing down the job.
        </p>
      </section>

      <section className="grid gap-4">
        {[
          {
            title: "Tell us what you need",
            text: "Send the product type, measurements, and any photos. The more we know upfront, the faster we can quote it.",
          },
          {
            title: "Provide the flooring material",
            text: "This is what makes the match real. We build from the actual project floor instead of guessing at the finish. Drop it off or coordinate delivery.",
          },
          {
            title: "We fabricate it",
            text: "Typical turnaround is 1–4 business days depending on the order and production load. We keep you posted.",
          },
          {
            title: "Pickup or delivery",
            text: "Once it's ready, coordinate pickup or we can discuss delivery. The job keeps moving.",
          },
        ].map((step, index) => (
          <div key={step.title} className="rounded-[2rem] border border-stone-200 bg-white p-6">
            <div className="flex items-start gap-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-900 text-sm font-semibold text-white">
                {index + 1}
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-stone-950">{step.title}</h2>
                <p className="mt-2 text-base leading-7 text-stone-600">{step.text}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-6">
          <p className="eyebrow">Turnaround</p>
          <p className="mt-3 text-base leading-7 text-stone-600">
            Typical turnaround is 1–4 business days depending on order complexity and production load. We aim to keep jobs moving.
          </p>
        </div>
        <div className="rounded-[2rem] border border-stone-200 bg-white p-6">
          <p className="eyebrow">Best fit</p>
          <p className="mt-3 text-base leading-7 text-stone-600">
            Flooring stores, installers, and repeat trade buyers in Northern Virginia and the DC area who want a dependable local source for matching accessories.
          </p>
        </div>
      </section>

      <section className="rounded-[2rem] bg-stone-900 px-8 py-10 text-white">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight">Ready to price a job?</h2>
            <p className="max-w-2xl text-base leading-7 text-stone-300">
              Send the project details and we&apos;ll tell you what&apos;s needed to quote it properly.
            </p>
          </div>
          <Link href="/request-a-quote" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-950 transition hover:bg-stone-200 whitespace-nowrap">
            Request a Quote
          </Link>
        </div>
      </section>

    </div>
  );
}
