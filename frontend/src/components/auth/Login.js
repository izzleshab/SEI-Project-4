import React from 'react'
import { loginUser } from '../../lib/api'
import { setToken } from '../../lib/auth'

class Login extends React.Component {
  state = {
    formData: {
      email: '',
      password: ''
    }
  }
  
  handleChange = event => {
    const formData = {
      ...this.state.formData,
      [event.target.name]: event.target.value
    }
    this.setState({ formData })
  }
  
  handleSubmit = async event => {
    event.preventDefault()
    const response = await loginUser(this.state.formData)
    console.log(response)
    setToken(response.data.token)
    this.props.history.push('/turtles')
  }
  
  render() {
    console.log(this.props)
    const { email, password } = this.state.formData
    return (
      <section className="section">
        <form onSubmit={this.handleSubmit}>
          <input
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
          <div className="field">
            <button type="submit" className="button is-fullwidth is-warning">Login</button>
          </div>
        </form>
      </section>
    )
  }
}

export default Login