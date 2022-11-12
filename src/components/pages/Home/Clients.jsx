import React from 'react'
import airbnb from "./assets/airbnb.png"
import cocacola from "./assets/cocacola.png"
import amazon from "./assets/amazon.png"
import tesla from "./assets/tesla.png"
import {Zoom, Fade} from 'react-reveal'
function Clients() {
  return (
    <div className='p-8 flex flex-col items-center justify-center gap-8 mt-8'>
        <h1 className='text-4xl font-medium text-gray-800 text-center'>Trusted by big companies</h1>
        <div className='flex flex-wrap flex-col md:flex-row items-center gap-8 md'>
          {/* poner dentro del classname la animacion animate-NombreAnimacion */}
            <Fade left>
              <img src={airbnb} className='w-52'></img>
              <img src={cocacola} className='w-52'></img>
            </Fade>
            <Fade right>
            <img src={amazon} className='w-52'></img>
            <img src={tesla} className='w-52'></img>
            </Fade>
        </div>
    </div>
  )
}

export default Clients