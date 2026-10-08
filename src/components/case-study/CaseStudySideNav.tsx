import { useEffect, useState } from "react";
import type { CaseStudySection } from "../../data/caseStudies/types.ts";

type CaseStudySideNavProps = {
  sections: CaseStudySection[];
};

function CaseStudySideNav({
  sections,
}: CaseStudySideNavProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const navigationSections = sections.filter(
    (section) => section.navigationLabel
  );

  useEffect(() => {
    const header = document.querySelector(".case-study-header");
    const body = document.querySelector(".case-study-body");
    const footer = document.querySelector(".footer");

    if (!header || !body || !footer) return;

    const handleScroll = () => {
      const headerRect = header.getBoundingClientRect();
      const bodyRect = body.getBoundingClientRect();
      const footerRect = footer.getBoundingClientRect();

      const headerHasLeftScreen = headerRect.bottom <= 0;
      const bodyIsVisible = bodyRect.bottom > 0;
      const footerHasEnteredScreen = footerRect.top < window.innerHeight;

      setIsVisible(
        headerHasLeftScreen &&
        bodyIsVisible &&
        !footerHasEnteredScreen
      );
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sectionElements = navigationSections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => element !== null);

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top -
              b.boundingClientRect.top
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    sectionElements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [navigationSections]);

  return (
    <nav
      className={`case-study-side-nav ${isVisible ? "case-study-side-nav--visible" : ""
        }`}
    >
      <div className="case-study-side-nav__list">
        {navigationSections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`case-study-side-nav__link ${activeSection === section.id
              ? "case-study-side-nav__link--active"
              : ""
              }`}
          >
            {section.navigationLabel}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default CaseStudySideNav;