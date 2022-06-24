import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <>
        <ul>
            <li><Link className='link' to='/'>Login</Link></li>
            <li><Link className='link' to='/home'>Home</Link></li>
            <li><Link className='link' to='/about'>About</Link></li>
            <li><Link className='link' to='/contact'>Contact</Link></li>
        </ul>
    </>
  )
}

export default Navbar