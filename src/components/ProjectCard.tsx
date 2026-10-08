import type { Project } from "../data/projects.ts";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.href}
      className={`project-card project-card--${project.size}`}
    >
      <div className="project-card__image">
        <img
          src={project.image}
          alt=""
        />
      </div>

      <div className="project-card__info">
        <p className="project-card__client">
          {project.client}
        </p>

        <h3 className="project-card__title">
          {project.title}
        </h3>
      </div>
    </a>
  );
}

export default ProjectCard;