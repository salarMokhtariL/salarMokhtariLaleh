import React, { useState } from 'react'
import "./header.css";

const Header = () => {


    const [Toggle, showMenu] = useState(false);


  return (
    <header className='header'>
        <nav className='nav container'>
            <a href='index.html' className='nav__logo'>Salar.M.Laleh</a>

            <div className={Toggle ? "nav__menu show-menu" : 
            "nav__menu"}>
                <ul className='nav__list grid'>
                    <li className='nav__item'>
                        <a href='#home' className='nav__link active-link'>
                            <i className='uil uil-estate nav__icon'></i> Home
                        </a>
                    </li>

                    <li className='nav__item'>
                        <a href='#about' className='nav__link'>
                            <i className='uil uil-user-exclamation nav__icon'></i>About
                        </a>
                    </li>

                    <li className='nav__item'>
                        <a href='#edu' className='nav__link'>
                            <i className='uil uil-files-landscapes-alt nav__icon'></i>Education & Experience
                        </a>
                    </li>

                    <li className='nav__item'>
                        <a href='#skills' className='nav__link'>
                            <i className='uil uil-cog nav__icon'></i>Volunteer works 
                        </a>
                    </li>

                    <li className='nav__item'>
                        <a href='#webinars' className='nav__link'>
                            <i className='uil uil-cog nav__icon'></i>Webinars
                        </a>
                    </li>

            
                    <li className='nav__item'>
                        <a href='#projects' className='nav__link'>
                            <i className='uil uil-images nav__icon'></i>Projects
                        </a>
                    </li>

                    <li className='nav__item'>
                        <a href='#contact' className='nav__link'>
                            <i className='uil uil-comments nav__icon'></i>Contact
                        </a>
                    </li>
                </ul>

                <i class="uil uil-times-square nav__close" onClick={() => showMenu(!Toggle)}></i>
            </div>
            
            <div className='nav__toggle' onClick={() => showMenu
            (!Toggle)}>
                <i className='uil uil-apps'></i>
            </div>
        </nav>
    </header>

    )
}

export default Header