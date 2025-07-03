import InfoCard from './infocard';
import ButtonSecondary from './buttonsecondary';

type InfoSectionProps= {
  title: string;
  subtitle: string;
  description: string;
}

export default function InfoSection({ title, subtitle, description }: InfoSectionProps) {
  return (
    <section className="px-4 py-8 md:py-12 lg:py-16">
      <div className="w-full md:w-[75%] lg:w-[55%] mx-auto flex flex-col items-center text-center">
        <h3 className="font-bold text-2xl md:text-2xl lg:text-[32px] text-black/80 mb-2 leading-tight whitespace-pre-line">{subtitle}</h3>
        <h2 className="font-black text-2xl md:text-3xl lg:text-[48px] text-black mb-4 leading-tight whitespace-pre-line">{title}</h2>
        <p className="font-semibold text-base sm:text-lg md:text-xl lg:text-[18px] text-black/65 whitespace-pre-line max-w-xs sm:max-w-md md:max-w-lg lg:max-w-4xl leading-relaxed">{description}</p>
      </div>
      <div className="w-full md:w-[85%] lg:w-[70%] mt-6 md:mt-8 lg:mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        <InfoCard
          title="HANDMADE DESIGN"
          description="We take care of everything behind the scenes—your site is hosted on secure, 
          high-performance servers with daily backups, SSL encryption, and industry-standard security
           measures. "
          icon=""
        />
        <InfoCard
          title="SEO OPTIMIZATION"
          description="Enhancing your website's visibility on search engines to drive organic traffic."
          icon=""
        />
        <InfoCard
          title="Digital Marketing"
          description="Implementing effective strategies to promote your brand and engage with your audience."
          icon=""
        />
        <InfoCard
          title="COPYWRITING"
          description="Producing high-quality content that resonates with your target audience."
          icon=""
        />
        <InfoCard
          title="E-commerce Solutions"
          description="Building robust e-commerce platforms to help you sell online effectively."
          icon=""
        />
        <InfoCard
          title="NEXTJS DEVELOPED"
          description="Developing comprehensive brand strategies to establish a strong market presence."
          icon=""
        />
      </div>
      <div className="flex justify-center mt-6 md:mt-8 lg:mt-[30px]">
        <ButtonSecondary
          link="/contact"
          label="Get in Touch"
        />
      </div>
    </section>
  );
}