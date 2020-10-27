import React from 'react'
import { getSingleTurtle, updateTurtle } from '../../lib/api'
import TurtleForm from './TurtleForm'

class TurtleEdit extends React.Component {

  state = {
    formData: {
      name: '',
      species: '',
      diet: '',
      image: '',
      habitat: '',
      owner: ''
    }
  }

  async componentDidMount() {
    const turtleId = this.props.params
    const response = await getSingleTurtle(turtleId)
    this.setState({
      formData: response.data
    })
    console.log(response.data)
  }

  handleSubmit = async event => {
    event.preventDefault()
    const turtleId = this.props.match.params.id
    const response = await updateTurtle(turtleId, this.state.formData)
    this.props.history.push(`/turtles/${response.data.id}`)
    console.log(response.data)
  }

  handleChange = event => {
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    this.setState({ formData })
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <TurtleForm 
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            formData={this.state.formData}
          />
        </div>
      </section>
    )
  }


}

export default TurtleEdit