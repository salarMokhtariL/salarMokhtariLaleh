import React from 'react'
import './skills.css'
import Backend from './Backend'
import Ai from './Ai'
import Frontend from './Frontend'
import SDT from './SDT'
import Database from './Databes'
import OS from './OS'


const Skills = () => {
  return (
    <section className='skills section' id='skills'>
        <h2 className='section__title'>
            Skills
        </h2>
        <span className='section__subtitle'>Technical Skills</span>

        <div className='skills__container container grid'>
            <Ai/>
            <Backend/>
            <SDT/>
            <Database/>
            <OS/>
            <Frontend/>

        </div>
        <span className='section__subtitle sub__1'>General Skills</span>

        <div className='skills__container container grid'>
          <div className='s__box'>
            <i class="uil uil-setting s__icon"></i>
            <h3 className='s__title'>Problem-Solving</h3>
          </div>
          <div className='s__box'>
          <i class="uil uil-users-alt s__icon"></i>
                      <h3 className='s__title'>Leadership Skills</h3>
          </div>
          <div className='s__box'>
          <i class="uil uil-comments-alt s__icon"></i>            <h3 className='s__title'>Communication Skills</h3>
          </div>
      
      <div className='s__box'>
      <i class="uil uil-book-reader s__icon"></i>        <h3 className='s__title'>Research</h3>
      </div>
      <div className='s__box'>
      <i class="uil uil-podium s__icon"></i>        <h3 className='s__title'>Teaching</h3>
      </div>
      <div className='s__box'>
      <i class="uil uil-head-side s__icon"></i>        <h3 className='s__title'>Class management</h3>
      </div>
    </div>

    </section>
  )
}

export default Skills