import React from 'react'
import './webinars.css'
import WebImg from '../../assets/web.jpeg'

const Webinars = () => {
  return (
    <section className='webinars section' id='webinars'>
        <h2 className='section__title'>Webinars & Seminars</h2>
        <span className='section__subtitle'></span>
        <div className='webinars__container container grid'>
         <img src={WebImg} alt="" className='webinars__img' />

            <div className='webinars__data'>
              <div>
                <h3 className='webinars__title'> <b>Python programming language</b> webinar</h3>
                <span className='webinars__subtitle'><i class="uil uil-university"></i>{" "}<b>University of Tabriz</b></span><div></div>
                <span className='webinars__subtitle'><i class="uil uil-calendar-alt"></i>{" "}Sat Jul 2nd, 2022</span><div></div>
                <span className='webinars__subtitle'><i class="uil uil-clock-eight"></i>{" "}at 8:00 pm</span>

              </div>
            </div>
        </div>
    </section>
  )
}

export default Webinars