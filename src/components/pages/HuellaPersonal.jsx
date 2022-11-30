import React from 'react'

import HuellaMainScreen from './HuellaPersonal/HuellaMainScreen'
import Form_CF from './HuellaPersonal/Form_CF'

import carbon_footprint from "./HuellaPersonal/carbon_footprint3.png"
import carbon_footprint2 from "./HuellaPersonal/fondo_paul_2.png"

//style={{backgroundImage: `url(${carbon_footprint2})`, backgroundRepeat: `no-repeat`}}
function HuellaPersonal() {
  return (
    <div className="bg-[url('./fondo_paul_2.png')] bg-fixed	bg-no-repeat bg-bottom	bg-cover">
        <HuellaMainScreen/>
        <Form_CF/>
    </div>
    
  )
}

export default HuellaPersonal