import React from 'react'
import './project.css'
import GitImg from "../../assets/Github.png"


const Preoject = () => {
  return (
    <section className='project section' id='github'>
        <h2 className='section__title'>
            Github
        </h2>
        <span className='section__subtitle'></span>


        <div className='project1__container container grid'>
            <img src={GitImg} alt="" className='project1__img' />

            <div className='project1__data'>

                <p className='project1__description'>
                You can visit my <b>GitHub</b> to see my projects.
                GitHub username: <b>@salarMokhtariLaleh</b>
                </p>

                <a href="https://github.com/salarMokhtariL?tab=repositories" className='button button--flex'>GitHub Repositories{"  "}<i class='bx bx-git-repo-forked'></i>
  
                </a>
                
            </div>
        </div>
    </section>
  )
}

export default Preoject