import Link from 'next/link';
type ButtonSecondaryProps= {
  link: string;
  label: string;
}

export default function ButtonSecondary({link, label}: ButtonSecondaryProps){
  return (
    <Link
      href={link}
      className={`
        group
        w-[240px] h-[50px] text-center flex items-center justify-center rounded-[30px] bg-[var(--primary-color)]
        text-[var(--primary-white)] font-black
        relative 
        transition-colors duration-300
        hover:text-[var(--primary-color)] ease-in
      `}
    >
      <span
        className="
          absolute left-0 top-0 h-full w-0
          bg-[var(--primary-white)]
          transition-all duration-300
          z-0
          group-hover:w-full
          pointer-events-none
        "
        aria-hidden="true"
      ></span>
      <span className="relative z-10">{label}</span>
    </Link>
  );
}