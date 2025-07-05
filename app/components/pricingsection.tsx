import PricingCard from "./pricingcard";
export default function PricingSection() {
  return(
    <section className="w-full px-4  sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[75%] mx-auto my-12 md:my-16 lg:my-20">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center mb-6 md:mb-8 lg:mb-10 leading-tight">PREMIUM PARTNERSHIP <br/>WITHOUT THE PREMIUM COST</h1>
      <div className="flex flex-col md:flex-row md:flex-wrap xl:flex-nowrap justify-center md:justify-between items-center gap-5">
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