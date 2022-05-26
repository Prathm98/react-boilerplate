import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/Header.css'

const Header = () => {
  return (
    <div class='nav'>
      <ul>
        <li>
          <Link to='/' class='nav-link'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/about' class='nav-link'>
            <em>About Team</em>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
