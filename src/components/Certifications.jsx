function Certifications({ certificates }) {

  return (

    <section
      className="certifications"
      id="certifications"
    >

      <h2>Certifications</h2>

      <div className="certificate-container">

        {certificates.map((certificate, index) => (

          <div
            className="certificate-card"
            key={index}
          >

            {certificate}

          </div>

        ))}

      </div>

    </section>

  );

}

export default Certifications;