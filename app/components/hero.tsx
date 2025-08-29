
import Button from './button';
import ClayPhone from './clayphone';
import ClayLaptop from './claylaptop';


export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--primary-color)] min-h-[800px] sm:min-h-[900px] md:min-h-[1000px] flex flex-col lg:flex-row py-12 md:py-16 lg:py-20">
      {/* White matrix background with fade effect */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white/10 to-transparent opacity-25">
          <div className="absolute inset-0 w-full h-full" 
               style={{
                 backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                 backgroundSize: "20px 20px"
               }}>
          </div>
        </div>
      </div>
      
      {/* Large curved SVG background at the bottom (white, layered above blue) */}
      <svg className="absolute bottom-0 left-0 w-full h-[350px] md:h-[461px] lg:h-[568px] pointer-events-none select-none z-10" viewBox="0 0 1920 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" >
        <path d="M0,0 Q960,320 1920,0 L1920,320 L0,320 Z" fill="var(--primary-white)" />
      </svg>
      {/* Content (text/buttons only) */}
      <div className="w-full px-4 md:mx-auto md:w-[90%] 2xl:w-[80%] flex flex-col lg:flex-row relative z-25">
        <div className="flex-1 flex flex-col mr-auto">
          <div className="w-full max-w-5xl text-left">
            <p className="text-sm md:text-base font-semibold tracking-widest text-white mb-2 md:mb-3">Hand Crafted, Custom Coded</p>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-none mb-3 md:mb-4">
              Web Studio<br />
              For Quality Businesses
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-7 max-w-lg">
              Built by our in-house design and development teams who believe quality shouldn't be reserved for Fortune 500 budgets. Custom solutions, enterprise standards, honest pricing. Only $200 a month.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button label="Get Started" link="/contact" />
            </div>
          </div>
        </div>
      </div>

    
      
    </section>
  );
}