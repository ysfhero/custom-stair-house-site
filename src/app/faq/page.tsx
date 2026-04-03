const faqs = [
  {
    question: "What do I need to send to request pricing?",
    answer:
      "Start with the product needed, project details, measurements if available, and whether the flooring material is available for matching.",
  },
  {
    question: "Who is this best for?",
    answer:
      "Best for flooring stores, installers, and trade buyers who need exact-match accessories for wood-floor projects.",
  },
  {
    question: "How does the matching process work?",
    answer:
      "Custom Stair House works from the flooring material tied to the project so the accessory aligns more closely with the actual floor.",
  },
  {
    question: "What is the typical turnaround time?",
    answer:
      "Typical turnaround is 1–4 business days depending on production load, order complexity, and scheduling.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "Primary service focus is Northern Virginia and the Washington area.",
  },
];

export const metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about ordering, turnaround time, materials, service area, and fit.",
};

export default function FaqPage() {
  return (
    <div className="page-shell gap-14">
      <section className="space-y-5">
        <p className="eyebrow">FAQ</p>
        <h1 className="page-title">Answers to the questions buyers ask before they order.</h1>
        <p className="page-lead">
          This page reduces friction by handling common questions around fit, quoting, timing, and service area.
        </p>
      </section>

      <section className="grid gap-4">
        {faqs.map((faq) => (
          <div key={faq.question} className="rounded-[2rem] border border-stone-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-stone-950">{faq.question}</h2>
            <p className="mt-3 text-base leading-7 text-stone-600">{faq.answer}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
