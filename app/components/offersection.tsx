import ButtonSecondary from './buttonsecondary';
import CheckCard from './checkcard';
type OfferSectionProps = {
  title: string;
  subtitle: string;
  description: string;
};

export default function OfferSection({title, subtitle, description}: OfferSectionProps){
  return(
    <section className="w-[70%] mx-auto mt-[150px] text-left">
      <div className="flex flex-row w-full gap-6">
        <div className="w-[60%] flex flex-col flex-wrap gap-1">
          <h3 className="font-bold text-[32px] text-black/80 leading-tight">{subtitle}</h3>
          <h2 className="font-black text-[48px] text-black leading-tight">{title}</h2>
          <p className="font-semibold text-[16px] text-black/65">{description}</p>
          <div className="flex flex-row flex-wrap gap-3 mt-6">
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
              description="Things change. So does a website. We'll make any edits needed, as long as you're with us."
            />
            <CheckCard
              title="100%"
              description="We take care of everything behind the scenes—your site is hosted on secure, high-performance servers."
            />
          </div>
        </div>
        <div className="bg-[var(--primary-color)] w-[35%] h-[700px] rounded-[10px] ml-auto shadow-lg">
          {/* Additional content can go here */}
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <ButtonSecondary
          label="Get Started"
          link="/signup"
        />
      </div>
    </section>
  );
}
