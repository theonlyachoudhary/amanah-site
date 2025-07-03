import Button from './button';
import ButtonAlt from './buttonalt';
export default function Hero() {
  return (
    <section className='w-[70%] mx-auto pt-[100px]'>
      <div className='mr-auto w-[45%] text-left text-[var(--primary-white)]'>
        <h1 className='font-black text-[64px] leading-tight'>TRUSTWORTHY</h1>
        <h1 className='font-black text-[64px] leading-none'>WEB DESIGNS</h1>
        <p className='font-semi-bold text-[20px] my-[10px]'>No page builders. No disappearing acts. Just a reliable partner focused on bringing you superior results, SEO, Google Ads, and the kind of support you’ll never get from the big guys. Starting at $150/mo.</p>
        <div className='flex gap-[20px] mt-[30px]'>
          <Button label="Get Started" link="/contact" />
          <ButtonAlt label="Learn More" link="/about" />

      </div>
      </div>
      <div className="custom-shape-divider-bottom-1750110347">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
}