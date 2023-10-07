import React from 'react'
import Amir from './Amir'
import Salehpour from './Salehpoiur'
import Khayavi from './Khayavi'
import Far from './Far'
import './references.css'

function References() {
  return (
    <section className='work section' id='references'>
      <h2 className='section__title'>References</h2>
      <span className='section__subtitle'></span>
      <div className='skills__container1 container grid'>
      <Amir/>
      <Salehpour/>
      <Khayavi/>
      <Far/>

      </div>

    </section>
  )
}

export default References