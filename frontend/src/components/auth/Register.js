import React from 'react'
import { registerUser } from '../../lib/api'

class Register extends React.Component {
  state = {
    formData: {
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      profile_image: '',
      password: '',
      password_confirmation: ''
    },
    errors: {}
  }


  handleChange = event => {
    const formData = {
      ...this.state.formData,
      [event.target.name]: event.target.value
    }
    const errors = {
      ...this.state.errors,
      [event.target.name]: ''
    }
    this.setState({ formData, errors })
    console.log(event.target.name, event.target.value)
  }

  handleSubmit = async event => {
    event.preventDefault()
    try {
      const response = await registerUser(this.state.formData)
      console.log(response)
    } catch (err) {
      console.log(err.response)
      this.setState({ errors: err.response.data.errors })
    }
  }

  render () {
    const { username, first_name, last_name, email, profile_image, password, password_confirmation } = this.state.formData
    return ( 
      <section className="Register section">
        <div className="container">

          <form onSubmit={this.handleSubmit}>
            <input
              placeholder="Username"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
            <input 
              type="first_name" 
              placeholder="First Name"
              name="first_name"
              value={first_name}
              onChange={this.handleChange}
            />
            <input 
              type="last_name" 
              placeholder="Last Name"
              name="last_name"
              value={last_name}
              onChange={this.handleChange}
            />
            <input 
              type="email" 
              placeholder="Email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            <input 
              type="profile_image" 
              placeholder="Profile Image"
              name="profile_image"
              value={profile_image}
              onChange={this.handleChange}
            />
            <input 
              type="password" 
              placeholder="Password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            <input 
              type="password" 
              placeholder="Password Confirmation"
              name="password_confirmation"
              value={password_confirmation}
              onChange={this.handleChange}
            />
            <button type="submit" className="button is-fullwidth is-warning">Register</button>
          </form>
        
        </div>
      </section>
    )
  }
}


export default Register

