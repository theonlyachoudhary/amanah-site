import PricingPackagesTable from "./PricingPackagesTable";

export default function PricingSection() {
  return (
    <section id="pricing" className="relative isolate bg-[var(--primary-white)] px-6 py-16 sm:py-20 lg:px-8">
      <PricingPackagesTable />
    </section>
  );
}