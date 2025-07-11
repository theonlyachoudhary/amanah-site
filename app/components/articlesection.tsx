type ArticleSectionProps = {
  title: string;
  content: string;
}

export default function ArticleSection({ title, content }: ArticleSectionProps) {
  return (
    <>
      <h3 className="font-bold text-2xl text-black mt-8 mb-4">{title}</h3>
      <p className="text-base leading-8 mb-6 text-black/80 whitespace-pre-line">
        {content}
      </p>
    </>
  );
}
