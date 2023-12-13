import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/oumaimanejjari/',
      name: 'Oumaima Nejjari',
      role: 'Software Engineer | Front-End Developer 》》JavaScript, TypeScript, React, Redux, Redux Toolkit, HTML, CSS | Responsive User Interfaces for Exceptional User Experiences',
      test: "Abdelhafid helped me a lot as my senior in Microverse Full Stack Program. Although he didn t manage me directly, he mentored me, especially during my first weeks as a Micronaut. I strongly recommend him for the role of software developer. Based on my experience as his mentee, Abdelhafid proved great professionalism and a huge understanding of others' opinions and ideas. He also showed that he possesses enough technical and professional skills, that will make him suitable for any web dev-related jobs, such as cross cultural communication, pair programming, and teamwork ethics, as well as strong knowledge of Javascript, React, Ruby, Jest Testing, Typescript, and Rails.",
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/gabrielnunekpeku/',
      name: 'Gabriel Nunekpeku',
      role: 'Software Engineer || Product Designer',
      test: "One of the most enjoyable people I've had the pleasure of working with is Abdelhafid. He not only had a special knack for keeping our team on track and organized, but his constant communication also served to uplift us when things got tough. His sense of humor and compassion helped to create a welcoming atmosphere. Working with Abdelhafid Nejjari is something I fully endorse."
    },
    {
      id: 3,
      link: 'https://www.linkedin.com/in/keenan-botes-profile/',
      name: 'Keenan Botes',
      role: 'Full-Stack Web Developer | Vue.js, express.js, JavaScript, Ruby on Rails, PostgreSQL, React, Redux',
      test: 'Abdelhafid Nejjari has been one of the best coding professionals that I have ever had the privilege of working with. He has proven his skillset as a software developer building numerous apps in Ruby, Ruby on Rails, React, Redux, Bootstrap, JavaScript, HTML and CSS. ',
    },
    {
      id: 4,
      link: 'https://www.linkedin.com/in/olivier-kango/',
      name: 'Olivier Kango',
      role: 'Full-stack Software Developer (Ruby on Rails | React.js)',
      test: "Being able to do a good job, and being good at coding alone is not enough. We also have to know how to live with others. And Abdelhafid Nejjari possesses these two skills. He was once my coding partner at Microverse. He was good at programming and was able to solve complex challenges easily and quickly. But I appreciated him even more for his kindness and his collaborative spirit.",
    },
    {
      id: 5,
      link: 'https://www.linkedin.com/in/hamzaalitarar/',
      name: 'Mostafa Shahat',
      role: 'Full-Stack Web Developer. JavaScript, Rails, React, Redux.I help startups take their products from concept to launch. Need help? Contact me below.',
      test: "I met Abdelhafid in Microverse and he helped me a lot, he is always motivated, passionate about coding, and eager to learn new things, but there is one thing I would like to mention, he is very clever in debugging and he is always eager to keen, a good team player, and never give up.",
    },
  ];
  return (
    <section id="testmonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials