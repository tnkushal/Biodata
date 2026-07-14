import { useState } from "react";

function Skills({ skills }) {

  const [showSkills, setShowSkills] = useState(true);

  return (

    <section className="skills" id="skills">

      <h2>Skills</h2>

      <button
  className="toggle-btn"
  onClick={() => setShowSkills(!showSkills)}
>

        {showSkills ? "Hide Skills" : "Show Skills"}

      </button>

      {showSkills && (

        <div className="skills-container">

          {skills.map((skill, index) => (

            <div
              className="skill-box"
              key={index}
            >

              {skill}

            </div>

          ))}

        </div>

      )}

    </section>

  );

}

export default Skills;