import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import Skills from "./Intro/skills";
import Tools from "./Intro/tools";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
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
        <Row>
<Col md={12} className="home-about-social">
  <h1>Find Me</h1>
  <p>
    Feel free to connect with me
  </p>
  
  <ul className="home-about-social-links">
    <li className="social-icons">
      <a
        href="https://github.com/fizzaaz"
        target="_blank"
        rel="noreferrer"
        className="icon-colour  home-social-icons"
      >
        <AiFillGithub />
      </a>
    </li>
    <li className="social-icons">
      <a
        href="https://twitter.com/"
        target="_blank"
        rel="noreferrer"
        className="icon-colour  home-social-icons"
      >
        <AiOutlineTwitter />
      </a>
    </li>
    <li className="social-icons">
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noreferrer"
        className="icon-colour  home-social-icons"
      >
        <FaLinkedinIn />
      </a>
    </li>
    <li className="social-icons">
      <a
        href="https://www.instagram.com/fizz.zehra97/"
        target="_blank"
        rel="noreferrer"
        className="icon-colour home-social-icons"
      >
        <AiFillInstagram />
      </a>
    </li>
  </ul>
</Col>

</Row>
      
      </Container>
    </Container>
  );
}
export default Intro;
