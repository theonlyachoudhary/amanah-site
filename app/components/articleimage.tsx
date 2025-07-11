import Image from 'next/image';

type ArticleImageProps = {
  src: string;
  alt: string;
  caption?: string;
  breakout?: 'none' | 'wide' | 'full';
}

export default function ArticleImage({ src, alt, caption, breakout = 'none' }: ArticleImageProps) {
  const getContainerClasses = () => {
    switch (breakout) {
      case 'full':
        return 'w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] my-8';
      case 'wide':
        return 'w-full max-w-6xl mx-auto relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] lg:-ml-[calc(50vw-2rem)] lg:-mr-[calc(50vw-2rem)] my-8';
      default:
        return 'w-full my-6';
    }
  };

  return (
    <div className={getContainerClasses()}>
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
        />
      </div>
      {caption && (
        <p className="text-sm text-black/60 italic text-center mt-3 px-4">
          {caption}
        </p>
      )}
    </div>
  );
}
