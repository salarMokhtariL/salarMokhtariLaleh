import React from 'react'

function Exames() {
  return (
    <section className='skills section' id='exams'>
        <h2 className='section__title'>
        International Exams
        </h2>
        <span className='section__subtitle'>IELTS & GRE</span>

        <div className='skills__container container grid'>
          <div className='s__box'>
            <h1 className='skills__title'><strong>IELTS</strong><small>Academic</small></h1>
            <p><small>Overall Score</small> <b>0.0</b>
            <br/><small>Test Date: <b>TBT</b></small></p>
          
          </div>
          <div className='s__box'>
            <h1 className='skills__title'><strong>GRE</strong></h1>
            <p><small>Q: </small><b>168</b>, <small>V: </small><b>162</b>, <small>AW: </small><b>4.0</b>
            <br/><small>Test Date: <b>August 30, 2023</b></small></p>
          
          </div>
          </div>
</section>
  )
}

export default Exames