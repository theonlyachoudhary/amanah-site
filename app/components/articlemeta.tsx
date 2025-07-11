type ArticleMetaProps = {
  readTime: string;
  author: string;
  category: string;
}

export default function ArticleMeta({ readTime, author, category }: ArticleMetaProps) {
  return (
    <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-black/65 mb-8">
      {readTime && (
        <span className="flex items-center gap-2">
          <svg className="w-4 h-4" style={{ color: 'var(--primary-color)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{readTime}</span>
        </span>
      )}

      {author && (
        <span className="flex items-center gap-2">
          <svg className="w-4 h-4" style={{ color: 'var(--primary-color)' }} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13.5 2.5L16.17 5.17L10.5 10.84L15.16 15.5L20.83 9.83L23.5 12.5L22 14L21 9ZM1 21H23L12 10L1 21Z"/>
          </svg>
          <span>{author}</span>
        </span>
      )}

      {category && (
        <span className="flex items-center gap-2">
          <svg className="w-4 h-4" style={{ color: 'var(--primary-color)' }} fill="currentColor" viewBox="0 0 24 24">
            <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"/>
          </svg>
          <span>{category}</span>
        </span>
      )}
    </div>
  );
}
