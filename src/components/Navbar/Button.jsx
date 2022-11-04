import React from 'react'
import './Button.css'
import {Link} from 'react-router-dom'

function Button() {
  return (
    <Link to='sign-up'>
        <button className='btn'>Sign</button>
    </Link>
  )
}

export default Button