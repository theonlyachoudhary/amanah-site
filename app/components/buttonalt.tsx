import Link from 'next/link';

type ButtonAltProps= {
  label: string;
  link: string;
}

export default function ButtonAlt({ label, link }: ButtonAltProps) {
  return (
    <Link
      href={link}
      className={`
        group
       w-[140px] h-[50px] text-center flex items-center justify-center rounded-[30px] bg-[var(--primary-white)]
        text-[var(--primary-color)] font-black
        relative
        transition-all duration-300
        hover:text-[var(--primary-white)]
        hover:transition-[background-color] hover:delay-100
        hover:bg-[var(--primary-color)]
        overflow-hidden
      `}
    >
      <span
        className="
          absolute left-0 top-0 h-full w-0
          bg-[var(--primary-color)]
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