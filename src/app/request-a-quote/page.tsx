import Link from "next/link";
import { QuoteForm } from "./quote-form";

export const metadata = {
  title: "Request a Quote | Custom Stair House",
  description:
    "Request pricing for custom stair treads, stair nosings, and vent covers made from your flooring material.",
};

export default function RequestAQuotePage() {
  return (
    <div className="page-shell gap-14">

      <section className="space-y-5">
        <p className="eyebrow">Request a Quote</p>
        <h1 className="page-title">Tell us about the job and we&apos;ll get back to you with pricing.</h1>
        <p className="page-lead">
          Keep it simple — product type, measurements, and a note on timing. We&apos;ll take it from there.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-8">
          <p className="eyebrow">Quote request</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-stone-950">What do you need priced?</h2>
          <div className="mt-6">
            <QuoteForm />
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-6">
            <p className="eyebrow">What to include</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-stone-600">
              <li>• Product type: stair treads, nosings, vent covers, or other</li>
              <li>• Measurements and quantity</li>
              <li>• Photos if you have them</li>
              <li>• Timeline or any urgent constraints</li>
              <li>• Whether you&apos;re a flooring store, installer, or contractor</li>
            </ul>
          </div>
          <div className="rounded-[2rem] border border-stone-200 bg-white p-6">
            <p className="eyebrow">Service area</p>
            <p className="mt-3 text-sm leading-6 text-stone-600">
              Serving Northern Virginia and the Washington DC area.
            </p>
          </div>
          <div className="rounded-[2rem] border border-stone-200 bg-white p-6">
            <p className="eyebrow">Flooring store?</p>
            <p className="mt-3 text-sm leading-6 text-stone-600">
              Mention it in the form. We can discuss dealer pricing and repeat ordering if the fit is right.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] bg-stone-900 px-8 py-10 text-white">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight">Are you a flooring store?</h2>
            <p className="max-w-2xl text-base leading-7 text-stone-300">
              See the dealer page for info on repeat ordering and dealer pricing.
            </p>
          </div>
          <Link href="/for-flooring-stores" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-950 transition hover:bg-stone-200 whitespace-nowrap">
            For Flooring Stores
          </Link>
        </div>
      </section>

    </div>
  );
}
