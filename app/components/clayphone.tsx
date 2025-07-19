import React from "react";

// Clay phone SVG with a slot for an image (screenshot)
export default function ClayPhone({ image = "/phone-screenshot.webp", alt = "Website screenshot" }) {
  return (
    <svg
      viewBox="0 0 320 640"
      className="w-40 h-80 sm:w-56 sm:h-[22rem] md:w-64 md:h-[26rem] lg:w-80 lg:h-[29rem]"
      style={{ borderRadius: 40 }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Clay body - pure white */}
      <rect x="16" y="16" width="288" height="608" rx="48" fill="#fff" />
      {/* Optional subtle shadow for clay effect */}
      <rect x="16" y="16" width="288" height="608" rx="48" fill="url(#clayShadow)" fillOpacity="0.12" />
      <defs>
        <radialGradient id="clayShadow" cx="50%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#d1d5db" stopOpacity="0.2" />
        </radialGradient>
      </defs>
      {/* Screen area (where screenshot goes) - nearly edge-to-edge */}
      <clipPath id="screenClip">
        <rect x="24" y="32" width="272" height="576" rx="36" />
      </clipPath>
      {/* Thin, centered notch */}
      <rect x={160 - 18} y={24} width={36} height={6} rx={3} fill="#e5e7eb" />
      <image
        href={image}
        x="24"
        y="32"
        width="272"
        height="576"
        clipPath="url(#screenClip)"
        preserveAspectRatio="xMinYMin slice"
      />
    </svg>
  );
}
