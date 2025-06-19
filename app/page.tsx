import Header from './components/header';
import Hero from './components/hero';
import InfoSection from './components/infosection';
import OfferSection from './components/offersection';
import QualityBanner from './components/qualitybanner';
import PricingSection from './components/pricingsection';

export default function Home() {
  return (
    <>
    <div className='bg-[var(--primary-color)] pt-[30px] mb-[100px]'>
      <Header/>
      <Hero/>
      
    </div>
    <InfoSection
        title={"HANDLING THE HARD PARTS\nSO YOU DON'T HAVE TO"}
        subtitle="WHAT WE DO"
        description="At Amanah Web Designs, we create custom, hand-designed 
        websites tailored for small businesses that value quality. Every line 
        of code is crafted for performance and SEO, ensuring your site runs 
        smoothly and keeps Google happy. We don’t just build your site and 
        disappear—we manage updates and edits for you, providing ongoing 
        support so you’re never left on your own. Our mission is to build 
        long-term partnerships based on honesty and results. At Amanah, 
        your success is our success."
      />
      <OfferSection
        title="WEBSITES STARTING AT $0 DOWN,$150 A MONTH"
        subtitle="OUR OFFER"
        description="We offer a range of services to help your business thrive online.
        From custom website design to ongoing support, we handle everything
        so you can focus on what you do best. Our team is dedicated to
        providing high-quality, hand-crafted solutions that meet your unique
        needs."
        />
    <QualityBanner/>
    <PricingSection/>
    </>
    
  );
}