type ArticleQuoteProps = {
  quote: string;
}

export default function ArticleQuote({ quote }: ArticleQuoteProps) {
  return (
    <blockquote className="text-lg italic leading-8 my-8 p-6 border-l-4 font-semibold text-black/70"
               style={{ borderColor: 'var(--primary-color)', backgroundColor: 'var(--primary-white)' }}>
      {quote}
    </blockquote>
  );
}
