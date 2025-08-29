import Hero from './components/hero';
import InfoSection from './components/infosection';
import OfferSection from './components/offersection';
import QualityBanner from './components/qualitybanner';
import PricingSection from './components/pricingsection';
import ContactFormSection from './components/contactformsection';


export default function Home() {
  return (
    <>

      <Hero />
      
      <InfoSection
        title={"Handling the Hard Parts So you Don\'t Have To"}
        subtitle="What We Do"
        description="At Amanah Web Studios, we create custom, hand-designed,
        enterprise-level websites for buisness who just need something better. Every line 
        of code is crafted for performance and SEO, ensuring your site runs 
        smoothly and keeps Google happy. We manage updates and edits for you, providing ongoing 
        support so you’re never left on your own. Our mission is to build 
        long-term partnerships based on honesty and results."
      />
      <OfferSection
        title="Comprehensive Website and Infrastructure Development"
        subtitle="Our Offer"
        description="We offer a comprehensive package for your buisness, taking care of anything and everything related
        to your website and technology needs. As a buisness, the last thing you want to be doing is managing 100 things that you
        don't have the time for. Let us handle that for you."
      />
      <QualityBanner />
      <PricingSection />
      <ContactFormSection />
    </>
  );
}
