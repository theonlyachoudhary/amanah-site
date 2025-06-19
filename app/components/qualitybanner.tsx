"use client";
import { useState } from "react";
import QualityCard from "./qualitycard";
import QualityScoreCard
 from "./qualityscorecard";
export default function QualityBanner() {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section className="bg-[var(--primary-color)] w-full py-10 my-10 flex flex-col items-center justify-center">
      <div className="w-[70%] flex">
        <div className="w-[45%] mr-auto">
          <h1 className="text-[var(--primary-white)] font-black text-[48px] leading-tight">
            WE BUILD FOR QUALITY<br />AND PERFORMANCE
          </h1>
          <p className="text-[var(--primary-white)] text-[16px] font-semibold">
            The hardest part of development is design. That’s where we unfortunately see many of the competition compromise, using templates or low-quality work. Here at Amanah, we work with out in-house designers to deliver thoughtful, handcrafted designs built specifically for your business. Only then does it get passed to our development team who work tirelessly into making that design into a masterpiece that crushes all the metrics and wows your competition.
          </p>

          <div className="flex items-center justify-between mt-5">
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
          <div className="flex items-center justify-between mt-5">
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
        </div>

        <div className="w-[45%] ml-auto mt-auto items-center">
          <div className="w-full flex items-center">
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
          <div className="w-full h-[60%] mt-auto rounded-[10px] bg-white flex items-center justify-center overflow-hidden">
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
    </section>
  );
}