type ArticleTagsProps = {
  tags: string[];
}

export default function ArticleTags({ tags }: ArticleTagsProps) {
  return (
    <div className="flex flex-wrap gap-2 mt-8">
      {tags.map((tag, index) => (
        <a key={index} href="#" className="text-xs font-medium hover:opacity-75 transition duration-300 ease-in-out px-3 py-1 rounded-full"
           style={{ color: 'var(--primary-color)', backgroundColor: 'var(--primary-white)' }}>
          #{tag}
        </a>
      ))}
    </div>
  );
}
