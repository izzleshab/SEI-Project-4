import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { deleteTurtle, getSingleTurtle, createComment } from '../../lib/api'

class TurtleShow extends Component {

  state = {
    formData: {
      text: ''
    },
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

  handleChange = event => {
    const formData = {
      text: event.target.value
    } 
    this.setState({
      formData: formData
    })
  } 

  handleSubmit = async () => {
    const turtleId = this.props.match.params.id
    this.state.formData.turtle = turtleId
    await createComment(this.state.formData)
    const response = await getSingleTurtle(turtleId)
    this.setState({
      turtle: response.data,
      formData: {
        text: ''
      }
    })
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
      <section className="section has-background-success-dark">
        <div className="container">
          <div className="box has-background-success">
            <figure className="image ">
              <img src={turtle.image} alt={turtle.name} />
            </figure>
          </div>
          <div className="has-text-center has-background-success box">
            <h4 className="title is-3 has-text-centered">
              Name
            </h4>
            <h5 className="title is-4 has-text-centered">{turtle.name}</h5>
          </div>
          <div className="has-text-center has-background-success box">
            <h4 className="title is-3 has-text-centered">
              Species
            </h4>
            <h5 className="title is-4 has-text-centered is-italic">{turtle.species}</h5>
          </div>
          <div className="has-text-center has-background-success box">
            <h4 className="title is-3 has-text-centered">
              Diet
            </h4>
            <h5 className="title is-4 has-text-centered">{turtle.diet}</h5>
          </div>
          <div className="has-text-center has-background-success box">
            <h4 className="title is-3 has-text-centered">
              Added by 
            </h4>
            <div>
              <h5 className="title is-4 has-text-centered">
                {turtle.owner.username}
              </h5>
              <br />
              <h5>
                <Link to={`/turtles/${turtle.id}/edit`} className="button is-fullwidth is-warning is-success is-inverted is-outlined has-text-black"><strong>Edit</strong></Link>
                <br />
                <button onClick={this.handleDelete} className="button is-fullwidth is-danger has-text-black"><strong>Delete</strong></button>
              </h5>
            </div>
          </div>
          <div className="column has-text-center has-background-success box">
            <h4 className="title is-3 has-text-centered">
              Comments
            </h4>
            {turtle.comments.map(comment => (
              <div className="column is-outlined" key={comment.id}>
                <h5 className="title is-4 has-text-centered">{comment.owner.username} says:</h5>
                <h6 className="title is-5 has-text-centered">{comment.text}</h6>
                <hr className="has-background-black" />
              </div>
            ))}
            <textarea className="textarea is-half is-outlined is-black" value={this.state.formData.text} onChange={this.handleChange}></textarea>
            <br />
            <button type="submit" onClick={this.handleSubmit} className="button is-fullwidth is-warning is-success is-inverted is-outlined has-text-black"><strong>Submit</strong></button>
          </div>
        </div>
      </section>
    )
  }


}

export default TurtleShow