import React, {useState} from 'react'
import './certifications.css'

const Certifications = () => {
  const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (

    <section className='qualification section' id='edu'>
        <h2 className='section__title'>Licenses & Certifications</h2>
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
                    <i className='uil uil-robot qualification__active qualification__icon'></i>{" "}Artificial Intelligence
                </div>

                <div className={
                    toggleState === 2 
                    ? 'qualification__button qualification__active button--flex' 
                    : 'qualification__button button--flex'}
                    onClick={() => toggleTab(2)}
                    >
                    <i className='uil uil-brackets-curly qualification__icon'></i>{" "}Programming & Algorithm
                </div>

                <div className={
                    toggleState === 3 
                    ? 'qualification__button qualification__active button--flex' 
                    : 'qualification__button button--flex'}
                    onClick={() => toggleTab(3)}
                    >
                    <i className='uil uil-calculator-alt qualification__icon'></i>{" "}Mathematics
                </div>
            </div>

            <div className='qualification__section'>
                <div className={toggleState === 1 ? 
                'qualification__content qualification__content-active' : 
                'qualification__content '}>
                    <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'>NLP with Probabilistic Models</h3>
                            <span className='qualification__subtitle'><i class="uil uil-university"></i>{" "}Course | <b>DeepLearning.AI</b></span>
                            <span className='qualification__subtitle'>{" "}</span>
                            <div className='qualification__calender'>
                            <i class="uil uil-calendar-alt"></i>{" "}June 2023
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
                            <h3 className='qualification__title'>NLP with Classification and Vector Spaces</h3>
                            <span className='qualification__subtitle'><i class="uil uil-university"></i>{" "}Course | <b>DeepLearning.AI</b></span>
                            <span className='qualification__subtitle'>{" "}</span>

                            <div className='qualification__calender'>
                            <i class="uil uil-calendar-alt"></i>{" "}June 2023
                            </div>
                        </div>
                    </div>
                    <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'>Exploratory Data Analysis for Machine Learning</h3>
                            <span className='qualification__subtitle'><i class="uil uil-university"></i>{" "}Course | <b>IBM</b></span>
                            <span className='qualification__subtitle'>{" "}</span>
                            <div className='qualification__calender'>
                            <i class="uil uil-calendar-alt"></i>{" "}June 2023
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
                            <h3 className='qualification__title'>Introduction to Deep Learning & Neural Networks with Keras</h3>
                            <span className='qualification__subtitle'><i class="uil uil-university"></i>{" "}Course | <b>IBM</b></span>
                            <span className='qualification__subtitle'><i class="uil uil-location-point"></i>{" "}</span>

                            <div className='qualification__calender'>
                            <i class="uil uil-calendar-alt"></i>{" "}March 2023
                            </div>
                        </div>
                    </div>
                    <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'>Build Basic Generative Adversarial Networks (GANs)</h3>
                            <span className='qualification__subtitle'><i class="uil uil-university"></i>{" "}Course | <b>DeepLearning.AI</b></span>
                            <span className='qualification__subtitle'>{" "}</span>
                            <div className='qualification__calender'>
                            <i class="uil uil-calendar-alt"></i>{" "}June 2023
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
                            <h3 className='qualification__title'>Machine Learning</h3>
                            <span className='qualification__subtitle'><i class="uil uil-university"></i>{" "}Course | <b>Stanford University</b></span>
                            <span className='qualification__subtitle'>{" "}</span>

                            <div className='qualification__calender'>
                            <i class="uil uil-calendar-alt"></i>{" "}June 2023
                            </div>
                        </div>
                    </div>
                    



                </div>


                <div className={toggleState === 2 ? 
                'qualification__content qualification__content-active' : 
                'qualification__content '}>
                    <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'>Graph Search, Shortest Paths, and Data Structures</h3>
                            <span className='qualification__subtitle'><i class="uil uil-university"></i>{" "}Course | <b>Stanford University</b></span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calender-alt'></i><i class="uil uil-calendar-alt">{" "}</i>Jan 2023 
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
                            <h3 className='qualification__title'>Advanced Learning Algorithms</h3>
                            <span className='qualification__subtitle'><i class="uil uil-university"></i>{" "}Course | <b>OFFERED BYMULTIPLE PARTNERS</b></span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calender-alt'></i><i class="uil uil-calendar-alt">{" "}</i>Aug 2022 
                            </div>
                        </div>
                    </div>

                    <div className='qualification__data'>
                     <div>
                            <h3 className='qualification__title'> Divide and Conquer, Sorting and Searching, and Randomized Algorithms</h3>
                            <span className='qualification__subtitle'><i class="uil uil-university"></i>{" "}Course | <b>Stanford University</b></span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calender-alt'></i><i class="uil uil-calendar-alt">{" "}</i>Apr 2021 
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
                            <h3 className='qualification__title'>C for Everyone: Programming Fundamentals</h3>
                            <span className='qualification__subtitle'><i class="uil uil-book-open"></i>{" "}Course | <b>University of California, Santa Cruz</b></span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calender-alt'></i><i class="uil uil-calendar-alt">{" "}</i>Jan 2021 
                            </div>
                        </div>

                    </div>

                    <div className='qualification__data'>
                        <div>
                        <h3 className='qualification__title'>Python Data Structures</h3>
                            <span className='qualification__subtitle'><i class="uil uil-university"></i>{" "}Course | <b>University of Michigan</b></span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calender-alt'></i><i class="uil uil-calendar-alt">{" "}</i>Aug 2022 
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
                            <h3 className='qualification__title'>Programming for Everybody (Getting Started with Python)</h3>
                            <span className='qualification__subtitle'><i class="uil uil-university"></i>{" "}Course | <b>University of Michigan</b></span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calender-alt'></i><i class="uil uil-calendar-alt">{" "}</i>Aug 2022 
                            </div>
                        </div>
                    </div>

                </div>

                <div className={toggleState === 3 ? 
                'qualification__content qualification__content-active' : 
                'qualification__content '}>
                    <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'>Mathematics for Machine Learning: Linear Algebra</h3>
                            <span className='qualification__subtitle'><i class="uil uil-book-open"></i>{" "}Course | <b>Imperial College London</b></span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calender-alt'></i><i class="uil uil-calendar-alt">{" "}</i>Jan 2023
                            </div>
                        </div>

                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>


                </div>


            </div>
        </div>
    </section>
  )
}

export default Certifications