import React from 'react'

import TurtleCard from './TurtleCard'
import { getAllTurtles } from '../../lib/api'

class TurtleIndex extends React.Component {
  state = {
    turtles: []
  }

  async componentDidMount() {
    // get all turtles
    const response = await getAllTurtles()
    this.setState({
      turtles: response.data // add them to the state
    })
    console.log(response.data)
  }

  render () {
    return (
      <div className="section has-background-success-dark">
        <div className="columns is-multiline">
          { this.state.turtles.map(turtle => <TurtleCard key={turtle.id} {...turtle} /> 
          ) }
        </div>
      </div>
    )
  }

}

export default TurtleIndex