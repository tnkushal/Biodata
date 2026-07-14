import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Home({ details }) {
  const [showObjective, setShowObjective] = useState(false);

  return (
    <section className="home" id="home">
      <h1>{details.name}</h1>

      <h2 className="role">
   {details.role}
</h2>

      <h3>{details.college}</h3>

      <button className="objective-btn"onClick={() => setShowObjective(!showObjective)}>
        {showObjective ? "Hide Objective" : "Show Objective"}
      </button>

      {showObjective && (
        <p className="objective">
  <strong>Aspiring Full Stack Developer</strong> passionate about
  building <strong>modern web applications</strong> using the
  <strong> MERN Stack</strong>. I enjoy solving real-world problems through
  clean code, continuously improving my skills in
  <strong> Data Structures & Algorithms</strong>, and creating user-friendly,
  scalable applications.
</p>
      )}

      <div className="buttons">
        <a href={details.github} target="_blank" rel="noreferrer">
          <FaGithub style={{ marginRight: "8px" }} />
          GitHub
        </a>

        <a href={details.linkedin} target="_blank" rel="noreferrer">
          <FaLinkedin style={{ marginRight: "8px" }} />
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Home;