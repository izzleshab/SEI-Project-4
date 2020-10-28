import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { deleteTurtle, getSingleTurtle } from '../../lib/api'

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
    console.log(response.data)
  }


  handleDelete = async () => {
    const turtleId = this.props.match.params.id
    await deleteTurtle(turtleId)
    this.props.history.push('/turtles')
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
            <p>
              {turtle.owner.username}
              <br />
              <br />
              <div>
                <Link to={`/turtles/${turtle.id}/edit`} className="button is-success">Edit</Link>
                <br />
                <br />
                <button onClick={this.handleDelete} className="button is-danger">Delete</button>
                <hr />
              </div>
            </p>
          </div>
          <div className="column is-half">
            <h4 className="title is-4">
              <span role="img" aria-label=""></span>
              Comments
            </h4>
            {turtle.comments.map(comment => (
              <p key={comment.text}>{comment.text}</p>
            ))}
            <hr /> 
          </div>
        </div>
      </section>
    )
  }


}

export default TurtleShow