import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation.tsx";
import Footer from "../components/Footer.tsx";
import CaseStudyHeader from "../components/case-study/CaseStudyHeader.tsx";
import CaseStudyContent from "../components/case-study/CaseStudyContent.tsx";
import inventoryLoss from "../data/caseStudies/inventory-loss.ts";
import physicianUtilization from "../data/caseStudies/orthopedic.ts"
import multifamily from "../data/caseStudies/multifamily-updated.ts";
import CaseStudyNavigation from "../components/case-study/CaseStudyNavigation.tsx";
import CaseStudySideNav from "../components/case-study/CaseStudySideNav.tsx";

function CaseStudy() {
  const { projectId } = useParams();

  const caseStudies = {
    "inventory-loss": inventoryLoss,
    "physician-utilization": physicianUtilization,
    "multifamily-business-value-discovery": multifamily
  };

  const caseStudy = projectId
    ? caseStudies[projectId as keyof typeof caseStudies]
    : undefined;

  if (!caseStudy) {
    return (
      <>
        <Navigation />

        <main className="case-study-not-found">
          <section>
            <h1>Case study not found</h1>
          </section>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />

      <main>
        <CaseStudyHeader
          category={caseStudy.category}
          title={caseStudy.title}
          description={caseStudy.description}
          heroImage={caseStudy.heroImage}
        />

        <div className="case-study-body">
          <CaseStudyContent sections={caseStudy.sections} />
          <CaseStudySideNav sections={caseStudy.sections} />
        </div>

        <CaseStudyNavigation
          currentProjectId={caseStudy.id}
        />
      </main>

      <Footer />
    </>
  );
}

export default CaseStudy;