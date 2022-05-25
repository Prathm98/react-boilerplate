import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='App-header'>
      <h1>REACT JS KICKSTART TEMPLATE</h1>
      <p>
        Created by BitByBit team and maintained with ❤️ by an amazing{' '}
        <a
          className='App-link'
          href='https://www.hackerearth.com/challenges/hackathon/airbus-aerothon-40-finale/dashboard/1bfeeee/team/'
          target='_blank'
          rel='noreferrer'
        >
          team of developers
        </a>
        .
      </p>
      <p>
        <Link to='/' className='App-link'>
          HOME
        </Link>
      </p>
    </div>
  )
}

export default About
