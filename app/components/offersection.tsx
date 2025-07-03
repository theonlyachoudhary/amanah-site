import ButtonSecondary from './buttonsecondary';
import CheckCard from './checkcard';
type OfferSectionProps = {
  title: string;
  subtitle: string;
  description: string;
};

export default function OfferSection({title, subtitle, description}: OfferSectionProps){
  return(
    <section className="w-full px-4 md:w-[85%] lg:w-[70%] mx-auto mt-16 md:mt-24 lg:mt-[150px] text-left">
      <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-6">
        <div className="w-full lg:w-[60%] flex flex-col flex-wrap gap-1">
          <h3 className="font-bold text-xl md:text-2xl lg:text-[32px] text-black/80 leading-tight">{subtitle}</h3>
          <h2 className="font-black text-3xl md:text-4xl lg:text-[48px] text-black leading-tight">{title}</h2>
          <p className="font-semibold text-base md:text-lg lg:text-[16px] text-black/65 mb-4 lg:mb-0">{description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-3 mt-4 lg:mt-6 justify-items-center sm:justify-items-start">
            <CheckCard
              title="Domain Management"
              description="We prefer to handle your domain for you, keeping your buisness safe from
              unexpected downtime and domain sniping."
            />
            <CheckCard
              title="100% Secure Hosting"
              description="We take care of everything behind the scenes—your site is hosted on secure, high-performance servers."
            />
            <CheckCard
              title="Simple Edits"
              description="Things change. So does the content of a website. We'll make any edits needed, as long as you're with us."
            />
            <CheckCard
              title="100% Long-Term Support"
              description="Once your site is live, we will never leave you hanging. We provide permanent support and maintenance for all our clients."
            />
          </div>
        </div>
        <div className="bg-[var(--primary-color)] w-full lg:w-[35%] h-[400px] sm:h-[500px] lg:h-[700px] rounded-[10px] lg:ml-auto shadow-lg order-first lg:order-last">
          {/* Additional content can go here */}
        </div>
      </div>
      <div className="flex justify-center mt-6 lg:mt-8">
        <ButtonSecondary
          label="Get Started"
          link="/signup"
        />
      </div>
    </section>
  );
}
