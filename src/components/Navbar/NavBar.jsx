import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import Button from './Button'
import DropDown from './DropDown'

import './NavBar.css'

function NavBar(){
  //usaremos el evento click, para saber cuando se a dado un cli, y cambiar el icono del navbar
  const [Click, setClick]= useState(false)
  const [Dropdown, setDropdown]= useState(false)
  const handleClick=()=> setClick(!Click)
  const closeMobileMenu= ()=>setClick(false)
  const onMouseEnter = () => {
    if(window.innerWidth <960){
      setDropdown(false)
    }else{
      setDropdown(true)
    }
  }

  const onMouseLeave = () => {
    if(window.innerWidth <960){
      setDropdown(false)
    }else{
      setDropdown(false)
    }
  }

  return(
    <>
      <nav className='navbar'>
        <Link to='/home' className='navbar-logo'>
          Epic <i className='fab fa-firstdraft'/>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={Click ? 'fas fa-times': 'fas fa-bars'}/>
        </div>
        <ul className={Click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/home' className='nav-links' onClick={closeMobileMenu}>Home</Link>
          </li>
          <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
              Projects <i className='fas fa-caret-down'></i>
            </Link>
            {Dropdown && <DropDown/>}
          </li>
          <li className='nav-item'>
            <Link to='/aboutUs' className='nav-links' onClick={closeMobileMenu}>About</Link>
          </li>
          <li className='nav-item'>
            <Link to='/signUp' className='nav-links-mobile' onClick={closeMobileMenu}>Sign Up</Link>
          </li>
        </ul>
        <Button/>
      </nav>
    </>
  )
}

export default NavBar