
import Button from './button';
import ClayPhone from './clayphone';
import ClayLaptop from './claylaptop';


export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[800px] sm:min-h-[900px] md:min-h-[1000px] xl:min-h-[700px] flex flex-col lg:flex-row" style={{ backgroundColor: 'var(--primary-color)', perspective: '1500px', position: 'relative', overflow: 'hidden' }}>
      <div
        className="absolute inset-0 w-full h-full matrix-grid"
        style={{
          width: '100%',
          height: '100%',
          background:
            'linear-gradient(var(--primary-white) 1px, transparent 1px),\n' +
            'linear-gradient(90deg, var(--primary-white) 1px, transparent 1px),\n' +
            'repeating-linear-gradient(45deg, rgba(25, 118, 163, 0.05) 0px 1px, transparent 1px 12px),\n' +
            'repeating-linear-gradient(-45deg, rgba(25, 118, 163, 0.05) 0px 1px, transparent 1px 12px),\n' +
            'radial-gradient(circle at center, var(--primary-color) 0%, #000 100%)',
          backgroundSize:
            '28px 28px, 28px 28px, 50px 50px, 50px 50px, cover',
          border: '1px solid rgba(25, 118, 163, 0.1)',
          boxShadow:
            'inset 0 0 40px rgba(25, 118, 163, 0.1), 0 0 60px rgba(25, 118, 163, 0.15)',
          transformStyle: 'preserve-3d',
          transition: 'all 0.6s ease-in-out',
          position: 'absolute',
          zIndex: 0,
          // Stronger fade for better text readability
          opacity: 0.25,
          maskImage: 'linear-gradient(to top, black 55%, transparent 75%)',
          WebkitMaskImage: 'linear-gradient(to top, black 55%, transparent 75%)',
        }}
      >
        {/* Animated border and pulse overlays */}
        <style>{`
          @keyframes borderFlow {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
          }
          @keyframes pulse {
            0% { transform: translate(-50%, -50%) scale(0.85); opacity: 0.2; }
            100% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.5; }
          }
          .matrix-grid::before {
            content: "";
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: linear-gradient(90deg, transparent, rgba(25, 118, 163, 0.4), transparent);
            animation: borderFlow 6s linear infinite;
            pointer-events: none;
            mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
            mask-composite: exclude;
          }
          .matrix-grid::after {
            content: "";
            position: absolute;
            top: 50%; left: 50%; width: 160px; height: 160px;
            background: radial-gradient(circle, rgba(25, 118, 163, 0.15) 0%, transparent 70%);
            transform: translate(-50%, -50%);
            animation: pulse 3.5s ease-in-out infinite alternate;
            z-index: 1;
          }
        `}</style>
      </div>
      {/* Large curved SVG background at the bottom (white, layered above blue) */}
      <svg className="absolute bottom-0 left-0 w-full h-[350px] md:h-[461px] lg:h-[568px] xl:h-[300px] pointer-events-none select-none z-10" viewBox="0 0 1920 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" >
        <path d="M0,0 Q960,400 1920,0 L1920,320 L0,320 Z" fill="var(--primary-white)" />
      </svg>
      {/* Content (text/buttons only) */}
      <div className="w-full md:mx-auto md:w-[90%] 2xl:w-[80%] pt-11 flex flex-col lg:flex-row relative z-25 pb-[30px] xl:pb-0">
        <div className="flex-1 flex flex-col mr-auto p-5">
          <div className="w-full max-w-5xl text-left">
            <p className="text-sm md:text-base font-semibold tracking-widest text-[var(--primary-white)] mb-3 md:mb-4">HAND CRAFTED, CUSTOM CODED</p>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--primary-white)] leading-none mb-4 md:mb-6">
              WEB STUDIO<br  />
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
      </div>

      {/* Devices absolutely positioned above the SVG curve, not affecting content layout */}
      <div
        className="absolute bottom-[3rem] xl:bottom-[13rem] w-full left-0 right-0 flex flex-row items-end justify-center xl:justify-end px-40 gap-4 xl:gap-0 z-20 pointer-events-none"
      >
        <div className="flex items-end xl:flex-row-reverse">
          <div className="w-[90px] sm:w-[120px] md:w-[150px] lg:w-[180px] xl:w-[200px] xl:-ml-16 relative xl:z-30">
            <ClayPhone image="/phone-screenshot.webp" />
          </div>
          <div className="w-[220px] sm:w-[300px] md:w-[380px] lg:w-[440px] xl:w-[500px] xl:relative xl:z-20">
            <ClayLaptop image="/desktop-screenshot.webp" />
          </div>
        </div>
      </div>
      
    </section>
  );
}