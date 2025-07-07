type QualityScoreCardProps= {
  title: string;
  description: string;
}

export default function QualityScoreCard({title, description}: QualityScoreCardProps) {
  return(
    <div className="w-[33%] rounded-[10px] flex flex-col items-center justify-center p-1">
      <h1 className="font-black text-3xl sm:text-4xl lg:text-5xl text-[var(--secondary-color)] leading-none">{title}</h1>
      <h2 className="font-black text-lg sm:text-xl lg:text-2xl text-[var(--primary-white)] leading-tight text-center">{description}</h2>
    </div>
  );
}