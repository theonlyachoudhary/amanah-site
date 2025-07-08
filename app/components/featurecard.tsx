type FeatureCardProps = {
  description: string;
  hasCheckmark: boolean;
  isAlt: boolean;
};

export default function FeatureCard({description, hasCheckmark, isAlt}: FeatureCardProps){
  
  return (
    <li className="flex gap-x-3">
      {hasCheckmark ? (
        <svg className="h-6 w-5 flex-none" style={{color: isAlt ? 'var(--primary-white)' : 'var(--primary-color)'}} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
        </svg>
      ) : (
        <svg className="h-6 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z" clipRule="evenodd" />
        </svg>
      )}
      <span className="text-sm sm:text-base md:text-lg">{description}</span>
    </li>
  );
}