import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--primary-color)]">
      <div className="py-4 text-[var(--primary-white)] ">
        <div className="w-full px-4 md:w-[90%] 2xl:w-[80%] container mx-auto">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-8">
            <div className="w-full lg:w-[50%]">
              <h2 className="inline-block font-black text-lg sm:text-xl lg:text-2xl pb-4 mb-4 border-b-3 border-[var(--primary-white)]">Amanah Web Studio</h2>
              <p className="text-left text-sm sm:text-base md:text-lg">
                Amanah Web Studio is an innovative web design and development company delivering handcrafted, 
                high-quality websites—once reserved for large corporations—to small and medium-sized 
                businesses at a fraction of the cost. Our unique subscription-based model makes it 
                possible to enjoy enterprise-level quality without the enterprise-level price tag.
              </p>
            </div>

            <div className="w-full lg:w-[25%]">
              <div>
                <h2 className="inline-block font-black text-lg sm:text-xl lg:text-2xl pb-4 mb-4 border-b-3 border-[var(--primary-white)]">Quick Links</h2>
              </div>
              <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-3 gap-y-1 leading-6 md:leading-8 text-sm sm:text-base md:text-lg ">
                <li><Link href="#" className="hover:text-[var(--secondary-color)]">Home</Link></li>
                <li><Link href="#" className="hover:text-[var(--secondary-color)]">About</Link></li>
                <li><Link href="#" className="hover:text-[var(--secondary-color)]">Services</Link></li>
                <li><Link href="#" className="hover:text-[var(--secondary-color)]">Pricing</Link></li>
                <li><Link href="#" className="hover:text-[var(--secondary-color)]">Contact</Link></li>
              </ul>
            </div>

            {/* Contact Section with Icons */}
            <div className="w-full lg:w-[25%]">
              <div>
                <h2 className="inline-block font-black text-lg sm:text-xl lg:text-2xl pb-4 mb-4 border-b-3 border-[var(--primary-white)]">Contact</h2>
              </div>
              <ul className="leading-6 md:leading-8 text-sm sm:text-base md:text-lg space-y-2">
                <li className="flex items-center gap-2">
                  <span>
                    {/* Phone Icon */}
                    <svg fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--secondary-color)] w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24">
                      <path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a1 1 0 0 1 1 .75l1.13 4.52a1 1 0 0 1-.29 1L9.91 11.09a16 16 0 0 0 6 6l1.82-1.82a1 1 0 0 1 1-.29l4.52 1.13a1 1 0 0 1 .75 1z"/>
                    </svg>
                  </span>
                  <Link href="tel:+1234567890" className="hover:text-[var(--secondary-color)]">+1 (234) 567-890</Link>
                </li>
                <li className="flex items-center gap-2">
                  <span>
                    {/* Email Icon */}
                    <svg fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--secondary-color)] w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24">
                      <path d="M4 4h16v16H4z" stroke="none"/>
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                  <Link href="mailto:info@amanahweb.com" className="hover:text-[var(--secondary-color)]">info@amanahweb.com</Link>
                </li>
                <li className="flex items-center gap-2">
                  <span>
                    {/* Location Icon */}
                    <svg fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--secondary-color)] w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24">
                      <path d="M12 21c-4.418 0-8-5.373-8-10a8 8 0 1 1 16 0c0 4.627-3.582 10-8 10z"/>
                      <circle cx="12" cy="11" r="3"/>
                    </svg>
                  </span>
                  <span>Chicago, USA</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 md:w-[90%] 2xl:w-[80%] mx-auto border-t border-[var(--primary-white)]"></div>
      <div className="w-full px-4 md:w-[90%] 2xl:w-[80%] mx-auto bg-[var(--primary-color)] py-4 text-[var(--primary-white)]">
        <div className="container mx-auto px-4">
          <div className="-mx-4 flex flex-col sm:flex-row flex-wrap justify-between gap-2 sm:gap-0">

            <div className="px-4 w-full text-center sm:w-auto text-sm sm:text-base md:text-lg">
              Copyright © {new Date().getFullYear()} Al-Amanah. All Rights Reserved.
            </div>
            <div className="px-4 w-full text-center sm:w-auto sm:text-left text-sm sm:text-base md:text-lg">
              Striving for the Ummah
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
