type CaseStudyTextProps = {
  title?: string;
  paragraphs: string[];
  bullets?: string[];
};

function CaseStudyText({
  title,
  paragraphs,
  bullets,
}: CaseStudyTextProps) {
  return (
    <section className="case-study-text">
      <div className="case-study-text__content">
        {title && (
          <h2 className="case-study-text__title">
            {title}
          </h2>
        )}

        <div className="case-study-text__body">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          {bullets && bullets.length > 0 && (
            <ul>
              {bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

export default CaseStudyText;