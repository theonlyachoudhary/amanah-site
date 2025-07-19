
// Clay laptop SVG with a slot for an image (screenshot)
export default function ClayLaptop({ image = "/desktop-screenshot.webp", alt = "Website screenshot" }) {
  // Adjusted for more even centering
  const svgW = 640;
  const svgH = 400;
  const bodyW = 560;
  const bodyH = 320;
  const bodyX = (svgW - bodyW) / 2; // 40
  const bodyY = 40;
  const screenMargin = 12; // reduced margin
  const screenX = bodyX + screenMargin; // 52
  const screenY = bodyY + screenMargin - 2; // 50
  const screenW = bodyW - screenMargin * 2; // 536
  const screenH = bodyH - screenMargin * 2 + 4; // 300
  const notchW = 56;
  const notchH = 7;
  return (
    <svg
      viewBox={`0 0 ${svgW} ${svgH}`}
      className="w-72 h-44 sm:w-96 sm:h-56 md:w-[32rem] md:h-[20rem] lg:w-[40rem] lg:h-[25rem]"
      style={{ borderRadius: 24 }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Laptop body - white clay */}
      <rect x={bodyX} y={bodyY} width={bodyW} height={bodyH} rx={24} fill="#fff" />
      {/* Subtle shadow for clay effect */}
      <rect x={bodyX} y={bodyY} width={bodyW} height={bodyH} rx={24} fill="url(#clayShadow)" fillOpacity="0.10" />
      <defs>
        <radialGradient id="clayShadow" cx="50%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#d1d5db" stopOpacity="0.2" />
        </radialGradient>
        <clipPath id="laptopScreenClip">
          <rect x={screenX} y={screenY} width={screenW} height={screenH} rx={12} />
        </clipPath>
      </defs>
      {/* Centered screen area */}
      <rect x={screenX} y={screenY} width={screenW} height={screenH} rx={18} fill="#f3f4f6" />
      <image
        href={image}
        x={screenX}
        y={screenY}
        width={screenW}
        height={screenH}
        preserveAspectRatio="xMidYMid meet"
        clipPath="url(#laptopScreenClip)"
      />
      {/* Notch */}
      <rect x={svgW / 2 - notchW / 2} y={screenY - notchH + 2} width={notchW} height={notchH} rx={3.5} fill="#e5e7eb" />
      {/* Laptop base (thin) */}
      <rect x={bodyX + 64} y={bodyY + bodyH + 8} width={bodyW - 128} height={16} rx={8} fill="#e5e7eb" />
      {/* Trackpad (optional, subtle) */}
      <rect x={svgW / 2 - 32} y={bodyY + bodyH + 16} width={64} height={6} rx={3} fill="#e5e7eb" opacity="0.5" />
    </svg>
  );
}
