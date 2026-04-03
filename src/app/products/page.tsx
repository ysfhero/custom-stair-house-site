import Link from "next/link";

const products = [
  {
    title: "Custom Stair Treads",
    text: "High-value exact-match stair components for projects where finish quality matters.",
    fit: "Best for projects where the stair finish needs to look intentional and clean.",
    href: "/stair-treads",
  },
  {
    title: "Stair Nosings",
    text: "A repeat-use solution for one of the most common wood-flooring finishing problems.",
    fit: "Best for stores and installers who regularly deal with transition mismatch issues.",
    href: "/stair-nosings",
  },
  {
    title: "Flush Mount Vent Covers",
    text: "Matching vent covers that support a more complete finished look.",
    fit: "Best as a supporting accessory on projects where visual consistency matters.",
    href: "/vent-covers",
  },
];

export const metadata = {
  title: "Products",
  description:
    "Explore Custom Stair House products including stair treads, stair nosings, vent covers, and matching wood flooring accessories.",
};

export default function ProductsPage() {
  return (
    <div className="page-shell gap-14">
      <section className="space-y-5">
        <p className="eyebrow">Products</p>
        <h1 className="page-title">Matching wood flooring accessories built around the finished result.</h1>
        <p className="page-lead">
          Custom Stair House focuses on a tight group of products that solve real finishing problems for flooring stores, installers, and trade buyers.
        </p>
      </section>

      <section className="card-grid">
        {products.map((item) => (
          <div key={item.href} className="card flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-stone-950">{item.title}</h2>
            <p className="text-sm leading-6 text-stone-600">{item.text}</p>
            <p className="text-sm leading-6 text-stone-600">{item.fit}</p>
            <div className="mt-auto flex gap-4">
              <Link href={item.href} className="text-sm font-semibold text-stone-900">
                Learn more →
              </Link>
            </div>
          </div>
        ))}
      </section>

      <section className="rounded-[2rem] border border-stone-200 bg-white p-8">
        <div className="max-w-3xl space-y-4">
          <p className="eyebrow">Buying logic</p>
          <h2 className="text-3xl font-semibold tracking-tight text-stone-950">
            The product line stays narrow on purpose.
          </h2>
          <p className="text-base leading-7 text-stone-600">
            This is not a generic custom woodworking catalog. The offer is built around exact-match accessories that improve how a wood-floor job finishes.
          </p>
        </div>
      </section>

      <section className="rounded-[2rem] bg-stone-900 px-8 py-10 text-white">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="space-y-3">
            <p className="eyebrow text-stone-300">Next step</p>
            <h2 className="text-3xl font-semibold tracking-tight">Need pricing on a specific product?</h2>
            <p className="max-w-2xl text-base leading-7 text-stone-300">
              Send the project details and we can point you to the right next step quickly.
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
