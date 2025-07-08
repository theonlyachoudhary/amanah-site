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

  const getCardStyles = () => {
    const baseStyles = "flex flex-col h-full";
    if (isAlt) {
      return `${baseStyles} relative rounded-3xl p-8 shadow-2xl ring-1 ring-gray-900/10 sm:p-10`;
    } else if (title === "LUMP-SUM") {
      return `${baseStyles} rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 lg:rounded-tr-none lg:rounded-bl-3xl`;
    } else {
      return `${baseStyles} rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10 lg:rounded-tl-none lg:rounded-br-3xl`;
    }
  };

  const getDescription = () => {
    switch (title) {
      case "LUMP-SUM":
        return "Perfect for businesses ready to launch with a complete website solution.";
      case "MONTHLY":
        return "Premium quality with no upfront costs and full support.";
      case "E-COMMERCE":
        return "Complete e-commerce solution with payment processing and inventory management.";
      default:
        return "Custom solution designed for your specific needs.";
    }
  };

  return (
    <div className={getCardStyles()} style={{backgroundColor: isAlt ? 'var(--primary-color)' : 'var(--primary-white)'}}>
      <h3 className="text-base/7 font-semibold" style={{color: isAlt ? 'var(--primary-white)' : 'var(--primary-color)'}}>{title}</h3>
      <p className="mt-4 flex items-baseline gap-x-2">
        <span className={`text-5xl font-semibold tracking-tight ${isAlt ? 'text-white' : 'text-gray-900'}`}>{price}</span>
        <span className={`text-base ${isAlt ? 'text-white/70' : 'text-gray-500'}`}>{subprice}</span>
      </p>
      <p className={`mt-6 text-base/7 ${isAlt ? 'text-white/80' : 'text-gray-600'}`}>{getDescription()}</p>
      
      <ul role="list" className={`mt-8 space-y-3 text-sm/6 ${isAlt ? 'text-white/80' : 'text-gray-600'} sm:mt-10`}>
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
      </ul>

      <div className="mt-auto pt-8 sm:pt-10">
        {isAlt ? (
          <div className="flex justify-center">
            <Button
              label="Get started today"
              link="/contact"
            />
          </div>
        ) : (
          <div className="flex justify-center">
            <ButtonSecondary
              label="Get started today"
              link="/contact"
            />
          </div>
        )}
      </div>
    </div>
  )
}