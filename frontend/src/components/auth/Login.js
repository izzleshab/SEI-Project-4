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
      <section className="section has-background-success-dark">
        <div className="container">
          <div className="columns">
            <form onSubmit={this.handleSubmit} className="column is-half is-offset-one-quarter box  has-background-success">
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <button type="submit" className="button is-fullwidth is-warning is-success is-inverted is-outlined has-text-black">Login</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default Login