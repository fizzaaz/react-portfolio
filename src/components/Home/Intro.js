import React from "react";
import { Container } from "react-bootstrap";
import Skills from "./Intro/skills";
import Tools from "./Intro/tools";
import Contact from "../../components/Contact"

/* import skills and tools from a separte component */
function Intro() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <h1 className="project-heading">
        <strong > Professional Skills </strong>
        </h1>
        <Skills/>

        <h1 className="project-heading">
          <strong>Tools & Technologies</strong> 
        </h1>
        <Tools />
<Contact/>
       
      </Container>
    </Container>
  );
}
export default Intro;
