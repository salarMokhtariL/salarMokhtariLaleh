import React from 'react'
import './about.css'
import AboutImg from "../../assets/about.jpeg"
import CV from "../../assets/Salar Mokhtari Laleh.pdf"
import Info from './Info'

const About = () => {
  return (
    <section className='about section' id='about'>
        <h2 className='section__title'>About Me</h2>
        <span className='section__subtitle'>My resume</span>

        <div className='about__container container grid'>
            <img src={AboutImg} alt="" className='about__img' />

            <div className='about__data'>
                <Info/>

                <p className='about__description'>
                 I am a computer engineering undergraduate student at Tabriz University and I specialize in ML and deep learning.
                
                 Passionate about exploring the potential of ML algorithms, I actively participate in research, stay up-to-date with the latest developments, and have strong problem-solving skills. 
                </p>

                <a download="" href={CV} className='button button--flex'>Download Resume
  
                </a>
                
            </div>
        </div>
    </section>
  )
}

export default About