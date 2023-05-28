import React from 'react'
import './volunteer.css'


const Volunteer = () => {
  return (
    <section className='skills section' id='skills'>
        <h2 className='section__title'>
        Volunteer works & Affiliations
        </h2>
        <div></div>
        <div className='project__section'>
                <div className='project__content project__content-active'>
                    <div className='project__data'>
                        <div>
                            <h3 className='project__title'>Member of the Central Council </h3>
                            <span className='project__subtitle'><i class="uil uil-university"></i>{" "}Computer Engineering Association of University of Tabriz </span>
                            <span className='project__subtitle'><i class="uil uil-notebooks"></i>{" "}Responsible for proposing and arranging scientific and recreational events for students of Electrical and Computer Engineering faculty at the University of Tabriz</span>
                            <div className='project__calender'>
                            <i class="uil uil-calendar-alt"></i>{" "}Jan 2021 - Jan 2023
                         </div>
                        </div>

                        <div>
                            <span className='project__rounder'></span>
                            <span className='project__line'></span>
                        </div>
                    </div>

                    <div className='project__data'>
                        <div></div>
                        <div>
                            <span className='project__rounder'></span>
                            <span className='project__line'></span>
                        </div>

                        <div>
                            <h3 className='project__title'>Writer</h3>
                            <span className='project__subtitle'><i class="uil uil-university"></i>{" "}Logisia Magazine</span>
                            <span className='project__subtitle'><i class="uil uil-location-point"></i>{" "}Author and translator on the topics of <b>AI</b> & <b>Software engineering</b> in Logisia magazine in the university of Tabriz Electrical and Computer Engineering Faculty.</span>

                            <div className='project__calender'>
                            <i class="uil uil-calendar-alt"></i>{" "}Apr 2020 - Mar 2021
                            </div>
                        </div>
                    </div>

                </div>

        </div>
    </section>
        
    )
}

export default Volunteer