type CaseStudyQuestionsProps = {
  title?: string;
  questions: {
    question: string;
    description: string;
  }[];
};

function CaseStudyQuestions({
  title,
  questions,
}: CaseStudyQuestionsProps) {
  return (
    <section className="case-study-questions">
      <div className="case-study-questions__content">
        {title && (
          <h2 className="case-study-questions__title">
            {title}
          </h2>
        )}

        <div className="case-study-questions__list">
          {questions.map((item, index) => (
            <div
              className="case-study-questions__item"
              key={index}
            >
              <div className="case-study-questions__number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="case-study-questions__text">
                <h3>{item.question}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudyQuestions;