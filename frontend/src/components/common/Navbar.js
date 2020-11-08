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
            <img src="https://i.imgur.com/93b9Qyy.png" width="30" height="30"/>
          </a>
          <Link to="/turtles" className="navbar-item has-text-black is-size-5">Shellbook</Link>
          { isAuthenticated() && <Link to="/turtles/new" className="navbar-item has-text-black is-size-5">Add Turtle</Link>}
        </div>
        <div className="navbar-end">
          { !isAuthenticated() && <Link to="/register" className="navbar-item has-text-black is-size-5">Register</Link> }
          { !isAuthenticated() && <Link to="/login" className="navbar-item has-text-black is-size-5">Log in</Link> }
          { isAuthenticated() && <Link to="/profile" className="navbar-item has-text-black is-size-5">Profile</Link> }
          { isAuthenticated() && <Link to="/" onClick={handleLogout} className="navbar-item has-text-black is-size-5">Logout</Link>}
        </div>
      </div>
    </nav>
  )

}

export default withRouter(Navbar)