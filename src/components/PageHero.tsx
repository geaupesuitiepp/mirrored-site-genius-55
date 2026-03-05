interface PageHeroProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

const PageHero = ({ title, description, children }: PageHeroProps) => {
  return (
    <section className="bg-nordic-gradient py-20">
      <div className="container">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-primary-foreground/80">{description}</p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
