import PricingCard from "./pricingcard";

export default function PricingSection() {
  return(
    <section id="pricing" className="relative isolate bg-[var(--primary-white)] px-6 py-16 sm:py-20 lg:px-8">
      {/* Decorative background blur */}
      <div className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl" aria-hidden="true">
        <div className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[var(--primary-color)] opacity-30" style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
      </div>
      
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-bold text-lg sm:text-xl lg:text-2xl text-black/80">PRICING</h2>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">PREMIUM PARTNERSHIP WITHOUT THE PREMIUM COST</p>
      </div>
      <p className="mx-auto mt-4 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">Enterprise-quality websites built by our in-house team. Custom solutions designed for your success, with transparent pricing and lifelong partnership and support.</p>
      
      <div className="mx-auto mt-12 grid max-w-lg grid-cols-1 items-stretch gap-y-6 sm:mt-16 sm:gap-y-0 lg:max-w-6xl lg:grid-cols-3">
        <div className="lg:scale-95 relative z-10 flex">
          <PricingCard
            title="LUMP-SUM"
            price="$3K"
            subprice="+ $30/mo"
            isAlt={false}
          />
        </div>
        <div className="lg:scale-110 relative z-20 flex">
          <PricingCard
            title="MONTHLY"
            price="$200"
            subprice="/mo"
            isAlt={true}
          />
        </div>
        <div className="lg:scale-95 relative z-10 flex">
          <PricingCard
            title="E-COMMERCE"
            price="$8K"
            subprice=" starting"
            isAlt={false}
          />
        </div>
      </div>
    </section>
  );
}