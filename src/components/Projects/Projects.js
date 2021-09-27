import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

//import all pictures of a past projects
import horiseon from "../../Assets/Projects/horiseon.JPG";
import high5 from "../../Assets/Projects/high5.JPG";
import passGen from "../../Assets/Projects/passGen.JPG";
import travelplanner from "../../Assets/Projects/travelplanner.JPG";
import techsmith from "../../Assets/Projects/techsmith.png";
import weather from "../../Assets/Projects/weather.jpg";
import schedule from "../../Assets/Projects/schedule.jpg";
import quiz from "../../Assets/Projects/quiz.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent Works 
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travelplanner}
              isBlog={false}
              title="Travel Planner"
              description="A travel site that provides flights based only off of your dates of travel and your home airport. Once a flight is selected then information on the country of the flight would be provided such as the flag, surrounding countries, weather and vaccination requirements to determine if that is a trip you would like to take. The user can refer back to past country searches by clicking on the history button. There they will find the previous information as well as a currency calculator to use while in the country to determine how much things actually cost in the home countries currency."
              link="https://github.com/fizzaaz/travel-planner"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={horiseon}
              isBlog={false}
              title="Horiseon Marketing"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              link="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={passGen}
              isBlog={false}
              title="passGen.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              link="https://github.com/soumyajit4419/Editor.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              link="https://github.com/soumyajit4419/Bits-0f-C0de"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={techsmith}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of techsmith-related posts and user's techsmith ideation in cyberspace  and thus helping in sucide prevention."
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={high5}
              isBlog={false}
              title="Face Recognition and high5 Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of high5s of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the high5 of a person."
              link="https://github.com/soumyajit4419/Face_And_high5_Detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={schedule}
              isBlog={false}
              title="Work Day Scheduler"
              description="This application emphasizes the use of Jquery to provide a simple planner application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery. In this application, we have used the Moment.js library to work with date and time. This planner app, loops through the typical business hours at current date and allows the user to enter and save their plan into any description field that has a class of future. Also, the localStorage of the browser is used to store the data. The past hours are highlighted gray, the current hour red, and future hours green."         link="https://github.com/soumyajit4419/Face_And_high5_Detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Code Quiz"
              description="This is a quiz application using HTML, CSS, and Javascript. This application emphasizes the use of Javascript to provide quiz questions and collect user data to determine whether the answers to a question are correct, this then generates a score and appends a final page of results from the user data. This project utilizes the use of appending HTML pages."
              link="https://github.com/soumyajit4419/Face_And_high5_Detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
