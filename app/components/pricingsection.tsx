import PricingCard from "./pricingcard";
export default function PricingSection() {
  return(
    <section className="min-h-[80vh] flex flex-col justify-center w-full px-4 lg:w-[90%] 2xl:w-[80%] mx-auto py-16 md:py-20 lg:py-24">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-6 md:mb-8 lg:mb-10 leading-tight">PREMIUM PARTNERSHIP WITHOUT THE PREMIUM COST</h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-3">
        <PricingCard
          title="LUMP-SUM"
          price="$3K"
          subprice= "+ $30/mo"
          isAlt={false}
        />
        <PricingCard
          title="MONTHLY"
          price="$200"
          subprice= "/mo"
          isAlt={true}
        />
        <PricingCard
          title="E-COMMERCE"
          price="$8K"
          subprice= " starting"
          isAlt={false}
        />
      </div>
    </section>
  );
}