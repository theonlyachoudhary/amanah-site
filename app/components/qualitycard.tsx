type QualityCardProps = {
  icon: string; // path to svg
  title: string;
  description: string;
};

export default function QualityCard({ icon, title, description }: QualityCardProps) {
  return (
    <div className="h-auto w-full max-w-[280px] flex flex-row items-center text-left p-2">
      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 mr-3">
        <img
          src={icon}
          alt={`${title} Icon`}
          className="w-10 h-10 sm:w-12 sm:h-12"
        />
      </div>
      <div className="flex flex-col justify-center text-[var(--primary-white)]">
        <h2 className="text-sm sm:text-base lg:text-lg font-semibold mb-1">{title}</h2>
        <p className="text-xs sm:text-sm lg:text-sm">{description}</p>
      </div>
    </div>
  );
}