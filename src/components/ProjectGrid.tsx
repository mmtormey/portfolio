import { projects } from "../data/projects.ts";
import ProjectCard from "./ProjectCard.tsx";

function ProjectGrid() {
  return (
    <section id="projects" className="projects">

      <div className="projects__header">
        <h2>Featured Work</h2>
        <div className="projects__header-line"></div>
      </div>

      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>

    </section>
  );
}

export default ProjectGrid;