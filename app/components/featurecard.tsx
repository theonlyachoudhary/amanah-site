type FeatureCardProps = {
  description: string;
  hasCheckmark: boolean;
  isAlt: boolean;
};

export default function FeatureCard({description, hasCheckmark, isAlt}: FeatureCardProps){
  
  return (
    <>
      {hasCheckmark ? (
        <div className={` ${isAlt ? "text-[var(--primary-white)]" : ""}
        flex items-center justify-between px-[30px] py-2 w-full`}>
          <h3 className="text-base sm:text-lg lg:text-xl text-left mr-auto">{description}</h3>
          <span className="ml-auto flex items-center">
            <svg viewBox="0 0 24 24" fill="none" width={30} height={30} xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke={`${isAlt ? "var(--primary-white)" : "#000000"}`} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </span>
        </div>
      ) : (
        <div className={` ${isAlt ? "text-[var(--primary-white)]" : ""}
        flex items-center justify-between px-[30px] py-2 w-full`}>
          <h3 className="text-base sm:text-lg lg:text-xl text-left mr-auto">{description}</h3>
          <span className="ml-auto flex items-center">
            <svg viewBox="0 0 24 24" fill="none" width={30} height={30} xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6L18 18" stroke={`${isAlt ? "var(--primary-white)" : "#000000"}`} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 18L18 6" stroke={`${isAlt ? "var(--primary-white)" : "#000000"}`} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      )}
    </>
  );

      
}