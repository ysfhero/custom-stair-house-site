import Link from "next/link";

const testimonials = [
  {
    quote: "We've been sending stair nosing work to Custom Stair House for six months now. Turnaround is fast and the match is always right. Our customers stop noticing the stair — which is exactly what we want.",
    author: "Mark T.",
    role: "Owner, flooring store — Northern Virginia",
  },
  {
    quote: "I was skeptical at first, but the first order came back looking better than anything I'd sourced before. We now route all our custom stair work through them.",
    author: "James R.",
    role: "Flooring installer — Sterling, VA",
  },
];

export const metadata = {
  title: "For Flooring Stores | Exact-Match Stair Accessories and Repeat Ordering",
  description:
    "A reliable local supplier for flooring stores that need exact-match stair treads, nosings, and vent covers made from customer flooring material.",
};

export default function ForFlooringStoresPage() {
  return (
    <div className="page-shell gap-14">

      <section className="space-y-5">
        <p className="eyebrow">For Flooring Stores</p>
        <h1 className="page-title">A local matching-accessory supplier built for repeat trade orders.</h1>
        <p className="page-lead">
          If your store regularly fields requests for stair treads, nosings, or vent covers that actually match the floor, we can be the source you call every time. Fast turnaround. No stain-match guesswork. Built from the customer&apos;s actual flooring material.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/request-a-quote" className="cta-primary">
            Ask About Dealer Pricing
          </Link>
          <Link href="/how-it-works" className="cta-secondary">
            How It Works
          </Link>
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-stone-950">
            Flooring stores are our best customer.
          </h2>
          <p className="text-base leading-7 text-stone-600">
            You sell the floor. Your customer wants the stair to match. The manufacturer doesn&apos;t have a great answer. You end up stain-matching it in-house or sending them somewhere generic.
          </p>
          <p className="text-base leading-7 text-stone-600">
            We exist to fix that. Bring us the flooring material from the job and we fabricate the tread, nosing, or vent cover from it. The match is real because it&apos;s made from the same floor.
          </p>
          <p className="text-base leading-7 text-stone-600">
            The stores that use us most keep coming back because it solves the same problem on every job without the scramble.
          </p>
        </div>
        <div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-6 space-y-4">
          <p className="eyebrow">How it works for stores</p>
          <ol className="space-y-4 text-sm leading-6 text-stone-600">
            <li className="flex gap-3"><span className="font-semibold text-stone-900">1.</span> Tell us what the job needs — tread, nosing, vent, or all three.</li>
            <li className="flex gap-3"><span className="font-semibold text-stone-900">2.</span> Drop off the flooring material from the project.</li>
            <li className="flex gap-3"><span className="font-semibold text-stone-900">3.</span> We fabricate and have it ready in 1–4 business days.</li>
            <li className="flex gap-3"><span className="font-semibold text-stone-900">4.</span> Pick up, deliver to your customer, close the job clean.</li>
          </ol>
        </div>
      </section>

      <section className="space-y-6">
        <p className="eyebrow">What flooring stores say</p>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <div key={t.author} className="rounded-[2rem] border border-stone-200 bg-white p-8 space-y-4">
              <p className="text-base leading-7 text-stone-700">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <p className="text-sm font-semibold text-stone-950">{t.author}</p>
                <p className="text-sm text-stone-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] bg-stone-900 px-8 py-10 text-white">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight">Ready to try a first order?</h2>
            <p className="max-w-2xl text-base leading-7 text-stone-300">
              Send us your next matching-accessory job. If the fit is strong, we can talk about pricing for repeat work.
            </p>
          </div>
          <Link href="/request-a-quote" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-950 transition hover:bg-stone-200 whitespace-nowrap">
            Ask About Dealer Pricing
          </Link>
        </div>
      </section>

    </div>
  );
}
