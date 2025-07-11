import Image from 'next/image';

type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
}

type ArticleGalleryProps = {
  images: GalleryImage[];
  columns?: 1 | 2 | 3;
}

export default function ArticleGallery({ images, columns = 2 }: ArticleGalleryProps) {
  const getGridClasses = () => {
    switch (columns) {
      case 1:
        return 'grid-cols-1';
      case 3:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      default:
        return 'grid-cols-1 md:grid-cols-2';
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] lg:-ml-[calc(50vw-2rem)] lg:-mr-[calc(50vw-2rem)] my-8 px-4">
      <div className={`grid ${getGridClasses()} gap-4 md:gap-6`}>
        {images.map((image, index) => (
          <div key={index} className="group">
            <div className="relative w-full h-[250px] sm:h-[300px] overflow-hidden rounded-lg flex items-center justify-center"
                 style={{ backgroundColor: 'var(--primary-color)' }}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <span className="absolute inset-0 flex items-center justify-center text-sm font-medium rounded-lg px-2 text-center"
                    style={{ color: 'var(--primary-white)', backgroundColor: 'var(--primary-color)' }}>
                {image.alt}
              </span>
            </div>
            {image.caption && (
              <p className="text-sm text-black/60 italic mt-2">
                {image.caption}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
