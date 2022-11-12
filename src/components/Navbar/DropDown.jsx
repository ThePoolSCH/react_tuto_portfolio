import React, {useState} from 'react'
import {MenuItems} from './MenuItems'
import { Link } from 'react-router-dom'
import './DropDown.css'
import { Menu } from '@material-ui/core'

function DropDown() {
  const [Click, setClick]= useState(false)
  const handleClick=()=> setClick(!Click)
  return (
    <ul onClick={handleClick}
    className={Click ? 'dropdown-menu clicked' : ' z-[100] dropdown-menu'}>
      {MenuItems.map((item, index) => {
        return (
          <li key={index}>
            <Link className={item.cName} 
            to={item.path} onClick={()=>setClick(false)}>
              {item.title}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default DropDown