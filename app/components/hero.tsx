import Button from './button';


export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--primary-color)] min-h-[500px] sm:min-h-[600px] md:min-h-[700px] flex flex-col lg:flex-row">
      {/* Large curved SVG background at the bottom (white, layered above blue) */}
      <svg className="absolute bottom-0 left-0 w-full h-[120px] md:h-[160px] lg:h-[200px] pointer-events-none select-none z-10" viewBox="0 0 1920 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0,0 Q960,320 1920,0 L1920,320 L0,320 Z" fill="var(--primary-white)" />
      </svg>
      {/* Content */}
      <div className="w-full md:mx-auto md:w-[90%] 2xl:w-[80%] pt-11">
        <div className="flex-1 flex flex-col mr-auto p-5">
          <div className="w-full max-w-2xl text-left">
            <p className="text-sm md:text-base font-semibold tracking-widest text-[var(--primary-white)] mb-3 md:mb-4">HAND CRAFTED, CUSTOM CODED</p>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--primary-white)] leading-none mb-4 md:mb-6">
              WEB STUDIO<br />
              FOR QUALITY BUSINESSES
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[var(--primary-white)]/90 mb-8 md:mb-10 max-w-lg">
              Built by our in-house design and development teams who believe quality shouldn't be reserved for Fortune 500 budgets. Custom solutions, enterprise standards, honest pricing. Only $200 a month.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button label="Get Started" link="/contact" />
              
            </div>
          </div>
        </div>
        {/* Device mockup image on the right */}
        <div className="flex-1 flex items-end justify-center lg:justify-end w-full h-full z-10 relative pt-8 md:pt-12 lg:pt-0 pr-0 lg:pr-12 xl:pr-16">
          <img
            src="/mockup-laptop-phone.png"
            alt="Website device mockup"
            className="w-[320px] sm:w-[400px] md:w-[520px] lg:w-[600px] xl:w-[700px] drop-shadow-2xl select-none pointer-events-none"
            draggable="false"
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
      
    </section>
  );
}