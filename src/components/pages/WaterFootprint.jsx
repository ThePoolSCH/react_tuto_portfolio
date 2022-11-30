import React from 'react'
import './water.css'
import {useState, useContext} from 'react'

function WaterFootprint() {
  const [Style1, setStlye1] = useState("loader-bg")
  const handleHover=(e)=>{
    //e.preventDefault()
    //setStlye1("loader-bg2")
  }
  //grid grid-cols-1 sm:grid-cols-12
  return (
    <div className='body_m min-h-screen relative flex flex-row'>
      <div className='relative'>
      <div className="loader relative">
        <div className={Style1} onMouseLeave={handleHover}>
          <span className='-top-2 relative'>Home</span>
        </div>
        <div className="drops">
          <div className="drop1"></div>
          <div className="drop2"></div>  
        </div>
      </div>
      </div>
      
      <div className='relative'>
      <div className="loader relative">
        <div className={Style1} onMouseLeave={handleHover}>
          <span className='-top-2 relative'>Projects</span>
        </div>
        <div className="drops">
          <div className="drop1"></div>
          <div className="drop2"></div>  
        </div>
      </div>
      </div>
      
      <div className='relative'>
      <div className="loader relative">
        <div className={Style1} onMouseLeave={handleHover}>
          <span className='-top-2 relative'>About</span>
        </div>
        <div className="drops">
          <div className="drop1"></div>
          <div className="drop2"></div>  
        </div>
      </div>
      </div>

      <div className='relative'>
      <div className="loader relative">
        <div className={Style1} onMouseLeave={handleHover}>
          <span className='-top-2 relative'>Sign</span>
        </div>
        <div className="drops">
          <div className="drop1"></div>
          <div className="drop2"></div>  
        </div>
      </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="liquid">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="liquid" />
          </filter>
        </defs>
      </svg>
  </div>
  )
}

export default WaterFootprint