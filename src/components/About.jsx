function About({ details }) {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>

      <div className="about-card">
        <p className="about-text">
          {details.about}
        </p>
      </div>
    </section>
  );
}

export default About;