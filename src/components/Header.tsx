import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/Header.css'

const Header = () => {
  return (
    <div className='nav'>
      <ul>
        <li>
          <Link to='/' className='nav-link'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/about' className='nav-link'>
            <em>About Team</em>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
