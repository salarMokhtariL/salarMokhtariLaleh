import React from 'react'
import './about.css'
import AboutImg from "../../assets/about.jpeg"
import CV from "../../assets/Salar Mokhtari Laleh.pdf"
import Info from './Info'

const About = () => {
  return (
    <section className='about section' id='about'>
        <h2 className='section__title'>About Me</h2>
        <span className='section__subtitle'></span>

        <div className='about__container container grid'>
            <img src={AboutImg} alt="" className='about__img' />

            <div className='about__data'>
                <Info/>

                <p className='about__description'>
                As a passionate student of computer engineering with a strong interest in Artificial Intelligence, I am eager to explore the frontiers of this rapidly growing field and contribute to innovative research and development projects.
Throughout my academic career, I have gained a solid foundation in computer science, mathematics, and related disciplines, and have begun to develop expertise in areas such as machine learning, natural language processing, and computer vision. Through internships and coursework, I have also gained practical experience in applying AI to real-world problems and have demonstrated strong analytical, problem-solving, and communication skills.
                </p>

                <a download="" href={CV} className='button button--flex'>Download Resume
  
                </a>
                
            </div>
        </div>
    </section>
  )
}

export default About