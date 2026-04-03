import Link from "next/link";

export const metadata = {
  title: "Thank You",
  description: "Thanks for contacting Custom Stair House.",
};

export default function ThankYouPage() {
  return (
    <div className="page-shell gap-10">
      <section className="rounded-[2rem] border border-stone-200 bg-white p-10">
        <p className="eyebrow">Thank You</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-stone-950">
          Your request has been sent.
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-600">
          Thanks for reaching out. The next step is a review of the project details so the right follow-up can happen.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link href="/" className="cta-primary">
            Back to Home
          </Link>
          <Link href="/products" className="cta-secondary">
            View Products
          </Link>
        </div>
      </section>
    </div>
  );
}
