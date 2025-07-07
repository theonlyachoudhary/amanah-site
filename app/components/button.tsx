import Link from 'next/link';

type ButtonProps ={
  label: React.ReactNode;
  link: string;
}

export default function Button({ label, link }: ButtonProps) {
  return (
    <Link
      href={link}
      className={`
        group
        w-full max-w-[240px] min-w-[160px] h-[50px] text-center flex items-center justify-center rounded-[30px] bg-[var(--secondary-color)]
        text-[var(--primary-color)] font-black
        relative overflow-hidden
        transition-colors duration-300
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
      <span className="relative text-base lg:text-lg z-10 w-full">{label}</span>
    </Link>
  );
}