import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import { isAuthenticated, logout } from '../../lib/auth'

const Navbar = () => {

  const handleLogout = () => {
    logout()
  }

  return (
    <nav className="navbar is-success">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="https://bit.ly/35Ai3V8" width="30" height="30"/>
          </a>
          <Link to="/turtles" className="navbar-item">Shellbook</Link>
        </div>
        <div className="navbar-end">
          { !isAuthenticated() && <Link to="/register" className="navbar-item">Register</Link> }
          { !isAuthenticated() && <Link to="/login" className="navbar-item">Log in</Link> }
          { isAuthenticated() && <Link to="/" onClick={handleLogout} className="navbar-item">Logout</Link>}
        </div>
      </div>
    </nav>
  )

}

export default withRouter(Navbar)