"use client";
import { useState } from "react";
import QualityCard from "./qualitycard";
import QualityScoreCard from "./qualityscorecard";
import ButtonAlt from "./buttonalt";


export default function QualityBanner() {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section className="bg-[var(--primary-color)] w-full min-h-screen flex flex-col items-center justify-center py-16 md:py-20 lg:py-24 my-16 md:my-20 lg:my-24 px-4">
      <div className="sm:w-[95%] md:w-[90%] 2xl:w-[80%] flex flex-col xl:flex-row gap-8 xl:gap-12">
        <div className="w-full xl:w-[55%]">
          <h1 className="text-[var(--primary-white)] font-black text-3xl sm:text-4xl lg:text-5xl leading-tight text-left">
            We Build For Quality and Performance
          </h1>
          <p className="text-[var(--primary-white)] text-sm sm:text-base md:text-lg font-semibold mt-4 text-left">
            Design is where most agencies cut corners—but not us. At Amanah, every site starts with a handcrafted design tailored to your business, not a template. Once finalized, it's brought to life using modern frameworks like Next.js and clean, scalable code. Our development practices are performance‑driven from the ground up, allowing us to consistently hit 100 scores on Google Lighthouse for speed, accessibility, best practices, and SEO. We don’t just build websites—we engineer digital experiences that set the standard.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <QualityCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.998 15.998 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                </svg>
              }
              title="100% Custom Designs"
              description="Unique, handcrafted designs built from scratch to match your brand—never templates."
            />
            <QualityCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                </svg>
              }
              title="100 Speed Scores"
              description="Blazing‑fast sites built with Next.js and clean code—engineered to hit perfect 100s on Google Lighthouse."
            />
            <QualityCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              }
              title="SEO Optimized"
              description="Responsive, touch-friendly design built to look and perform flawlessly on every device."
            />
            <QualityCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              }
              title="Mobile First"
              description="Clean, semantic code and best practices baked in—so your site ranks higher, faster."
            />
          </div>
        </div>

        {/* Right sidebar - only visible on xl screens */}
        <div className="hidden xl:flex w-full xl:w-[45%] flex-col items-center">
          <div className="w-full flex justify-center space-x-2 mb-6 mt-auto">
            <QualityScoreCard
              title="100%"
              description="Satisfaction Guaranteed"
            />
            <QualityScoreCard
              title="100"
              description="Page Speed Scores"
            />
            <QualityScoreCard
              title="100%"
              description="Handcrafted Designs"
            />
          </div>
          <div className="w-full h-[400px] rounded-[10px] bg-white flex items-center justify-center overflow-hidden">
            <img
              src="/speed-scores.webp"
              alt="Speed Scores"
              className="w-full h-full max-w-full rounded-[20px] object-contain object-top"
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
          <img
            src="/speed-scores.webp"
            alt="Speed Scores"
            className="w-full h-full max-w-full rounded-[20px] object-contain object-top"
          />
        </div>
      </div>
      
      {/* Button appears at bottom for all screen sizes */}
      <div className="flex justify-center mt-8">
        <ButtonAlt
          label="Get Started"
          link="/contact"
        />
      </div>
    </section>
  );
}