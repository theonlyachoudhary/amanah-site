import SecondaryHero from "../components/secondaryhero";
import ArticleContent from "../components/articlecontent";
import ArticleSection from "../components/articlesection";
import ArticleQuote from "../components/articlequote";
import ButtonSecondary from "../components/buttonsecondary";

export default function AboutPage() {
  return (
    <>
      <SecondaryHero
        title="ABOUT US"
      />
      
      {/* Arabic Greeting 
      <div className="px-4 py-8" style={{ backgroundColor: 'var(--primary-white)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl" style={{ color: 'var(--primary-color)' }}>
            السلام على من اتبع الهدى
          </h2>
        </div>
      </div>
      */}

      {/* Article Content Section */}
      <section className="px-4 py-16 md:py-20 lg:py-24 md:w-[90%] 2xl:w-[80%] mx-auto" style={{ backgroundColor: 'var(--primary-white)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="rounded-lg p-6 md:p-8 lg:p-10 shadow-lg" style={{ backgroundColor: 'var(--primary-white)' }}>
            
            {/* Subtitle */}
            <p className="font-black text-3xl sm:text-4xl lg:text-5xl text-center mb-8 leading-none whitespace-pre-line" style={{ color: 'var(--primary-color)' }}>
              The State of the Web is Broken
            </p>
            
            <hr className="border-black/10 mb-8" />
            
            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              
              <ArticleSection 
              title=""
              content={`As the years go on, the quality of websites are getting worse and worse. Bloated. Broken. Built to be abandoned. And somehow, no one seems to take the blame.

                Meanwhile agencies and freelancers are making a quick buck ($$$) - leaving business owners stuck with a subpar site and even less money to show for it. Let’s be honest: developing a website for a business isn’t some some project you throw on your resume. It’s not a gig. It's a responsibility. Someone out there is relying on that site to transform their online presence and drive real sales. But just weeks after the launch, the developer is nowhere to be found.
                `}
              />



              <ArticleSection 
              title="This is Amanah Web Studios"
              content={`We’re here to change that. Founded by a real developer who’s watched this industry rot from the inside, Amanah Web Studios is built on one simple belief: businesses deserve better. We’ve seen too many times - agencies churn out cookie cutter sites and disappear the moment the check clears. That’s not a website, that’s a liability. A real website is an extension of your business. Sometimes, it is your storefront. It has to reflect who you are. Evolve as your market does. And most importantly, it needs to be taken care of.

                That’s what we do. We don’t disappear. We stick with you. We maintain, adapt, improve, and scale your digital presence – because that’s what a business actually needs.
                `}
              />

              <ArticleSection 
              title="Built on Trust"
              content={`And that’s exactly what we’re offering: a long-term partnership built on integrity, commitment, and care.
              
              Every site at Amanah starts with research. We learn your market, your customers, your edge. Then we design—from layout to copy, colors to buttons—all crafted for your audience.

              We build with Next.js, the gold standard of modern web development. And instead of charging you $6,000 upfront like most “premium” studios, we offer everything for just $200/month. Why? Because we’re not here for a quick sale. We’re here to grow with you.

              After launch, we don’t walk away. Want to change that headline? Add a new page? Rethink your design entirely? All included. Same price.

              No gimmicks. No ghosting.
              Just craftsmanship. Consistency. Commitment.
              That’s Amanah.`}
              />

              <ArticleQuote 
              quote="Our biggest fear? Seeing businesses settling for less."
              />

              {/* Call to Action */}
              <div className="">
              <ButtonSecondary label="Get In Touch" link="/contact" />
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}