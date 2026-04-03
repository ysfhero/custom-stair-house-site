import Link from "next/link";
import { QuoteForm } from "./quote-form";

const whatToSend = [
  "What product you need priced: stair treads, stair nosings, vent covers, or another matching accessory.",
  "Basic project details and timeline.",
  "Any measurements, photos, or job notes you already have.",
  "Whether you are a flooring store, installer, contractor, or another buyer type.",
  "Whether flooring material is available for matching.",
];

const bestFor = [
  "Flooring stores and trade buyers who want repeat ordering clarity.",
  "Installers who need a matching accessory solution for a live job.",
  "Strong-fit buyers in Northern Virginia and the Washington area.",
];

export const metadata = {
  title: "Request a Quote",
  description:
    "Request pricing or send project details for custom stair treads, stair nosings, and vent covers.",
};

export default function RequestAQuotePage() {
  return (
    <div className="page-shell gap-14">
      <section className="space-y-5">
        <p className="eyebrow">Request a Quote</p>
        <h1 className="page-title">Send the project details and we’ll point you to the next step.</h1>
        <p className="page-lead">
          This page is now wired with a real submission flow. It is still simple by design: enough information to move the conversation forward fast without creating a giant form.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-8">
          <p className="eyebrow">Quote request form</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-stone-950">Tell us what you need.</h2>
          <p className="mt-4 text-base leading-7 text-stone-600">
            Fill in the core project details. Once submitted, the site sends you to a thank-you page and the request is captured server-side.
          </p>
          <div className="mt-6">
            <QuoteForm />
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[2rem] border border-stone-200 bg-stone-50 p-6">
            <p className="eyebrow">What to send</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-stone-600">
              {whatToSend.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-white p-6">
            <p className="eyebrow">Best fit</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-stone-600">
              {bestFor.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="card">
          <h3 className="text-xl font-semibold text-stone-950">Service area</h3>
          <p className="mt-3 text-sm leading-6 text-stone-600">
            Serving Northern Virginia and the Washington area.
          </p>
        </div>
        <div className="card">
          <h3 className="text-xl font-semibold text-stone-950">Trade / dealer inquiry</h3>
          <p className="mt-3 text-sm leading-6 text-stone-600">
            If you are a flooring store or repeat trade buyer, mention that in the quote request so the conversation starts in the right frame.
          </p>
        </div>
        <div className="card">
          <h3 className="text-xl font-semibold text-stone-950">Current form behavior</h3>
          <p className="mt-3 text-sm leading-6 text-stone-600">
            Requests are validated server-side and redirected to a thank-you page. The next upgrade would be connecting email, CRM, or notification delivery.
          </p>
        </div>
      </section>

      <section className="rounded-[2rem] bg-stone-900 px-8 py-10 text-white">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="space-y-3">
            <p className="eyebrow text-stone-300">Alternative path</p>
            <h2 className="text-3xl font-semibold tracking-tight">Are you a flooring store exploring a repeat relationship?</h2>
            <p className="max-w-2xl text-base leading-7 text-stone-300">
              See the dealer-focused page to understand how this can work as a recurring supply relationship, not just a one-off order.
            </p>
          </div>
          <Link href="/for-flooring-stores" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-950 transition hover:bg-stone-200">
            For Flooring Stores
          </Link>
        </div>
      </section>
    </div>
  );
}
