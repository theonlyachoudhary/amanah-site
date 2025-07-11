type ArticleContentProps = {
  content: string;
}

export default function ArticleContent({ content }: ArticleContentProps) {
  return (
    <div className="prose prose-lg max-w-none">
      <p className="text-base leading-8 mb-6 text-black/80 whitespace-pre-line">
        {content}
      </p>
    </div>
  );
}
