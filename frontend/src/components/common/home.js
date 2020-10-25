import React from 'react'
import {  } from 'react-router-dom'

// const Home = () => {
//   return (
//     <div className="hero-text">
//       <h1>Welcome to Shellbook!</h1>
//       <h2>The place to be for prospective turtle owners!</h2>
//       <p>*MISSION STATEMENT*</p>
//     </div>
//   )
// }

const Home = () => {
  return (
    <section className="hero is-fullheight-with-navbar is-light">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1 has-text-centered has-text-black">
            <span role="img" aria-label="turtle emoji"> </span>
            Shellbook
          </h1>
        </div>
      </div>
    </section>
  )
}

export default Home