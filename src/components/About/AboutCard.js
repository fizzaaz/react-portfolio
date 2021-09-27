import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, My name is <strong >Fizza Zaidi. </strong> 
            The Full-stack web developer with a background in computer science and a passion for coding.
            I’ve always sought out opportunities and challenges that are meaningful to me. 
            Skilled in designing, developing and implementing applications and solutions using a range of technologies and programming languages. 
            Aspiring to combine broad background with strong technical skills to excel as a Full Stack Developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
         

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
