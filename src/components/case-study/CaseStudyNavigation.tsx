import { Link } from "react-router-dom";
import { projects } from "../../data/projects.ts";

type CaseStudyNavigationProps = {
  currentProjectId: string;
};

function CaseStudyNavigation({
  currentProjectId,
}: CaseStudyNavigationProps) {
  const currentIndex = projects.findIndex(
    (project) => project.id === currentProjectId
  );

  const nextProject =
    projects[(currentIndex + 1) % projects.length];

  return (
    <nav className="case-study-navigation">
      <div className="case-study-navigation__content">
        <Link
          to="/#projects"
          className="case-study-navigation__back"
        >
          ← Back to Projects
        </Link>

        <Link
          to={nextProject.href}
          className="case-study-navigation__next"
        >
          <span className="case-study-navigation__direction">
            Next →
          </span>

          <span className="case-study-navigation__title">
            {nextProject.title}
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default CaseStudyNavigation;