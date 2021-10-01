import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import  { useState } from 'react'
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
  } from "react-icons/ai";
  import { FaLinkedinIn } from "react-icons/fa";

  function Contact()
  {
      return(
          <Container>
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
<Row>
<div className='ContactForm'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='contactForm'>
              <form id='contact-form' noValidate>
                {/* Row 1 of form */}
                <div className='row formRow'>
                  <div className='col-6'>
                    <input
                      type='text'
                      name='name'
                      className='form-control formInput'
                      placeholder='Name'
                    ></input>
                  </div>
                  <div className='col-6'>
                    <input
                      type='email'
                      name='email'
                      className='form-control formInput'
                      placeholder='Email address'
                    ></input>
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <input
                      type='text'
                      name='subject'
                      className='form-control formInput'
                      placeholder='Subject'
                    ></input>
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <textarea
                      rows={3}
                      name='message'
                      className='form-control formInput'
                      placeholder='Message'
                    ></textarea>
                  </div>
                </div>
                <button className='submit-btn' type='submit'>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Row>
</Container>
)}

export default Contact;