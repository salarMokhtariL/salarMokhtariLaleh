import React from 'react'

const OS = () => {
  return (

    <div className='skills__content'>
    <h3 className='skills__title'>Operating System</h3>

    <div className='skill__box'>
        <div className='skills__group'>
        <div className='skills__data'>
            <i class='bx bxl-tux'></i>                
            <div>
                    <h3 className='skills__name'>Linux</h3>
                    <span className='skills__level'> </span>

                </div>
            </div>
            <div className='skills__data'>
            <i class='bx bxl-windows'></i>                            
            <div>
                    <h3 className='skills__name'>Windows</h3>
                    <span className='skills__level'></span>
                </div>
            </div>
            <div className='skills__data'>
            <i class='bx bxl-apple'></i>
            <div>
                    <h3 className='skills__name'>macOS</h3>
                    <span className='skills__level'></span>
                </div>
            </div>
            
            <div className='skills__data'>
            <i class='bx bxl-android'></i>                            
            <div>
                    <h3 className='skills__name'>Android</h3>
                    <span className='skills__level'></span>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default OS