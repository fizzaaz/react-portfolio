import React, {  useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "./cv.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";


  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
    
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="FRONT-END DEVELOPER"
              date="JAN'18 - FEB'19"
              content={[
                "Developed websites from the front to backend using PHP, JavaScript, HTML and CSS. Enhanced user experience and accomplish webpage objectives by creating website structure, navigation and page optimization.",
              ]}
            />
            <Resumecontent
              title="FULL STACK DEVELOPER"
              date="MAR'19-FEB'20"
              content={[
                "Developed web applications to analyze and process data for different clients. Played a key role in the development, improvement, and operation of web-based software. Gained expertise in Bootstrap, Node.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="UNIVERSITY OF TEXAS AUSTIN "
              date="April'21 - October'21"
              content={['Coding Bootcamp']}
            />

            <Resumecontent
              title="BAHRIA UNIVERSITY KARACHI CAMPUS"
              date="2016-2020"
              content={[
                "Bachelors of Science in Computer Science",
              ]}
            />

              
            <h3 className="resume-title">PROJECTS</h3>
            <Resumecontent
              title=""
              content={[
                `Online Food Order website`,
                `Automation of School Science Laboratory System`,
                "Super Market Point of Sale",
                "Travel Planner",
                "Social App (High5)",
                "Online Food Order Desktop Application",
                "Data warehouse of clothing application"

              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
