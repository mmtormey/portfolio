export type CaseStudyTextSection = {
  type: "text";
  id: string;
  title?: string;
  navigationLabel?: string;
  paragraphs: string[];
  bullets?: string[];
};

export type CaseStudyImageSection = {
  type: "image";
  id: string;
  title?: string;
  navigationLabel?: string;
  image: string;
  alt?: string;
};

export type CaseStudyQuestionsSection = {
  type: "questions";
  id: string;
  title?: string;
  navigationLabel?: string;
  questions: {
    question: string;
    description: string;
  }[];
};

export type CaseStudyStepsSection = {
  type: "steps";
  id: string;
  title?: string;
  navigationLabel?: string;
  steps: {
    title: string;
    description: string;
  }[];
};

export type CaseStudySection =
  | CaseStudyTextSection
  | CaseStudyImageSection
  | CaseStudyQuestionsSection
  | CaseStudyStepsSection;

export type CaseStudy = {
  id: string;
  category: string;
  title: string;
  description: string;
  heroImage: string;
  sections: CaseStudySection[];
};