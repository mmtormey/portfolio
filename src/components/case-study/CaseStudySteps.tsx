type CaseStudyStepsProps = {
  title?: string;
  steps: {
    title: string;
    description: string;
  }[];
};

function CaseStudySteps({
  title,
  steps,
}: CaseStudyStepsProps) {
  return (
    <section className="case-study-steps">
      <div className="case-study-steps__content">
        {title && (
          <h2 className="case-study-steps__title">
            {title}
          </h2>
        )}

        <div className={`case-study-steps__grid${steps.length}`}>
          {steps.map((step, index) => (
            <div
              className="case-study-steps__item"
              key={index}
            >
              <div className="case-study-steps__number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudySteps;