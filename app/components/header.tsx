import Link from 'next/link';

export default function Header() {
  return (
    <header className={`bg-[var(--primary-white)] w-[75%] h-[80px] rounded-[10px] flex justify-center items-center mx-auto`}>
      <Link
        href="/"
        className={`font-bold text-[20px] mx-[50px] my-[30px] text-center transition-colors duration-300 hover:text-[var(--secondary-color)]`}
      >
        HOME
      </Link>
      <Link
        href="/about"
        className={`font-bold text-[20px] mx-[50px] my-[30px] text-center transition-colors duration-300 hover:text-[var(--secondary-color)]`}
      >
        ABOUT
      </Link>
      <Link
        href="/services"
        className={`font-bold text-[20px] mx-[50px] my-[30px] text-center transition-colors duration-300 hover:text-[var(--secondary-color)]`}
      >
        SERVICES
      </Link>
      <Link
        href="/pricing"
        className={`font-bold text-[20px] mx-[50px] my-[30px] text-center transition-colors duration-300 hover:text-[var(--secondary-color)]`}
      >
        PRICING
      </Link>
      <Link
        href="/contact"
        className={`font-bold text-[20px] mx-[50px] my-[30px] text-center transition-colors duration-300 hover:text-[var(--secondary-color)]`}
      >
        CONTACT
      </Link>
    </header>
  );
}
