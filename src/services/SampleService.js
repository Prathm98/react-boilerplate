import axios from 'axios'

// Get running status of backend
export const getStatus = async () => {
  try {
    const status = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/`)
    return status && status.status && status.status === 200
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

// Get members list
export const getMembers = async () => {
  try {
    const status = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/members`
    )

    return status && status.status && status.status === 200 && status.data
  } catch (error) {
    // console.error(error)
    return null
  }
}

// Add Member method
export const addMember = async (newmember) => {
  try {
    const status = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/addmember`,
      {
        newmember,
      },
      {
        headers: {
          accept: 'application/json',
        },
      }
    )

    return status && status.status && status.status === 200 && status.data
  } catch (error) {
    // console.error(error)
    return false
  }
}

// Post method Demo
export const postMethodDemo = async (value1, value2, value3) => {
  try {
    const status = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/postdemo`,
      {
        param1: value1,
        param2: value2,
        param3: value3,
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
