import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

//import all pictures of a past projects
import horiseon from "../../Assets/Projects/horiseon.JPG";
import high5 from "../../Assets/Projects/high5.JPG";
import passGen from "../../Assets/Projects/passGen.JPG";
import travelplanner from "../../Assets/Projects/travelplanner.JPG";
import weather from "../../Assets/Projects/weather.jpg";
import schedule from "../../Assets/Projects/schedule.jpg";
import quiz from "../../Assets/Projects/quiz.jpg";
import BudgetTracker from "../../Assets/Projects/pwa.JPG"

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
              url="https://fizzaaz.github.io/travel-planner/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={horiseon}
              isBlog={false}
              title="Horiseon Marketing"
              description="Social media continues to have a sizable influence on buying habits. Social media marketing helps you determine which platforms are suited to your brand, using analytics to find the right markets and increase your lead generation."
              link="https://github.com/fizzaaz/market-webPage"
              url="https://fizzaaz.github.io/market-webPage/Develop/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={passGen}
              isBlog={false}
              title="Password Generator"
              description="In this projects, HTML and CSS and Javascript documents create a random password generator. This project emphasizes the use of using Javascript to make dynamic changes to an HMTL document."
              link="https://github.com/fizzaaz/password-generator"
              url="https://fizzaaz.github.io/password-generator/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Dashboard"
              description="This is a weather forecast dashboard app. Users are able to enter a city name in the search box and have current weather conditions displayed for that city, as well a five days forecast. The UV index value will change color from green, yellow and red based on the severity of the UV index. Searched cities will be added below the search button and can be clicked on to display that cities weather data again."
              link="https://github.com/fizzaaz/weather-dashboard"
              url="https://fizzaaz.github.io/weather-dashboard/"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={high5}
              isBlog={false}
              title="High 5"
              description=" This app will help you find a close-knit group of people that you can vent to about your problems or share your excitement about your team winning the championship. If you're new to town or just want to connect with new people join High ✋. High ✋ allows you to create blogs, interact with blogs, and follow current members that have similar interests as you. Sign up today!. Use Node.js and Express.js to create a RESTful API. Use Handlebars.js as the templating engine"
              link="https://github.com/fizzaaz/High5"
              url=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={schedule}
              isBlog={false}
              title="Work Day Scheduler"
              description="This application emphasizes the use of Jquery to provide a simple planner application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery. In this application, we have used the Moment.js library to work with date and time. This planner app, loops through the typical business hours at current date and allows the user to enter and save their plan into any description field that has a class of future. Also, the localStorage of the browser is used to store the data. The past hours are highlighted gray, the current hour red, and future hours green."         
           link="https://github.com/fizzaaz/Work-Day-Scheduler"
           url="https://fizzaaz.github.io/Work-Day-Scheduler/"
           />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Code Quiz"
              description="This is a quiz application using HTML, CSS, and Javascript. This application emphasizes the use of Javascript to provide quiz questions and collect user data to determine whether the answers to a question are correct, this then generates a score and appends a final page of results from the user data. This project utilizes the use of appending HTML pages."
              link="https://github.com/fizzaaz/Code-Quiz"
              url="https://fizzaaz.github.io/Code-Quiz/"
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BudgetTracker}
              isBlog={false}
              title="Budget Tracker"
              description="Giving users a fast and easy way to track their money is important, but allowing them to access that information at any time is even more important. Having offline functionality is paramount to the success of an application that handles users’ financial information. Budget Tracker is a progressive web application that allows users to track their budgets by adding expenses and deposits to their budget through the Add/Subtract Funds buttons. They are able to add a transaction with or without a connection. When a user enters a transaction while offline, these transactions are stored in the indexedDB, and transferred to the database when the user comes back online."
              link="https://github.com/fizzaaz/budget-tracker" 
              url="https://budget00tracker.herokuapp.com/" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
