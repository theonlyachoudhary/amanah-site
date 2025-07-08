import ButtonSecondary from "../components/buttonsecondary";

export default function ContactPage() {
  return (
    <section className="py-12 text-gray-800 sm:py-24">
      <div className="mx-auto flex max-w-md flex-col rounded-lg lg:max-w-screen-xl lg:flex-row lg:justify-center lg:items-start lg:gap-8">
        <div className="max-w-2xl px-4 lg:pr-12">
          <p className="mb-2 text-[var(--primary-color)] font-bold text-lg sm:text-xl lg:text-2xl leading-none">Ready to Get Started?</p>
          <h3 className="mb-5 font-black text-3xl sm:text-4xl lg:text-5xl leading-none">Let's Build Something Amazing Together</h3>
          <p className="mb-16 font-semibold text-sm sm:text-base md:text-lg text-black/65 leading-relaxed">Whether you're ready to transform your web presence or just want to learn more about our services, we're here to help. Our team provides personalized solutions that fit your needs and budget.</p>
          
          <div className="mb-5 flex font-medium">
            <div className="mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-7 w-7 text-[var(--primary-color)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="">
              <p className="mb-2 font-black text-base sm:text-lg lg:text-xl">Fast Response Time</p>
              <span className="font-semibold text-sm sm:text-base text-black/65">We typically respond within 24 hours to get your project started quickly.</span>
            </div>
          </div>
          
          <div className="mb-5 flex font-medium">
            <div className="mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-7 w-7 text-[var(--primary-color)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
            </div>
            <div className="">
              <p className="mb-2 font-black text-base sm:text-lg lg:text-xl">Free Consultation</p>
              <span className="font-semibold text-sm sm:text-base text-black/65">No obligations - just an honest conversation about your goals and how we can help achieve them.</span>
            </div>
          </div>
          
          <div className="mb-5 flex font-medium">
            <div className="mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-7 w-7 text-[var(--primary-color)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
            </div>
            <div className="">
              <p className="mb-2 font-black text-base sm:text-lg lg:text-xl">Personalized Solutions</p>
              <span className="font-semibold text-sm sm:text-base text-black/65">Every business is unique. We create custom solutions tailored to your specific needs and industry.</span>
            </div>
          </div>
        </div>
        
        <div className="border border-gray-100 shadow-gray-500/20 mt-8 mb-8 max-w-md bg-[var(--primary-white)] shadow-sm sm:rounded-lg sm:shadow-lg lg:mt-0">
          <div className="relative border-b border-gray-300 p-4 py-8 sm:px-8">
            <h3 className="mb-1 inline-block font-black text-2xl sm:text-3xl">
              <span className="mr-4">Contact Us</span>
              <span className="inline-block rounded-md bg-[var(--primary-color)]/85 px-2 py-1 text-xs font-bold text-[var(--primary-white)] sm:inline">Quick Response</span>
            </h3>
            <p className="font-semibold text-sm sm:text-base text-black/65">Tell us about your project or questions</p>
          </div>
          
          <div className="p-4 sm:p-8">
            <input 
              id="name" 
              type="text" 
              className="mt-4 w-full resize-y overflow-auto rounded-lg border-2 border-gray-300 px-4 py-2 shadow-sm focus:border-[var(--primary-color)] focus:outline-none hover:border-[var(--primary-color)]" 
              placeholder="Your name" 
            />
            
            <input 
              id="email" 
              type="email" 
              className="peer mt-4 w-full resize-y overflow-auto rounded-lg border-2 border-gray-300 px-4 py-2 shadow-sm focus:border-[var(--primary-color)] focus:outline-none hover:border-[var(--primary-color)]" 
              placeholder="Your email" 
            />
            <div className="peer-invalid:block mt-1 hidden text-left text-xs text-rose-600">Please enter a valid email address</div>
            
            <input 
              id="company" 
              type="text" 
              className="mt-4 w-full resize-y overflow-auto rounded-lg border-2 border-gray-300 px-4 py-2 shadow-sm focus:border-[var(--primary-color)] focus:outline-none hover:border-[var(--primary-color)]" 
              placeholder="Company name (optional)" 
            />
            
            <label className="mt-5 mb-2 inline-block max-w-full font-semibold text-sm sm:text-base">How can we help you?</label>
            <textarea 
              id="message" 
              className="mb-8 w-full resize-y overflow-auto rounded-lg border-2 border-gray-300 px-4 py-2 shadow-sm focus:border-[var(--primary-color)] focus:outline-none hover:border-[var(--primary-color)]" 
              rows={4}
              placeholder="Tell us about your project, timeline, budget, or any questions you have..."
            ></textarea>
            
            <div className="flex justify-center">
              <ButtonSecondary
                label="Send Message"
                link="/"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
