'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

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
      bg-[var(--primary-white)]
      ${isScrolled 
        ? 'py-0 my-[20px] md:my-[30px] shadow-lg' 
        : 'py-[20px] md:py-[30px]'
      }
    `}>
      <div className="relative">
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
            
            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <Link
                href="/services"
                className={`font-bold text-[14px] lg:text-[16px] xl:text-[18px] mx-[15px] lg:mx-[25px] xl:mx-[40px] text-center transition-all duration-300 hover:text-[var(--primary-color)] whitespace-nowrap relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[var(--primary-color)] after:transition-all after:duration-300 hover:after:w-full flex items-center`}
              >
                SERVICES
                <svg 
                  className={`ml-1 h-3 w-3 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth="1.5" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </Link>
              
              {/* Dropdown Menu with gap bridge */}
              <div className={`
                absolute top-full left-1/2 transform -translate-x-1/2 pt-2 w-48
                transition-all duration-200 ease-in-out
                ${isServicesDropdownOpen 
                  ? 'opacity-100 translate-y-0 pointer-events-auto' 
                  : 'opacity-0 -translate-y-2 pointer-events-none'
                }
              `}>
                <div className="bg-[var(--primary-white)] text-[var(--primary-color)] border-[3px] border-[var(--primary-color)] rounded-[5px] shadow-lg overflow-hidden">
                  <Link
                    href="/services/web-design"
                    className="block px-4 py-3 text-sm font-bold hover:bg-[var(--primary-color)] hover:text-[var(--primary-white)] transition-colors duration-200"
                  >
                    Web Design
                  </Link>
                  <Link
                    href="/services/web-development"
                    className="block px-4 py-3 text-sm font-bold hover:bg-[var(--primary-color)] hover:text-[var(--primary-white)] transition-colors duration-200"
                  >
                    Web Development
                  </Link>
                  <Link
                    href="/services/e-commerce"
                    className="block px-4 py-3 text-sm font-bold hover:bg-[var(--primary-color)] hover:text-[var(--primary-white)] transition-colors duration-200"
                  >
                    E-Commerce
                  </Link>
                  <Link
                    href="/services/maintenance"
                    className="block px-4 py-3 text-sm font-bold hover:bg-[var(--primary-color)] hover:text-[var(--primary-white)] transition-colors duration-200"
                  >
                    Website Maintenance
                  </Link>
                </div>
              </div>
            </div>
            
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

          {/* Mobile Menu Title */}
          <div className="md:hidden font-bold text-[15px] text-center">
            MENU
          </div>
        </div>

        {/* Mobile Menu Overlay - Now relative to header container */}
        <div className={`
          md:hidden absolute left-1/2 transform -translate-x-1/2 z-40 top-full
          flex flex-col items-center space-y-4
          transition-all duration-200 ease-in-out overflow-hidden
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
            href="/services"
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
