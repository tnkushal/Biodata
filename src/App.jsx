import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import profile from "./data/data";

function App() {
  return (
    <>
      

      <Navbar />

      <Home details={profile} />

      <About details={profile} />

      <Education education={profile.education} />

      <Skills skills={profile.skills} />

      <Projects projects={profile.projects} />

      <Certifications certificates={profile.certifications} />

      <Footer />
    </>
  );
}

export default App;