

import { motion } from 'framer-motion';
import Button from './button';
import ClayPhone from './clayphone';
import ClayLaptop from './claylaptop';


export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--primary-color)] min-h-[800px] sm:min-h-[900px] md:min-h-[1000px] flex flex-col lg:flex-row">
      {/* Large curved SVG background at the bottom (white, layered above blue) */}
      <svg className="absolute bottom-0 left-0 w-full h-[350px] md:h-[461px] lg:h-[568px] pointer-events-none select-none z-10" viewBox="0 0 1920 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" >
        <path d="M0,0 Q960,320 1920,0 L1920,320 L0,320 Z" fill="var(--primary-white)" />
      </svg>
      {/* Content (text/buttons only) */}
      <div className="w-full md:mx-auto md:w-[90%] 2xl:w-[80%] pt-11 flex flex-col lg:flex-row relative z-25 pb-[30px] xl:pb-0">
        <div className="flex-1 flex flex-col mr-auto p-5">
          <div className="w-full max-w-5xl text-left">
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-sm md:text-base font-semibold tracking-widest text-[var(--primary-white)] mb-3 md:mb-4"
            >
              HAND CRAFTED, CUSTOM CODED
            </motion.p>
            <motion.h1
              initial={{ x: -120, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--primary-white)] leading-none mb-4 md:mb-6"
            >
              WEB STUDIO<br />
              FOR QUALITY BUSINESSES
            </motion.h1>
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-base sm:text-lg md:text-xl text-[var(--primary-white)]/90 mb-8 md:mb-10 max-w-lg"
            >
              Built by our in-house design and development teams who believe quality shouldn't be reserved for Fortune 500 budgets. Custom solutions, enterprise standards, honest pricing. Only $200 a month.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button label="Get Started" link="/contact" />
            </div>
          </div>
        </div>
      </div>

      {/* Devices absolutely positioned above the SVG curve, not affecting content layout */}
      <div
        className="absolute bottom-[5rem] xl:bottom-[27rem] w-full left-0 right-0 flex flex-row items-end justify-center xl:justify-end px-40 gap-4 xl:gap-0 z-20 pointer-events-none"
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