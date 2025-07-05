import Button from './button';
import ButtonSecondary from './buttonsecondary';
import FeatureCard from './featurecard';

type PricingCardProps = {
  title: string;
  price: string;
  subprice: string;
  isAlt: boolean;
  
};

export default function PricingCard({title, price, subprice, isAlt}: PricingCardProps){

  return (
    <div className={`${isAlt ? "bg-[var(--primary-color)]" : "bg-[var(--primary-white)]"} w-full max-w-[430px] flex flex-col sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] py-4 mx-auto border-[var(--primary-color)] border-5 rounded-[20px]`}>
      <div className={`${isAlt ? "text-[var(--primary-white)]" : ""} text-center text-3xl md:text-4xl font-black w-full mb-4 md:mb-6`}>{title}</div>

      <FeatureCard
        description="Web Hosting"
        hasCheckmark={true}
        isAlt={isAlt}
      />
      <FeatureCard
        description="Domain Management"
        hasCheckmark={true}
        isAlt={isAlt}
      />
      <FeatureCard
        description="Handcrafted Designs"
        hasCheckmark={true}
        isAlt={isAlt}
      />
      <FeatureCard
        description="Reliable Partnership"
        hasCheckmark={true}
        isAlt={isAlt}
      />
      <FeatureCard
        description="Unlimited Edits"
        hasCheckmark={true}
        isAlt={isAlt}
      />
      {isAlt &&
      <>
        <FeatureCard
          description="Lifetime Updates"
          hasCheckmark={true}
          isAlt={isAlt}
        />
        <FeatureCard
          description="On-Demand Support"
          hasCheckmark={true}
          isAlt={isAlt}
        />
      </>
      }
      {!isAlt &&
      <>
        <FeatureCard
          description="Lifetime Updates"
          hasCheckmark={false}
          isAlt={isAlt}
        />
        <FeatureCard
          description="On-Demand Support"
          hasCheckmark={false}
          isAlt={isAlt}
        />
      </>
      }

      <div className="flex items-center justify-center w-full mt-auto">
        <div className={`${isAlt ? "text-[var(--primary-white)]" : ""} text-2xl md:text-3xl lg:text-[36px] mr-2 font-black`}>{price}</div>
        <div className={`text-lg md:text-xl lg:text-[24px] mt-1 ${isAlt ? "text-[var(--primary-white)]/70" : "text-black/70"} font-semibold`}>{subprice}</div>
      </div>

      {isAlt &&
      <div className="mx-auto mb-2 md:mb-4">
        <Button
          label="GET STARTED"
          link="/contact">
        </Button>
      </div>
      }
      {!isAlt &&
      <div className="mx-auto mb-2 md:mb-4">
        <ButtonSecondary
          label="GET STARTED"
          link="/contact">
        </ButtonSecondary>
      </div>
      }
    </div>
  )
}