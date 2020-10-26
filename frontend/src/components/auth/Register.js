import React from 'react'
import { registerUser } from '../../lib/api'

class Register extends React.Component {
  state = {
    formData: {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      profileImage: '',
      password: '',
      passwordConfirmation: ''
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
    const { username, firstName, lastName, email, password, passwordConfirmation } = this.state.formData
    return ( 
      <section className="Register section">
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Username"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <input 
            type="firstName" 
            placeholder="First Name"
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
          />
          <input 
            type="lastName" 
            placeholder="Last Name"
            name="lastName"
            value={lastName}
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
            type="password" 
            placeholder="Password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <input 
            type="password" 
            placeholder="Password Confirmation"
            name="passwordConfirmation"
            value={passwordConfirmation}
            onChange={this.handleChange}
          />
          <button type="submit" className="button is-fullwidth is-warning">Register</button>
        </form>
        
      </section>
    )
  }
}


export default Register

