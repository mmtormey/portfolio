type CaseStudyHeaderProps = {
  category: string;
  title: string;
  description: string;
  heroImage: string;
};

function CaseStudyHeader({
  category,
  title,
  description,
  heroImage,
}: CaseStudyHeaderProps) {
  return (
    <header className="case-study-header">

      <div className="case-study-header__content">

        <div className="case-study-header__text">
          <p className="case-study-header__category">
            {category}
          </p>

          <h1 className="case-study-header__title">
            {title}
          </h1>

          <p className="case-study-header__description">
            {description}
          </p>
        </div>

        <div className="case-study-header__image">
          <img
            src={heroImage}
            alt=""
          />
        </div>

      </div>

    </header>
  );
}

export default CaseStudyHeader;