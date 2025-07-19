'use client';
import Link from 'next/link';

import { useEffect, useState } from 'react';
import ButtonSecondary from './buttonsecondary';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  useEffect(() => {
    // Check initial scroll position on mount
    const checkInitialScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 60);
    };

    // Check scroll position immediately on mount
    checkInitialScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`
      w-full sticky top-0 z-50
      transition-all duration-300 ease-in-out
      bg-[var(--primary-color)] 
      ${isScrolled
        ? 'py-0 my-[20px] md:my-[30px] shadow-lg'
        : 'py-[20px] md:py-[30px]'}
    `}>
      <div className="relative">
        <div className={`
          bg-[var(--primary-white)] h-[70px] md:h-[80px] flex items-center mx-auto relative
          transition-all duration-300 ease-in-out shadow-lg
          ${isScrolled
            ? 'w-full rounded-none'
            : `w-[90%] 2xl:w-[80%] ${isMobileMenuOpen ? 'rounded-t-[8px] md:rounded-t-[10px]' : 'rounded-[8px] md:rounded-[10px]'}`
          }
        `}>
          {/* Desktop: flex-row, logo left, menu center, button right. Mobile: unchanged */}
          <div className="flex w-full items-center">
            {/* Logo - left on all screens */}
            <div className="flex items-center ml-6 md:ml-6 md:mr-4 w-full md:w-auto justify-start static">
              <Link href="/" className="flex items-center group" tabIndex={0} aria-label="Go to home page">
                <svg className="h-[2.5em] md:h-[2.8em] w-auto group-hover:opacity-80 transition-opacity" viewBox="0 0 48 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Main monitor shape */}
                  <rect x="2" y="4" width="36" height="24" rx="4" stroke="var(--primary-color)" strokeWidth="2.5" fill="none" />
                  {/* Browser dots */}
                  <circle cx="7.5" cy="9.5" r="1.5" fill="var(--primary-color)" />
                  <circle cx="12.5" cy="9.5" r="1.5" fill="var(--primary-color)" />
                  <circle cx="17.5" cy="9.5" r="1.5" fill="var(--primary-color)" />
                  {/* Web grid (subtle) */}
                  <g opacity="0.25">
                    <line x1="6" y1="12" x2="36" y2="12" stroke="var(--primary-color)" strokeWidth="0.8" />
                    <line x1="6" y1="18" x2="36" y2="18" stroke="var(--primary-color)" strokeWidth="0.8" />
                    <line x1="14" y1="8" x2="14" y2="26" stroke="var(--primary-color)" strokeWidth="0.8" />
                    <line x1="22" y1="8" x2="22" y2="26" stroke="var(--primary-color)" strokeWidth="0.8" />
                  </g>
                  {/* Content lines */}
                  <rect x="10" y="15" width="16" height="2" rx="1" fill="var(--primary-color)" />
                  <rect x="14" y="19" width="8" height="2" rx="1" fill="var(--primary-color)" />
                </svg>
                <span className="ml-[1px] flex flex-col leading-tight select-none">
                  <span className="text-xl md:text-2xl font-bold tracking-tight" style={{ color: 'var(--primary-color)', fontFamily: 'Nunito, Quicksand, Poppins, Arial, sans-serif' }}>Amanah</span>
                  <span className="text-base md:text-lg font-base tracking-tight -mt-2" style={{ color: 'var(--primary-color)', fontFamily: 'Nunito, Quicksand, Poppins, Arial, sans-serif' }}>Web Studio</span>
                </span>
              </Link>
            </div>
            {/* Desktop Navigation Centered */}
            <div className="hidden md:flex flex-1 items-center justify-center relative">
              <div className="flex items-center justify-center flex-wrap mx-auto xl:pr-48">
                <Link
              href="/"
              className={`font-bold text-[14px] lg:text-[16px] xl:text-[18px] mx-[15px] lg:mx-[25px] xl:mx-[40px] text-center transition-all duration-300 hover:text-[var(--primary-color)] whitespace-nowrap relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[var(--primary-color)] after:transition-all after:duration-300 hover:after:w-full`}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className={`font-bold text-[14px] lg:text-[16px] xl:text-[18px] mx-[15px] lg:mx-[25px] xl:mx-[40px] text-center transition-all duration-300 hover:text-[var(--primary-color)] whitespace-nowrap relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[var(--primary-color)] after:transition-all after:duration-300 hover:after:w-full`}
            >
              ABOUT
            </Link>
            
            <Link
              href="#info-section"
              className={`font-bold text-[14px] lg:text-[16px] xl:text-[18px] mx-[15px] lg:mx-[25px] xl:mx-[40px] text-center transition-all duration-300 hover:text-[var(--primary-color)] whitespace-nowrap relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[var(--primary-color)] after:transition-all after:duration-300 hover:after:w-full`}
            >
              SERVICES
            </Link>
            
            <Link
              href="/#pricing"
              className={`font-bold text-[14px] lg:text-[16px] xl:text-[18px] mx-[15px] lg:mx-[25px] xl:mx-[40px] text-center transition-all duration-300 hover:text-[var(--primary-color)] whitespace-nowrap relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[var(--primary-color)] after:transition-all after:duration-300 hover:after:w-full`}
            >
              PRICING
            </Link>
            <Link
                href="/contact"
                className={`font-bold text-[14px] lg:text-[16px] xl:text-[18px] mx-[15px] lg:mx-[25px] xl:mx-[40px] text-center transition-all duration-300 hover:text-[var(--primary-color)] whitespace-nowrap relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[var(--primary-color)] after:transition-all after:duration-300 hover:after:w-full`}
              >
                CONTACT
              </Link>
              </div>
              {/* Get Started Button (Button type 1) - only on xl screens */}
              <div className="hidden xl:flex absolute right-0 items-center mr-6">
                <ButtonSecondary link="/contact" label="Get Started" />
              </div>
            </div>
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
          </div>

        </div>

        {/* Mobile Menu Overlay - Now relative to header container */}
        <div className={`
          md:hidden absolute left-0 right-0 z-40 top-full
          flex flex-col items-center space-y-4
          transition-all duration-200 ease-in-out overflow-hidden
          ${isMobileMenuOpen 
            ? 'max-h-96 py-4 bg-[var(--primary-white)] shadow-lg rounded-b-[10px] border-t-2 border-gray-200' 
            : 'max-h-0 py-0 pointer-events-none'
          }
          ${isScrolled 
            ? 'w-full' 
            : 'w-[90%] 2xl:w-[80%] mx-auto'
          }
        `}>
          <Link
            href="/"
            className="font-bold text-[16px] text-center transition-all duration-300 hover:text-[var(--primary-color)] py-2 relative after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[var(--primary-color)] after:transition-all after:duration-300 hover:after:w-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            HOME
          </Link>
          <Link
            href="/about"
            className="font-bold text-[16px] text-center transition-all duration-300 hover:text-[var(--primary-color)] py-2 relative after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[var(--primary-color)] after:transition-all after:duration-300 hover:after:w-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ABOUT
          </Link>
          <Link
            href="#info-section"
            className="font-bold text-[16px] text-center transition-all duration-300 hover:text-[var(--primary-color)] py-2 relative after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[var(--primary-color)] after:transition-all after:duration-300 hover:after:w-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            SERVICES
          </Link>
          <Link
            href="/#pricing"
            className="font-bold text-[16px] text-center transition-all duration-300 hover:text-[var(--primary-color)] py-2 relative after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[var(--primary-color)] after:transition-all after:duration-300 hover:after:w-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            PRICING
          </Link>
          <Link
            href="/contact"
            className="font-bold text-[16px] text-center transition-all duration-300 hover:text-[var(--primary-color)] py-2 relative after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[var(--primary-color)] after:transition-all after:duration-300 hover:after:w-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            CONTACT
          </Link>
        </div>
      </div>
    </header>
  );
}
