import React from 'react'

const Interest = () => {
  return (
    <div className='about__info1 grid'>
      <div className='about__box'>
        <i class='bx bx-meteor about__icon'></i>
        <h3 className='about__title'>Deep Learning</h3>
      </div>
      <a className='about__box' href='#'>
        <i class='bx bx-bot about__icon' ></i>   
        <h3 className='about__title'>Robotics</h3>
      </a>
      
      <a className='about__box' href='#'>
        <i class='bx bx-sun about__icon' ></i>
        <h3 className='about__title'>Optimization</h3>
      </a>
      <a className='about__box' href='#'>
        <i class='bx bx-chip about__icon' ></i>
        <h3 className='about__title'>IoT</h3>
      </a>
      <a className='about__box' href='#'>
        <i class='bx bx-code-alt about__icon' ></i>
        <h3 className='about__title'>Software Engineering</h3>
      </a>
      <a className='about__box' href='#about'>
        <i class='bx bx-atom about__icon' ></i>
        <h3 className='about__title'>Quantum theory </h3>
      </a>
    </div>
    
    
  )
}

export default Interest