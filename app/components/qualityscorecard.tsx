type QualityScoreCardProps= {
  title: string;
  description: string;
}

export default function QualityScoreCard({title, description}: QualityScoreCardProps) {
  return(
    <div className="w-[33%] rounded-[10px] flex flex-col items-center justify-center mr-2">
      <h1 className="font-black text-[48px] text-[var(--secondary-color)] leading-none">{title}</h1>
      <h2 className="font-black text-[24px] text-[var(--primary-white)] leading-none text-center">{description}</h2>
    </div>
  );
}