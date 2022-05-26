import React from 'react'
import Status from './Status'

const HomePage = () => {
  return (
    <div className='App-header'>
      <h1>REACT JS KICKSTART TEMPLATE</h1>
      <p>
        Currently backend server url is configured as:{' '}
        <a
          className='App-link'
          href={process.env.REACT_APP_BACKEND_URL}
          target='_blank'
          rel='noreferrer'
        >
          {process.env.REACT_APP_BACKEND_URL}
        </a>
        <br />
        <br />
        Update <code>'REACT_APP_BACKEND_URL'</code> in <code>'.env'</code> file
        present in project directory.
      </p>

      {/* Status component */}
      <div>
        <Status />
      </div>
    </div>
  )
}

export default HomePage
