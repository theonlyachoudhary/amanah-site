import Link from 'next/link';
type InfoCardProps ={
  title: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
}

export default function InfoCard({ title, description, icon, link }: InfoCardProps) {
  if (!link) {link="/"};
  return (
    <Link
      href={link}
      className={`
        group
        w-full max-w-[400px] h-[250px] sm:h-[280px] md:h-[300px] mx-auto bg-[var(--primary-white)]
        border-[var(--primary-color)] border-5 rounded-[15px]
        flex flex-col items-center
        relative
        transition-colors duration-300
        cursor-pointer
        hover:text-[var(--primary-white)]
      `}
    >
      {/* Uiverse-style animated overlay */}
      <span
        className="
          absolute top-[-1px] left-[-3px] w-[calc(100%+5px)] h-[calc(100%+3px)]
          bg-[var(--primary-color)]
          rounded-[15px]
          z-0
          scale-0 origin-top-right
          group-hover:scale-100
          transition-transform duration-300
          pointer-events-none
        "
        aria-hidden="true"
      ></span>
      <div className="flex items-center w-full mb-2 relative z-10 px-4 sm:px-6">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-left w-2/3 break-words transition-colors duration-500 group-hover:text-white mt-6 sm:mt-8">
          {title}
        </h3>
      </div>
      <div className="absolute top-0 right-0 z-10">
        <div className="text-2xl sm:text-3xl md:text-4xl h-[60px] w-[60px] sm:h-[72px] sm:w-[72px] flex items-center justify-center bg-[var(--primary-color)] rounded-bl-[30px] sm:rounded-bl-[40px]">
          {icon}
        </div>
      </div>
      <p className="mb-4 px-4 sm:text-base md:text-lg lg:text-xl text-left text-black/70 group-hover:text-white/80 relative z-10 transition-colors duration-500 w-full">
        {description}
      </p>
    </Link>
  );
}