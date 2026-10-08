type CaseStudyGalleryProps = {
  title?: string;
  images: {
    image: string;
    alt?: string;
  }[];
};

function CaseStudyGallery({
  title,
  images,
}: CaseStudyGalleryProps) {
  return (
    <section className="case-study-gallery">
      <div className="case-study-gallery__content">
        {title && (
          <h2 className="case-study-gallery__title">
            {title}
          </h2>
        )}

        <div className="case-study-gallery__grid">
          {images.map((item, index) => (
            <div
              className="case-study-gallery__item"
              key={index}
            >
              <img
                src={item.image}
                alt={item.alt || ""}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudyGallery;