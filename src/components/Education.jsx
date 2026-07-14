function Education({ education }) {

  return (

    <section className="education" id="education">

      <h2>Education</h2>

      <div className="education-container">

        {education.map((item, index) => (

          <div className="card" key={index}>

            <h3>{item.course}</h3>

            <p>{item.institute}</p>

            <p>{item.year}</p>

            {item.cgpa && (

              <p>

                <strong>CGPA:</strong> {item.cgpa}

              </p>

            )}

          </div>

        ))}

      </div>

    </section>

  );

}

export default Education;