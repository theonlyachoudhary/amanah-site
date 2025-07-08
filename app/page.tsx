import Hero from './components/hero';
import InfoSection from './components/infosection';
import OfferSection from './components/offersection';
import QualityBanner from './components/qualitybanner';
import PricingSection from './components/pricingsection';


export default function Home() {
  return (
    <>

      <Hero />
      
      <InfoSection
        title={"HANDLING THE HARD PARTS SO YOU DON'T HAVE TO"}
        subtitle="WHAT WE DO"
        description="At Amanah Web Studios, we create custom, hand-designed,
        enterprise-level websites for small buisness who just want something better. Every line 
        of code is crafted for performance and SEO, ensuring your site runs 
        smoothly and keeps Google happy. We're not in the buisness of building websites and
        disappearing. We manage updates and edits for you, providing ongoing 
        support so you’re never left on your own. Our mission is to build 
        long-term partnerships based on honesty and results."
      />
      <OfferSection
        title="WEBSITES STARTING AT $0 DOWN,$150 A MONTH"
        subtitle="OUR OFFER"
        description="We offer a comprehensive package for your buisness, taking care of anything and everything related
        to your website. As a buisness, the last thing you want to be doing is managing 100 things that you
        don't have the time for. Let us handle that for you."
      />
      <QualityBanner />
      <PricingSection />

    </>
  );
}
