import React, { Fragment, useEffect, useState } from 'react'
import { addMember, getMembers, getStatus } from '../services/SampleService'

const Members = () => {
  // Component states for holding different data
  const [status, setStatus] = useState(null)
  const [members, setMembers] = useState([])
  const [name, setName] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    //   Call to Status and get members methods
    getStatus().then((result) => {
      setStatus(result)
      fetchMembers()
    })
    // eslint-disable-next-line
  }, [])

  //   Call get members
  const fetchMembers = () => {
    getMembers().then((members) => {
      setMembers(members.Members)
    })
  }

  //   Handles add member action
  const onSubmit = () => {
    if (name.length > 0) {
      setError('')
      addMember(name).then((result) => {
        if (!result) {
          setError('Something went wrong. Please try again!')
        } else {
          setMembers(result.Members)
          setName('')
        }
      })
    } else {
      setError('Name is required!')
    }
  }

  return (
    <div className='App-header'>
      <h1>REACT JS KICKSTART TEMPLATE</h1>
      <h3>POST METHOD DEMO</h3>
      {status ? (
        <Fragment>
          <p>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />{' '}
            <button onClick={onSubmit}>Add Member</button>
            <br />
            <small style={{ color: 'red' }}>{error}</small>
          </p>
          <br />
          {/* Iterate through the list of members */}
          <div>
            AVAILABLE MEMEBERS:
            <br />
            {members.length > 0 ? (
              <ul>
                {members.map((member, i) => (
                  <li key={i}>{member}</li>
                ))}
              </ul>
            ) : (
              'No members present.'
            )}
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <h5>Backend is not Running!</h5>
        </Fragment>
      )}
    </div>
  )
}

export default Members
