import InfoCard from './infocard';
import ButtonSecondary from './buttonsecondary';

type InfoSectionProps= {
  title: string;
  subtitle: string;
  description: string;
}

export default function InfoSection({ title, subtitle, description }: InfoSectionProps) {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center px-4 py-16 md:py-20 lg:py-24 md:w-[90%] 2xl:w-[80%] mx-auto">
      <div className="flex flex-col text-left">
        <h3 className="font-bold text-lg sm:text-xl lg:text-2xl text-black/80 mb-2 leading-none whitespace-pre-line">{subtitle}</h3>
        <h2 className="font-black text-3xl sm:text-4xl lg:text-5xl text-black mb-4 leading-none whitespace-pre-line">{title}</h2>
        <p className="font-semibold text-sm sm:text-base md:text-lg text-black/65 whitespace-pre-line leading-relaxed">{description}</p>
      </div>
      <div className="mt-6 md:mt-8 lg:mt-10 mx-auto flex flex-col gap-5">
        {/* First Row */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-5">
          <InfoCard
            title="HANDMADE DESIGN"
            description="We meticulously handcraft each site—from strategic wireframes to pixel‑perfect, responsive layouts. Every animation, every interaction is thoughtfully executed to reinforce your brand and keep your users engaged, from first glance to conversion."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.998 15.998 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
              </svg>
            }
            link="/about"
          />
          <InfoCard
            title="CUSTOM CODED"
            description="Every line of code is hand‑written by our expert developers—no generic themes, no unnecessary plugins. You get clean, efficient, and secure websites built precisely to your business needs, delivering maximum performance and flexibility."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 17l-4-5 4-5M16 7l4 5-4 5" />
              </svg>
            }
            link="/about"
          />
          <InfoCard
            title="LIGHTNING FAST"
            description="Hand‑coded sites that load in under 1 second—no page builders, no WordPress, just pure performance."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 md:w-12 md:h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
            link="/about"
          />
        </div>
        
        {/* Second Row */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-5">
          <InfoCard
            title="COPYWRITING"
            description="The right words turn visitors into customers. Our professional copywriters deliver clear, brand‑aligned messaging, from SEO‑optimized headlines to compelling calls to action. Every word is designed to boost engagement and sales."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>
            }
            link="/about"
          />
          <InfoCard
            title="E-COMMERCE SOLUTIONS"
            description="Your storefront needs to do more than look good—it must sell. We craft custom experiences with intuitive navigation, conversion‑driven layouts, and seamless POS integration. From impactful product pages to streamlined checkouts, we’ve got you covered."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            }
            link="/about"
          />
          <InfoCard
            title="RELIABLE SUPPORT"
            description="With one simple monthly subscription, you get unlimited updates, security monitoring, routine backups, and priority bug fixes. We’re your 24/7 web team—ensuring your site stays secure, fast, and up‑to‑date so you can focus on growing your business."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <rect x="4" y="4" width="16" height="16" rx="5" fill="currentColor" opacity="0.08" />
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v8m-4-4h8" />
              </svg>
            }
            link="/about"
          />
        </div>
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