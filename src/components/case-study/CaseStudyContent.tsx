import CaseStudyText from "./CaseStudyText.tsx";
import CaseStudyImage from "./CaseStudyImage.tsx";
import CaseStudyQuestions from "./CaseStudyQuestions.tsx";
import CaseStudySteps from "./CaseStudySteps.tsx";
import type { CaseStudySection } from "../../data/caseStudies/types.ts";

type CaseStudyContentProps = {
  sections: CaseStudySection[];
};

function CaseStudyContent({
  sections,
}: CaseStudyContentProps) {
  return (
    <div className="case-study-content">
      {sections.map((section) => {
        let content;

        switch (section.type) {
          case "text":
            content = (
              <CaseStudyText
                title={section.title}
                paragraphs={section.paragraphs}
                bullets={section.bullets}
              />
            );
            break;

          case "image":
            content = (
              <CaseStudyImage
                title={section.title}
                image={section.image}
                alt={section.alt}
              />
            );
            break;

          case "questions":
            content = (
              <CaseStudyQuestions
                title={section.title}
                questions={section.questions}
              />
            );
            break;

          case "steps":
            content = (
              <CaseStudySteps
                title={section.title}
                steps={section.steps}
              />
            );
            break;

          default:
            return null;
        }

        return (
          <div
            key={section.id}
            id={section.id}
            className="case-study-section"
          >
            {content}
          </div>
        );
      })}
    </div>
  );
}

export default CaseStudyContent;