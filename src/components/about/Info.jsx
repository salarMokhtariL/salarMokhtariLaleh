import React from 'react'

const Info = () => {
  return (
    <div className='about__info grid'>
      <div className='about__box'>
        <i class='bx bx-clipboard about__icon'></i>
        <h3 className='about__title'>Articles</h3>
        <span className='about__subtitle'>0 papers</span>
      </div>
      <a className='about__box' href='#webinars'>
        <i class='bx bx-microphone about__icon' ></i>   
        <h3 className='about__title'>Webinars</h3>
        <span className='about__subtitle'>1 webinars</span>
      </a>
      <a className='about__box' href='#projects'>
        <i class='bx bx-code-block about__icon' ></i>
        <h3 className='about__title'>Project</h3>
        <span className='about__subtitle'>+ 50 projects</span>
      </a>
    </div>
  )
}

export default Info