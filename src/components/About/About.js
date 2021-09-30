import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/1.png";



function About() {
  return (
    <Container fluid >
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>

          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" , color:"white"}}>
            <strong> Full Stack Developer</strong>
            </h1>
            <Aboutcard />
          </Col>
          
          <Col
            md={5}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
     

      </Container>
    </Container>
  );
}

export default About;
