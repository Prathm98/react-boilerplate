import React, { useEffect, useState } from 'react'
import { getDetails, getStatus } from '../services/SampleService'

const Status = () => {
  // Status and tech state
  const [status, setStatus] = useState(false)
  const [tech, setTech] = useState(null)

  //   Backend API calls
  useEffect(() => {
    getStatus().then((result: any) => {
      setStatus(result)

      if (result) {
        getDetails().then((techResult) => {
          setTech(techResult.Stack)
        })
      }
    })
  }, [])

  return (
    <div>
      <h4>BACKEND STATUS : {status ? 'Running' : 'Pending'}</h4>
      {status && <h4>BACKEND STACK : {tech ? tech : 'Unknown'}</h4>}
    </div>
  )
}

export default Status
