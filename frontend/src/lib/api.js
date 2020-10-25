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