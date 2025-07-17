import Link from 'next/link';

type InfoCardProps ={
  title: string;
  description: string;
  icon: React.ReactNode;
  link?: string; // Optional link prop
}

export default function InfoCard({ title, description, icon, link }: InfoCardProps) {
  const cardContent = (
    <div
      className={`
        group
        w-full h-full max-w-[350px] min-h-[280px] bg-[var(--primary-white)] border-2 border-gray-200 shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-6 md:p-8 lg:p-9 relative overflow-hidden rounded-[15px]
        transition-all duration-300
        cursor-pointer
        hover:shadow-[0px_0px_25px_rgba(0,0,0,0.15)]
        hover:bg-[var(--primary-color)]
        flex flex-col justify-between
      `}
      style={{ height: '100%' }}
      tabIndex={link ? 0 : undefined} // Make focusable if link
      role={link ? 'link' : undefined}
    >
      {/* Top right circle with number/icon */}
      <div className="w-20 h-20 md:w-24 md:h-24 bg-[var(--primary-color)] rounded-full absolute -right-4 md:-right-5 -top-6 md:-top-7 group-hover:bg-[var(--primary-white)] transition-colors duration-300">
      </div>
      
      {/* Content Container */}
      <div className="flex flex-col items-start text-left space-y-3 flex-grow">
        {/* Main icon */}
        <div className="w-10 md:w-12 text-[var(--primary-color)] group-hover:text-[var(--primary-white)] transition-colors duration-300 flex-shrink-0">
          {icon}
        </div>
        
        {/* Title */}
        <h1 className="font-bold text-lg md:text-xl text-black group-hover:text-[var(--primary-white)] transition-colors duration-300 flex-shrink-0 uppercase">
          {title}
        </h1>
        
        {/* Description */}
        <p className="text-sm text-zinc-500 leading-6 group-hover:text-[var(--primary-white)] transition-colors duration-300 flex-grow">
          {description}
        </p>
      </div>

      {/* Learn More text at bottom */}
      <div className="mt-4">
        <p className="text-[var(--primary-color)] group-hover:text-[var(--primary-white)] transition-colors duration-300 font-semibold text-sm">
          Learn More
        </p>
      </div>
    </div>
  );

  // If link is provided, wrap card in Next.js Link
  return link ? (
    <Link href={link} tabIndex={0} aria-label={title} style={{ textDecoration: 'none', display: 'block' }}>
      {cardContent}
    </Link>
  ) : cardContent;
}