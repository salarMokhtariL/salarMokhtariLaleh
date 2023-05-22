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
        <span className='section__subtitle'>My technical level</span>

        <div className='skills__container container grid'>
            <Ai/>
            <Backend/>
            <SDT/>

        </div>
        <div></div>
        <div className='skills__container container grid'>
            <Database/>
            <OS/>
            <Frontend/>
        </div>

    </section>
  )
}

export default Skills