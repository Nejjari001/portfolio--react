import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>43+ Completed Projects</small>
            </article>
          </div>
          <p>In recent months, I've thrived in a remote setting, focusing on freelance Backend Ruby on Rails development. As a committed code reviewer at Microverse, I've meticulously assessed over 50 projects, spanning technologies like Ruby, React, and Ruby on Rails. This experience has not only refined my technical skills but has also instilled in me efficiency and precision, crucial attributes in the fast-paced tech industry.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro