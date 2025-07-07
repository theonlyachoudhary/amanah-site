'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 60); // Trigger animation after 0px of scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`
      w-full sticky top-0 z-50
      transition-all duration-300 ease-in-out
      g-[var(--primary-white)]
      ${isScrolled 
        ? 'py-0 my-[20px] md:my-[30px] shadow-lg' 
        : 'py-[20px] md:py-[30px]'
      }
    `}>
      <div className="relative"> {/* Add relative wrapper */}
        <div className={`
          bg-[var(--primary-white)] h-[70px] md:h-[80px] flex justify-center items-center mx-auto relative
          transition-all duration-300 ease-in-out shadow-lg
          ${isScrolled 
            ? 'w-full rounded-none' 
            : `w-[95%] md:w-[75%] ${isMobileMenuOpen ? 'rounded-t-[8px] md:rounded-t-[10px]' : 'rounded-[8px] md:rounded-[10px]'}`
          }
        `}>
          {/* Mobile Hamburger Button - Right Side */}
          <button
            className="bg-[var(--primary-color)] rounded-[8px] md:hidden absolute right-4 flex flex-col justify-center items-center w-10 h-10 space-y-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className={`block w-6 h-0.5 bg-[var(--primary-white)] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[var(--primary-white)] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[var(--primary-white)] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-wrap">
            <Link
              href="/"
              className={`font-bold text-[14px] lg:text-[16px] xl:text-[18px] mx-[15px] lg:mx-[25px] xl:mx-[40px] text-center transition-colors duration-300 hover:text-[var(--secondary-color)] whitespace-nowrap`}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className={`font-bold text-[14px] lg:text-[16px] xl:text-[18px] mx-[15px] lg:mx-[25px] xl:mx-[40px] text-center transition-colors duration-300 hover:text-[var(--secondary-color)] whitespace-nowrap`}
            >
              ABOUT
            </Link>
            <Link
              href="/services"
              className={`font-bold text-[14px] lg:text-[16px] xl:text-[18px] mx-[15px] lg:mx-[25px] xl:mx-[40px] text-center transition-colors duration-300 hover:text-[var(--secondary-color)] whitespace-nowrap`}
            >
              SERVICES
            </Link>
            <Link
              href="/pricing"
              className={`font-bold text-[14px] lg:text-[16px] xl:text-[18px] mx-[15px] lg:mx-[25px] xl:mx-[40px] text-center transition-colors duration-300 hover:text-[var(--secondary-color)] whitespace-nowrap`}
            >
              PRICING
            </Link>
            <Link
              href="/contact"
              className={`font-bold text-[14px] lg:text-[16px] xl:text-[18px] mx-[15px] lg:mx-[25px] xl:mx-[40px] text-center transition-colors duration-300 hover:text-[var(--secondary-color)] whitespace-nowrap`}
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile Menu Title */}
          <div className="md:hidden font-bold text-[15px] text-center">
            MENU
          </div>
        </div>

        {/* Mobile Menu Overlay - Now relative to header container */}
        <div className={`
          md:hidden absolute left-1/2 transform -translate-x-1/2 z-40 top-full
          flex flex-col items-center space-y-4
          transition-all duration-500 ease-in-out overflow-hidden
          ${isMobileMenuOpen 
            ? 'max-h-96 py-4 bg-[var(--primary-white)] shadow-lg rounded-b-[10px] border-t-2 border-gray-200' 
            : 'max-h-0 py-0 pointer-events-none'
          }
          ${isScrolled 
            ? 'w-full' 
            : 'w-[95%] md:w-[75%]'
          }
        `}>
          <Link
            href="/"
            className="font-bold text-[16px] text-center transition-colors duration-300 hover:text-[var(--secondary-color)] py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            HOME
          </Link>
          <Link
            href="/about"
            className="font-bold text-[16px] text-center transition-colors duration-300 hover:text-[var(--secondary-color)] py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ABOUT
          </Link>
          <Link
            href="/services"
            className="font-bold text-[16px] text-center transition-colors duration-300 hover:text-[var(--secondary-color)] py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            SERVICES
          </Link>
          <Link
            href="/pricing"
            className="font-bold text-[16px] text-center transition-colors duration-300 hover:text-[var(--secondary-color)] py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            PRICING
          </Link>
          <Link
            href="/contact"
            className="font-bold text-[16px] text-center transition-colors duration-300 hover:text-[var(--secondary-color)] py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            CONTACT
          </Link>
        </div>
      </div>
    </header>
  );
}
