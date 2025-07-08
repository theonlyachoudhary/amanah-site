"use client";
import { useState } from "react";
import QualityCard from "./qualitycard";
import QualityScoreCard from "./qualityscorecard";
import ButtonAlt from "./buttonalt";


export default function QualityBanner() {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section className="bg-[var(--primary-color)] w-full min-h-[85vh] flex flex-col items-center justify-center py-16 md:py-20 lg:py-24 my-16 md:my-20 lg:my-24 px-4">
      <div className="sm:w-[95%] md:w-[90%] 2xl:w-[80%] flex flex-col xl:flex-row gap-8 xl:gap-12">
        <div className="w-full xl:w-[55%]">
          <h1 className="text-[var(--primary-white)] font-black text-3xl sm:text-4xl lg:text-5xl leading-tight text-left">
            WE BUILD FOR QUALITY AND PERFORMANCE
          </h1>
          <p className="text-[var(--primary-white)] text-sm sm:text-base md:text-lg font-semibold mt-4 text-left">
            The hardest part of development is design. That's where we unfortunately see many of the
            competition compromise, using templates or low-quality work. Here at Amanah, we work with our
            in-house designers to deliver thoughtful, handcrafted designs built specifically for your business. 
            Only then does it get passed to our development team who work tirelessly into making that design 
            into a masterpiece that crushes all the metrics and wows your competition.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <QualityCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.998 15.998 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                </svg>
              }
              title="100% Custom Designs"
              description="We create unique, custom designs tailored to your brand."
            />
            <QualityCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                </svg>
              }
              title="100 Speed Scores"
              description="Our websites are optimized for speed and efficiency."
            />
            <QualityCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              }
              title="SEO Optimized"
              description="Built for search engines from the ground up."
            />
            <QualityCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              }
              title="Mobile First"
              description="Responsive design that works on all devices."
            />
          </div>
        </div>

        {/* Right sidebar - only visible on xl screens */}
        <div className="hidden xl:flex w-full xl:w-[45%] flex-col items-center">
          <div className="w-full flex justify-center space-x-2 mb-6 mt-auto">
            <QualityScoreCard
              title="100%"
              description="SATISFACTION GUARANTEED"
            />
            <QualityScoreCard
              title="100"
              description="PAGE SPEED SCORES"
            />
            <QualityScoreCard
              title="100%"
              description="HANDCRAFTED DESIGNS"
            />
          </div>
          <div className="w-full h-[400px] rounded-[10px] bg-white flex items-center justify-center overflow-hidden">
            {!imgLoaded && (
              <div className="w-full h-full bg-white rounded-[20px]" />
            )}
            <img
              src="/images/quality-banner.png"
              alt="Quality Banner"
              className={`w-full h-full rounded-[20px] object-cover transition-opacity duration-300 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
              onLoad={() => setImgLoaded(true)}
            />
          </div>
        </div>
      </div>
      
      {/* Quality Score Cards and Image - show below content on lg screens only */}
      <div className="block xl:hidden sm:w-[95%] md:w-[90%] 2xl:w-[80%] mt-8 mx-auto">
        <div className="w-full flex justify-center space-x-3 mb-6">
          <QualityScoreCard
            title="100%"
            description="SATISFACTION GUARANTEED"
          />
          <QualityScoreCard
            title="100"
            description="PAGE SPEED SCORES"
          />
          <QualityScoreCard
            title="100%"
            description="HANDCRAFTED DESIGNS"
          />
        </div>
        <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-[10px] bg-white flex items-center justify-center overflow-hidden">
          {!imgLoaded && (
            <div className="w-full h-full bg-white rounded-[20px]" />
          )}
          <img
            src="/images/quality-banner.png"
            alt="Quality Banner"
            className={`w-full h-full rounded-[20px] object-cover transition-opacity duration-300 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setImgLoaded(true)}
          />
        </div>
      </div>
      
      {/* Button appears at bottom for all screen sizes */}
      <div className="flex justify-center mt-8">
        <ButtonAlt
          label="Get Started"
          link="/"
        />
      </div>
    </section>
  );
}