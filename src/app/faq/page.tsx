export const metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about ordering, turnaround time, materials, service area, and fit.",
};

export default function FaqPage() {
  return (
    <div className="page-shell">
      <p className="eyebrow">FAQ</p>
      <h1 className="page-title">Answers to the questions buyers ask before they order.</h1>
      <p className="page-lead">
        This page will gather recurring questions around turnaround, required materials, quoting,
        service area, and who the service is best for.
      </p>
    </div>
  );
}
