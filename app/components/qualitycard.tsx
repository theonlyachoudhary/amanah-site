type QualityCardProps = {
  icon: string; // path to svg
  title: string;
  description: string;
};

export default function QualityCard({ icon, title, description }: QualityCardProps) {
  return (
    <div className="h-[100px] w-[330px] flex items-center">
      <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 mr-4">
        <img
          src={icon}
          alt={`${title} Icon`}
          className="w-16 h-16"
        />
      </div>
      <div className="flex flex-col justify-center text-[var(--primary-white)]">
        <h2 className="text-[20px] font-semibold mb-1">{title}</h2>
        <p className="text-[16px]">{description}</p>
      </div>
    </div>
  );
}