type QualityCardProps = {
  icon: React.ReactNode; // Changed from string to React.ReactNode
  title: string;
  description: string;
};

export default function QualityCard({ icon, title, description }: QualityCardProps) {
  return (
    <div className="h-auto flex flex-row items-center text-left p-2">
      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 mr-3">
        <div className="w-8 h-8 sm:w-10 sm:h-10 text-[var(--primary-white)]">
          {icon}
        </div>
      </div>
      <div className="flex flex-col justify-center text-[var(--primary-white)]">
        <h2 className="text-base sm:text-lg lg:text-xl font-semibold mb-1">{title}</h2>
        <p className="text-sm sm:text-base md:text-lg">{description}</p>
      </div>
    </div>
  );
}