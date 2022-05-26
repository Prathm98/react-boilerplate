import axios from 'axios'

// Get running status of backend
export const getStatus = async () => {
  try {
    const status = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/`)

    return status
  } catch (error) {
    // console.error(error)
    return false
  }
}

// Get technology details of backend
export const getDetails = async () => {
  try {
    const status = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/detail`
    )

    return status && status.status && status.status === 200 && status.data
  } catch (error) {
    // console.error(error)
    return null
  }
}

// Post method Demo
export const postMethodDemo = async () => {
  try {
    const status = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/postdemo`,
      {
        param1: 'value1',
        param2: 'value2',
        param3: 'value3',
      },
      {
        headers: {
          accept: 'application/json',
        },
      }
    )

    return status && status.status && status.status === 200
  } catch (error) {
    // console.error(error)
    return false
  }
}
