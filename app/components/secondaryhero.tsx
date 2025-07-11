import { ReactNode } from "react";

type SecondaryHeroProps = {
  title: string;
  children?: ReactNode;
};
export default function SecondaryHero({ children, title }: SecondaryHeroProps) {
  return (
    <div className="relative w-full h-[27vh] min-h-[178px] max-h-[267px] overflow-hidden" style={{ backgroundColor: 'var(--primary-color)' }}>
      {/* Content area */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto" style={{ color: 'var(--primary-white)' }}>
          {title && (
            <h1 className="font-black text-3xl sm:text-4xl lg:text-5xl mb-4 leading-none whitespace-pre-line" style={{ color: 'var(--primary-white)' }}>
              {title}
            </h1>
          )}
          {children}
        </div>
      </div>
      
      {/* Curvy bottom divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none" style={{ backgroundColor: 'var(--primary-white)' }}>
        <svg 
          className="relative block w-[calc(100%+1.3px)] h-[53px] sm:h-[62px] md:h-[71px] lg:h-[80px]" 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            style={{ fill: 'var(--primary-color)' }}
          />
        </svg>
      </div>
    </div>
  );
}