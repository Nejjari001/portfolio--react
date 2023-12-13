import React from 'react';
import IMG1 from '../../assets/alc.png';
import IMG2 from '../../assets/todo.png';
import IMG3 from '../../assets/shelter.png';
import IMG4 from '../../assets/fake.png';
import IMG5 from '../../assets/news.png';
import IMG6 from '../../assets/math.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: ' Book an Appointment',
      img: IMG1,
      description: 'Book-an-Appointment is a full stack application for all lovers of cars. Create an account, and become part of our car sharing economy. Let your car make money for you by listing it on our platform so others can view and rent. Find and book your dream car today.',
      technologies: 'Ruby on Rails | SCSS',
      link: 'https://gocar-257375ab1970.herokuapp.com/',
      github: 'https://github.com/AhmadiGu/Book-an-Appointment_front',
    },
    {
      id: 2,
      title: 'FakeStore',
      img: IMG4,
      description:
        'FakeStore app that provides information about available products and their details',
      technologies: 'React | Redux',
      link: 'https://fakestore-metrics.netlify.app/',
      github: 'https://github.com/Nejjari001/bookstore-project',
    },
    {
      id: 3,
      title: 'Corsego Platform',
      img: IMG2,
      description: 'Online learning platform Udemy clone.',
      technologies: 'Ruby on Rails',
      link: 'https://corsego.com/',
      github: 'https://github.com/Nejjari001/corsego-platform',
    },
    {
      id: 4,
      title: 'Sweet Recipes',
      img: IMG3,
      description:
        'A web application where users can create and vote for sweet recipes.',
      technologies: 'Ruby | Ruby On Rails | PostgreSQL | CSS',
      link: 'https://sweet-recipes-gl5p.vercel.app/',
      github: 'https://github.com/Nejjari001/sweet-recipes',
    },
    {
      id: 5,
      title: 'World News',
      img: IMG5,
      description:
        'Fully responsive interactive website built based on Adobe XD design',
      technologies: 'JavaScript | CSS',
      link: 'https://meri-mg.github.io/Unilab-world-news/',
      github: 'https://github.com/Nejjari001',
    },
    {
      id: 6,
      title: 'Math Resource',
      img: IMG6,
      description:
        'Real-world group project which is still in progress and will provide educational platform for future young developers',
      technologies: 'JavaScript | Scss | Python',
      link: 'https://lukinoo.github.io/math-reurce/',
      github: 'https://github.com/Nejjari001',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
