import React from 'react'
import {Zoom, Fade} from 'react-reveal'

function FormHabits() {
  return (
    <section id="habits" className='min-h-screen p-20 flex flex-col gap-16'>
      <div className='float-right -top-14 left-10 relative text-4xl p-0'>
        <span className='text-[#2a94cb] text-bold animate-wiggle float-right right-0 p-0'>2/7</span>
      </div>
      <Zoom>
        <h1 className='text-6xl text-center font-black -mt-28'>
            Hablanos sobre tus habitos
        </h1>
      </Zoom>

      
    </section>
  )
}

export default FormHabits