import React from 'react'

import { getAllTurtles } from '../../lib/api'

class TurtleIndex extends React.Component {
  state = {
    turtles: null
  }

  async componentDidMount() {
    // get all turtles
    const response = await getAllTurtles()
    this.setState({
      cheeses: response.data // add them to the state
    })
    console.log(response.data)
  }

  render () {
    return (
      'HELLO TURTLES'
    )
  }

}

export default TurtleIndex