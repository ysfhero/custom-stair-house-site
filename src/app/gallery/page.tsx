import Link from "next/link";

const plannedAssets = [
  "Installed project photos",
  "Close-up product photography",
  "Before/after examples",
  "Dealer sample photos",
  "Finished stair tread and stair nosing details",
  "Customer or dealer testimonials",
];

export const metadata = {
  title: "Gallery",
  description:
    "Installed project photos, product close-ups, and proof assets for Custom Stair House.",
};

export default function GalleryPage() {
  return (
    <div className="page-shell gap-14">
      <section className="space-y-5">
        <p className="eyebrow">Gallery</p>
        <h1 className="page-title">Proof should grow here over time.</h1>
        <p className="page-lead">
          This page is the future visual trust hub for Custom Stair House. Early on, even a smaller proof library is better than none.
        </p>
      </section>

      <section className="rounded-[2rem] border border-dashed border-stone-300 bg-white p-10 text-center">
        <p className="eyebrow">Proof section placeholder</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-stone-950">Gallery assets will be added here.</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-stone-600">
          The right next move is collecting a small but real set of product and installed-job images so the site can start showing proof instead of only describing it.
        </p>
      </section>

      <section className="rounded-[2rem] border border-stone-200 bg-stone-50 p-8">
        <p className="eyebrow">What to add first</p>
        <ul className="mt-4 grid gap-3 text-sm leading-6 text-stone-600 md:grid-cols-2">
          {plannedAssets.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-[2rem] bg-stone-900 px-8 py-10 text-white">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="space-y-3">
            <p className="eyebrow text-stone-300">CTA</p>
            <h2 className="text-3xl font-semibold tracking-tight">Need pricing before the full proof library is live?</h2>
            <p className="max-w-2xl text-base leading-7 text-stone-300">
              Reach out anyway. Samples and direct conversations can do the heavy lifting while the proof stack grows.
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
