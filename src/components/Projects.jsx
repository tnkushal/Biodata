import { useState } from "react";

function Projects({ projects }) {

  const [showProjects, setShowProjects] = useState(true);

  return (

    <section className="projects" id="projects">

      <h2>Projects</h2>

      <button
  className="toggle-btn"
  onClick={() => setShowProjects(!showProjects)}
>
        {showProjects ? "Hide Projects" : "Show Projects"}
      </button>

      {showProjects && (

        <div className="project-container">

          {projects.map((project, index) => (

            <div
              className="project-card"
              key={index}
            >

              <h3>{project.title}</h3>

              <p><strong>Status:</strong> {project.status}</p>

              <p><strong>Technologies:</strong></p>

              <p>{project.technologies}</p>

              <p>{project.description}</p>

            </div>

          ))}

        </div>

      )}

    </section>

  );

}

export default Projects;