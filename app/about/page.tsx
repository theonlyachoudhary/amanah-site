import SecondaryHero from "../components/secondaryhero";
import ArticleContent from "../components/articlecontent";
import ArticleSection from "../components/articlesection";
import ArticleQuote from "../components/articlequote";
import ButtonSecondary from "../components/buttonsecondary";

export default function AboutPage() {
  return (
    <>
      <SecondaryHero
        title="ABOUT AMANAH WEB"
      />
      
      {/* Arabic Greeting */}
      <div className="px-4 py-8" style={{ backgroundColor: 'var(--primary-white)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl" style={{ color: 'var(--primary-color)' }}>
            السلام على من اتبع الهدى
          </h2>
        </div>
      </div>
      
      {/* Article Content Section */}
      <section className="px-4 py-16 md:py-20 lg:py-24 md:w-[90%] 2xl:w-[80%] mx-auto" style={{ backgroundColor: 'var(--primary-white)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="rounded-lg p-6 md:p-8 lg:p-10 shadow-lg" style={{ backgroundColor: 'var(--primary-white)' }}>
            
            {/* Subtitle */}
            <p className="font-black text-3xl sm:text-4xl lg:text-5xl text-center mb-8 leading-none whitespace-pre-line" style={{ color: 'var(--primary-color)' }}>
              Trusted Website Partner for Contractors & Small Businesses
            </p>
            
            <hr className="border-black/10 mb-8" />
            
            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              
              <ArticleSection 
              title="Our Mission"
              content="Amanah Web was founded with one clear mission: To help hardworking businesses succeed online—without the tech headaches.

      We're not just another web design company. We're your long-term partner in growing your business, generating leads, and keeping your online presence running smoothly and securely. We believe small businesses deserve the same quality, performance, and support as the big guys—without the bloated price tags."
              />

              <ArticleSection 
              title="Who We Serve"
              content="We specialize in working with:

      • General contractors
      • HVAC companies  
      • Electricians & plumbers
      • Clinics, gyms, and local service providers
      • Family-run and independent small businesses

      If your time is better spent running your business than learning web jargon or dealing with unreliable freelancers—you're exactly who we built this for."
              />

              <ArticleSection 
              title="Why We're Different"
              content={`We handle the hard parts so you don't have to. Our promise:

      • Every site is custom, hand-designed, and built for performance and SEO.
      • We manage updates and edits for you—no disappearing after launch.
      • Ongoing support, so you’re never left on your own.
      • We build long-term partnerships based on honesty and results.
      • No hidden fees, no surprise invoices—just clear, honest pricing.
      `}
              />

              <ArticleSection 
              title="Our Story"
              content="Amanah Web began with a simple idea: What if small businesses had a web partner who actually cared about results?

      Tired of seeing good companies stuck with slow, outdated, or overpriced websites, we built Amanah to offer enterprise-quality service on a small business budget.

      Since 2018, we've launched 50+ websites for local businesses, refined our systems, and built a reputation for honest, reliable, and lead-focused work."
              />

              <ArticleSection 
              title="What Does 'Amanah' Mean?"
              content="The word 'Amanah' means trust, responsibility, and integrity. It's a value we take seriously. We believe business only works when people trust each other—so we've built our company around earning and keeping yours.

      That means:
      • We under-promise and over-deliver
      • We prioritize long-term relationships, not one-time invoices  
      • We treat your business like it's our own"
              />

              


              <ArticleQuote 
              quote="You don't need another flashy website. You need one that works hard, runs fast, and grows your business."
              />

              <ArticleContent 
              content="If that's what you're looking for—we're ready when you are."
              />

              {/* Call to Action */}
              <div className="">
              <ButtonSecondary label="Get Started Today" link="/contact" />
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}