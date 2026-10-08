type CaseStudyImageProps = {
  image: string;
  alt?: string;
  title?: string;
};

function CaseStudyImage({
  image,
  alt = "",
  title,
}: CaseStudyImageProps) {
  return (
    <section className="case-study-image">
      <div className="case-study-image__content">
        {title && (
          <h2 className="case-study-image__title">
            {title}
          </h2>
        )}

        <img
          src={image}
          alt={alt}
          className="case-study-image__img"
        />
      </div>
    </section>
  );
}

export default CaseStudyImage;