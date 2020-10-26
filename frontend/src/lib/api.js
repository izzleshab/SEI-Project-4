import axios from 'axios'

const baseUrl = '/api'

// const withHeaders = () => {
//   return {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem('token')}`
//     }
//   }
// }

// turtles

export const getAllTurtles = () => {
  return axios.get(`${baseUrl}/turtles`)
}
export const getSingleTurtle = turtleId => {
  return axios.get(`${baseUrl}/turtles/${turtleId}`)
}

// auth

export const registerUser = formData => {
  return axios.post(`${baseUrl}/register`, formData)
}