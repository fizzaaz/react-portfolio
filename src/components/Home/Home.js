import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/avatar.svg";
import Particle from "../Particle";
import About from "../About/About";
import Home2 from "./Intro";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hey! <span className="wave" role="img" aria-labelledby="wave">👋</span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> FIZZA ZAIDI</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
<About/>
      <Home2 />
    </section>
  );
}

export default Home;
