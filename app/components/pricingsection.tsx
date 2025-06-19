import PricingCard from "./pricingcard";
export default function PricingSection() {
  return(
    <section className="w-[70%] mx-auto my-20">
      <h1 className="text-[48px] font-black text-center mb-10 leading-tight">PREMIUM PARTNERSHIP <br/>WITHOUT THE PREMIUM COST</h1>
      <div className="flex flex-col md:flex-row justify-between items-center gap-5">
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