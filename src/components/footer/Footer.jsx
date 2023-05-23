import React from 'react'
import './footer.css'

const Footer = () => {
  return (

    <footer className='footer'>
        <div className='footer__container container'>
            <h1 className='footer__title'>Salar.M.Laleh</h1>
            <ul className='footer__list'>
                <li>
                    <a href='#home' className='footer__link'>Home</a>
                </li>
                <li>
                    <a href='#about' className='footer__link'>About</a>
                </li>
                <li>
                    <a href='#skills' className='footer__link'>Skills</a>
                </li>
                <li>
                    <a href='#project' className='footer__link'>Project</a>
                </li>
                <li>
                    <a href='#contact' className='footer__link'>Contact</a>
                </li>
            </ul>

            <div className='footer__social'>
                <a href='https://github.com/salarMokhtariL' className='home__social-icon' target="_blank">
                <i class="uil uil-github-alt"></i>
                </a>

                <a href='https://www.linkedin.com/in/salar-mokhtari-laleh-22508b91/' className='home__social-icon' target="_blank">
                    <i class="uil uil-linkedin-alt"></i>
                </a>

                <a href='salarmokhtari0@gmail.com' className='home__social-icon' target="_blank">
                <i class="uil uil-envelopes"></i>        </a>
            
            </div>
            <span className='footer__copy'>&#169; Salar-Mokhtari-Laleh-Open-Source-License</span>
        </div>
    </footer>
  )
}

export default Footer