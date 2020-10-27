import React from 'react'
import { createTurtle } from '../../lib/api'
import TurtleForm from './TurtleForm'


class TurtleNew extends React.Component {

  state = {
    formData: {
      name: '',
      species: '',
      diet: '',
      image: '',
      habitat: ''
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
    const response = await createTurtle(this.state.formData)
    this.props.history.push(`/turtles/${response.data.id}`)
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <TurtleForm 
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            formData={this.state.formData}
          />
        </div>
      </section>
    )
  }
  
}

export default TurtleNew