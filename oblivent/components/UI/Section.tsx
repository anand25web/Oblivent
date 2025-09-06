interface SectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function Section({ children, title, subtitle, className = '' }: SectionProps) {
  return (
    <section className={`py-12 ${className}`}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>}
            {subtitle && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}