import React from 'react'
import AboutImg from "../../assets/Keyavie.jpg"

const Khayavi = () => {
  return (

    <div className='skills__content1'>
                <img src={AboutImg} alt="" className='ref__img' />

    <h3 className='skills__title1'> Dr. <b className='title__bold'>Abdulhamid Moalemi Khayavi</b> </h3>

    <div className='skill__box1'>
        <div className='skills__group1'>
            <div className='skills__data1'>
                            <div>
                    <span className='skills__name1'>Professor, Faculty of Electrical & Computer Engineering
University of Tabriz</span>
                    <h3 className='skills__name1'><i class="uil uil-at"></i><a className='mail' href='mailto: sa.mortezavi@tabrizu.ac.ir'><b>  moallemi@tabrizu.ac.ir</b> </a> 
</h3>

                    <div className='social'>
                      <a href='https://asatid.tabrizu.ac.ir/fa/pages/default.aspx?moallemi' className='ref__social'><i class="uil uil-window"></i> </a>
                      <a href='https://asatid.tabrizu.ac.ir/fa/pages/default.aspx?moallemi' className='ref__social'><i class="uil uil-google"></i> </a>
                      <a href='https://asatid.tabrizu.ac.ir/fa/pages/default.aspx?moallemi' className='ref__social'><i class="uil uil-github-alt"></i>
 </a>

                    </div>
                </div>
            </div>
            </div>
            </div>
            
</div>
  )
}

export default Khayavi