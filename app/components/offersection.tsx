import ButtonSecondary from './buttonsecondary';
import CheckCard from './checkcard';
type OfferSectionProps = {
  title: string;
  subtitle: string;
  description: string;
};

export default function OfferSection({title, subtitle, description}: OfferSectionProps){
  return(
    <section className="min-h-[90vh] flex flex-col justify-center w-full px-4 md:w-[90%] 2xl:w-[80%] mx-auto py-16 md:py-20 lg:py-24 text-left">
      <div className="flex flex-col lg:flex-col xl:flex-row w-full gap-6 lg:gap-6">
        <div className="w-full xl:w-[60%] flex flex-col flex-wrap gap-1">
          <h3 className="font-bold text-lg sm:text-xl lg:text-2xl text-black/80 leading-none">{subtitle}</h3>
          <h2 className="font-black text-3xl sm:text-4xl lg:text-5xl leading-none text-black">{title}</h2>
          <p className="font-semibold text-sm sm:text-base md:text-lg text-black/65 mb-4 lg:mb-0">{description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4 lg:mt-6 justify-items-start">
            {/* Column 1: 100% Secure Hosting, 100% Long-Term Support */}
            <div className="flex flex-col gap-5">
              <CheckCard
                title="100% Secure Hosting"
                description="Secure, high-performance servers with daily backups and SSL encryption."
              />
              <CheckCard
                title="100% Long-Term Support"
                description="Permanent support and maintenance for all our clients—we never leave you hanging."
              />
            </div>
            {/* Column 2: Domain Management, Simple Edits */}
            <div className="flex flex-col gap-5">
              <CheckCard
                title="Domain Management"
                description="We handle your domain to protect against downtime and security threats."
              />
              <CheckCard
                title="Simple Edits"
                description="Need changes? We'll handle any content updates while you're with us."
              />
            </div>
          </div>
        </div>
        <div className="bg-[var(--primary-color)] w-full xl:w-[35%] h-[300px] sm:h-[300px] lg:h-[400px] xl:h-[600px] rounded-[10px] xl:ml-auto shadow-lg order-first lg:order-first xl:order-last">
          {/* Additional content can go here */}
        </div>
      </div>
      <div className="flex justify-center mt-6 lg:mt-8">
        <ButtonSecondary
          label="Get Started"
          link="/contact"
        />
      </div>
    </section>
  );
}
