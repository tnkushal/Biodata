function Navbar() {
  return (
    <nav className="navbar">
      <h1>About Kushal</h1>

      <ul>
        <li>
          <a href="#home">
            <i class="fi fi-ss-house-chimney"></i> Home
          </a>
        </li>

        <li>
          <a href="#about">
            <i className="fi fi-ts-id-card-clip-alt"></i> About
          </a>
        </li>

        <li>
          <a href="#education">
            <i className="fi fi-sr-graduation-cap"></i> Education
          </a>
        </li>

        <li>
          <a href="#skills">
           <i class="fi fi-ss-user-skill-gear"></i> Skills
          </a>
        </li>

        <li>
          <a href="#projects">
            <i className="fi fi-ss-diagram-project"></i> Projects
          </a>
        </li>

        <li>
          <a href="#certifications">
            <i className="fi fi-sr-badge"></i> Certifications
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;