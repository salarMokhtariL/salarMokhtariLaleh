import React from 'react'
import './services.css'

const Services = () => {
  return (
    <section className='services section' id='services'>
        <h2 className='section__title'>
            Services
        </h2>
        <span className='section__subtitle'>What I offer</span> 

        <div className='services__container container grid'>
            <div className='services__content'>
                <div>
                    <i className='uil uil-brackets-curly services__icon'></i>
                    <h3 className='services__title'>AI <br/>Project</h3>
                </div>

                <span className='service__button'>View More<i class="uil uil-arrow-right services__button-icon"></i>
                </span>


                <div className='services__modal'>
                    <div className='services__modal-content'>
                        <i className='uil uil-times service__modal-close'></i>
                        <h3 className='service__modal-title'>AI Projects</h3>
                        <p className='service__modal-description'>Services with mor than 5 years of experience.</p>

                        <ul className='services__modal-services grid'>
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>I develop the Ai application</p>
                            </li>

                        
                           
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>I develop the Ai application</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>I develop the Ai application</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='services__content'>
                <div>
                    <i className='uil uil-arrow services__icon'></i>
                    <h3 className='services__title'>Website <br/> Development</h3>
                </div>

                <span className='service__button'>View More<i class="uil uil-arrow-right services__button-icon"></i>
                 
                </span>


                <div className='services__modal'>
                    <div className='services__modal-content'>
                        <i className='uil uil-times service__modal-close'></i>
                        <h3 className='service__modal-title'>Website Development</h3>
                        <p className='service__modal-description'>Services with mor than 5 years of experience.</p>

                        <ul className='services__modal-services grid'>
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>I develop the Ai application</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>I develop Website including Back-end & Front-end</p>
                            </li>

                           
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>I develop the Ai application</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>I develop the Ai application</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='services__content'>
                <div>
                    <i className='uil uil-edit services__icon'></i>
                    <h3 className='services__title'>Data <br/> Scientist</h3>
                </div>

                <span className='service__button'>View More<i class="uil uil-arrow-right services__button-icon"></i>
                </span>


                <div className='services__modal'>
                    <div className='services__modal-content'>
                        <i className='uil uil-times service__modal-close'></i>
                        <h3 className='service__modal-title'> data scientist</h3>
                        <p className='service__modal-description'>Services with mor than 5 years of experience.</p>

                        <ul className='services__modal-services grid'>
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>I develop the Ai application</p>
                            </li>

                    
                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>I information gleaned from advanced analytics applications run by me as Data science at an outside company to corporate clients for their business use</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>I develop the Ai application</p>
                            </li>

                            <li className='services__modal-service'>
                                <i className='uil uil-check-circle services__modal-icon'></i>
                                <p className='services__modal-info'>I develop the Ai application</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
     )
}

export default Services