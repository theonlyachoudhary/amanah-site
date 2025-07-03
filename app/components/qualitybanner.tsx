"use client";
import { useState } from "react";
import QualityCard from "./qualitycard";
import QualityScoreCard from "./qualityscorecard";
import ButtonAlt from "./buttonalt";


export default function QualityBanner() {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section className="bg-[var(--primary-color)] w-full py-6 md:py-8 lg:py-10 my-6 md:my-8 lg:my-10 flex flex-col items-center justify-center px-4">
      <div className="w-full md:w-[85%] lg:w-[70%] flex flex-col lg:flex-row gap-8 lg:gap-0">
        <div className="w-full lg:w-[45%] lg:mr-auto">
          <h1 className="text-[var(--primary-white)] font-black text-2xl md:text-3xl lg:text-[48px] leading-tight text-center lg:text-left">
            WE BUILD FOR QUALITY<br />AND PERFORMANCE
          </h1>
          <p className="text-[var(--primary-white)] text-sm md:text-base lg:text-[16px] font-semibold mt-4 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            The hardest part of development is design. That’s where we unfortunately see many of the 
            competition compromise, using templates or low-quality work. Here at Amanah, we work with our
            in-house designers to deliver thoughtful, handcrafted designs built specifically for your business. 
            Only then does it get passed to our development team who work tirelessly into making that design 
            into a masterpiece that crushes all the metrics and wows your competition.
          </p>

          <div className="grid grid-cols-2 gap-2 mt-5 justify-items-center lg:justify-items-start">
            <QualityCard
              icon="/images/quality-icon-1.svg"
              title="100% Custom Designs"
              description="We create unique, custom designs tailored to your brand."
            />
            <QualityCard
              icon="/images/quality-icon-2.svg"
              title="100 Speed Scores"
              description="Our websites are optimized for speed and efficiency."
            />
          </div>
          <div className="grid grid-cols-2 gap-2 mt-5 justify-items-center lg:justify-items-start">
            <QualityCard
              icon="/images/quality-icon-1.svg"
              title="100% Custom Designs"
              description="We create unique, custom designs tailored to your brand."
            />
            <QualityCard
              icon="/images/quality-icon-2.svg"
              title="100 Speed Scores"
              description="Our websites are optimized for speed and efficiency."
            />
          </div>
            <div className="hidden lg:flex justify-end mt-6 lg:mt-8">
            <ButtonAlt
              label="Get Started"
              link="/"
            />
            </div>
 
        </div>

        <div className="w-full lg:w-[45%] lg:ml-auto lg:mt-auto flex flex-col items-center">
          <div className="w-full flex items-center justify-start lg:justify-start gap-1 mb-4">
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
          <div className="w-full h-[250px] sm:h-[300px] lg:h-[400px] rounded-[10px] bg-white flex items-center justify-center overflow-hidden">
            {!imgLoaded && (
              <div className="w-full h-full m bg-white rounded-[20px]" />
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
      
      {/* Button appears at bottom on mobile/tablet, hidden on desktop */}
      <div className="flex lg:hidden justify-center mt-6">
        <ButtonAlt
          label="Get Started"
          link="/"
        />
      </div>
    </section>
  );
}