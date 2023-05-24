import React, {useState} from 'react'
import './qualification.css'

const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (

    <section className='qualification section' id='edu'>
        <h2 className='section__title'>Education & Experience</h2>
        <span className='section__subtitle'></span>

        <div className='qualification__container container'>
            <div className='qualification__tabs'>
                <div 
                className={
                    toggleState === 1 
                    ? 'qualification__button qualification__active button--flex' 
                    : 'qualification__button button--flex'}
                    onClick={() => toggleTab(1)}
                    >
                    <i className='uil uil-graduation-cap qualification__active qualification__icon'></i>{" "}Education
                </div>

                <div className={
                    toggleState === 2 
                    ? 'qualification__button qualification__active button--flex' 
                    : 'qualification__button button--flex'}
                    onClick={() => toggleTab(2)}
                    >
                    <i className='uil uil-bag-alt qualification__icon'></i>{" "}Experience
                </div>
            </div>

            <div className='qualification__section'>
                <div className={toggleState === 1 ? 
                'qualification__content qualification__content-active' : 
                'qualification__content '}>
                    <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'>Bachelor's degree, <b>Computer Engineering</b></h3>
                            <span className='qualification__subtitle'><i class="uil uil-university"></i>{" "}University of Tabriz</span>
                            <span className='qualification__subtitle'><i class="uil uil-location-point"></i>{" "}Tabriz, East Azerbaijan, Iran</span>
                            <div className='qualification__calender'>
                            <i class="uil uil-calendar-alt"></i>{" "}2018 - Present
                         </div>
                        </div>

                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>

                    <div className='qualification__data'>
                        <div></div>
                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>

                        <div>
                            <h3 className='qualification__title'>High School Diploma, <b>Mathematics and Physics</b></h3>
                            <span className='qualification__subtitle'><i class="uil uil-university"></i>{" "}Ferdowsi's Highschool</span>
                            <span className='qualification__subtitle'><i class="uil uil-location-point"></i>{" "}Tabriz, East Azerbaijan, Iran</span>

                            <div className='qualification__calender'>
                            <i class="uil uil-calendar-alt"></i>{" "}2015 - 2018
                            </div>
                        </div>
                    </div>

                </div>


                <div className={toggleState === 2 ? 
                'qualification__content qualification__content-active' : 
                'qualification__content '}>
                    <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'>Teaching Assistant <b>(TA)</b></h3>
                            <span className='qualification__subtitle'><i class="uil uil-book-open"></i>{" "}<b>Algorithms Design</b></span>
                            <span className='qualification__subtitle'><i class="uil uil-location-point"></i>{" "}University of Tabriz, Tabriz, East Azerbaijan, Iran</span>
                            <span className='qualification__subtitle'><i class="uil uil-user"></i>{" "}Dr.Pedram Salehpour</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calender-alt'></i><i class="uil uil-calendar-alt">{" "}</i>Jan 2023 - Present
                            </div>
                        </div>

                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>

                    <div className='qualification__data'>
                        <div></div>
                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>

                        <div>
                            <h3 className='qualification__title'>Artificial Intelligence Researcher</h3>
                            <span className='qualification__subtitle'><i class="uil uil-building"></i>{" "}<b>Sobh Parlar Asia Industrial co. </b>· Part-time</span>
                            <span className='qualification__subtitle'><i class="uil uil-location-point"></i>{" "}Tabrīz, East Azerbaijan, Iran</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calender-alt'></i><i class="uil uil-calendar-alt">{" "}</i>Aug 2022 - Oct 2022
                            </div>
                        </div>
                    </div>

                    <div className='qualification__data'>
                     <div>
                            <h3 className='qualification__title'>Teaching Assistant <b>(TA)</b></h3>
                            <span className='qualification__subtitle'><i class="uil uil-book-open"></i>{" "}<b>Linear Algebra & its Applications</b></span>
                            <span className='qualification__subtitle'><i class="uil uil-location-point"></i>{" "}University of Tabriz, Tabriz, East Azerbaijan, Iran</span>
                            <span className='qualification__subtitle'><i class="uil uil-user"></i>{" "}Dr.Seyed Amir Mortazavi</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calender-alt'></i><i class="uil uil-calendar-alt">{" "}</i>Apr 2021 - Aug 2022
                            </div>
                        </div>

                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>

                    <div className='qualification__data'>
                        <div></div>
                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>

                        <div>
                            <h3 className='qualification__title'>Teaching Assistant <b>(TA)</b></h3>
                            <span className='qualification__subtitle'><i class="uil uil-book-open"></i>{" "}<b>Discrete Mathematics</b></span>
                            <span className='qualification__subtitle'><i class="uil uil-location-point"></i>{" "}University of Tabriz, Tabriz, East Azerbaijan, Iran</span>
                            <span className='qualification__subtitle'><i class="uil uil-user"></i>{" "}Dr.Seyed Amir Mortazavi</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calender-alt'></i><i class="uil uil-calendar-alt">{" "}</i>Jan 2021 - May 2022
                            </div>
                        </div>

                    </div>

                </div>


            </div>
        </div>
    </section>
  )
}

export default Qualification