import React from 'react'
import "./header.css";

const Header = () => {
  return (

    <header className='header'>
        <nav className='nav container'>
            <a href='index.html' className='nav__logo'>SML</a>

            <div className='nav__menu'>
                <ul className='nav__list grid'>
                    <li className='nav__item'>
                        <a href='#home' className='nav__link'>
                            <i className='uil uil-estate nav__icon'></i> Home
                        </a>
                    </li>

                    <li className='nav__item'>
                        <a href='#about' className='nav__link'>
                            <i className='uil uil-user-exclamation nav__icon'></i>About
                        </a>
                    </li>

                    <li className='nav__item'>
                        <a href='#skills' className='nav__link'>
                            <i className='uil uil-cog nav__icon'></i>Skills
                        </a>
                    </li>

                    <li className='nav__item'>
                        <a href='#blog' className='nav__link'>
                            <i className='uil uil-files-landscapes-alt nav__icon'></i>Blog
                        </a>
                    </li>

                    <li className='nav__item'>
                        <a href='#portfolio' className='nav__link'>
                            <i className='uil uil-images nav__icon'></i>Portfolio
                        </a>
                    </li>

                    <li className='nav__item'>
                        <a href='#contact' className='nav__link'>
                            <i className='uil uil-comments nav__icon'></i>Contact
                        </a>
                    </li>
                </ul>

                <i class="uil uil-times-square nav__close"></i>
            </div>
            
            <div className='nav__toggle'>
                <i className='uil uil-apps'></i>
            </div>
        </nav>
    </header>

    )
}

export default Header