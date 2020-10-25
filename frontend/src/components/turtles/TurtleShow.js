import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { getSingleTurtle } from '../../lib/api'

class TurtleShow extends Component {

  state = {
    turtle: null
  }

  async componentDidMount() {
    // request single turtle
    const turtleId = this.props.match.params.id
    const response = await getSingleTurtle(turtleId)
    this.setState({
      turtle: response.data
    })
  }

  render() {
    const { turtle } = this.state
    if ( !turtle ) return null
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <figure className="image">
              <img src={turtle.image} alt={turtle.name} />
            </figure>
          </div>
          <div className="column is-half">
            <h4 className="title is-4">
              <span role="img" aria-label=""></span>
              Name
            </h4>
            <p>{turtle.name}</p>
          </div>
          <div className="column is-half">
            <h4 className="title is-4">
              <span role="img" aria-label=""></span>
              Species
            </h4>
            <p>{turtle.species}</p>
          </div>
          <div className="column is-half">
            <h4 className="title is-4">
              <span role="img" aria-label=""></span>
              Diet
            </h4>
            <p>{turtle.diet}</p>
          </div>
          <div className="column is-half">
            <h4 className="title is-4">
              <span role="img" aria-label=""></span>
              Added by 
            </h4>
            <p>{turtle.owner.id}</p>
          </div>
        </div>
      </section>
    )
  }


}

export default TurtleShow