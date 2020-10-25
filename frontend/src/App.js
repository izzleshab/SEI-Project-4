import React from 'react'

class App extends React.Component {
  async componentDidMount() {
    try {
      const response = await fetch('/api/turtles')
      const data = await response.json()
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return 'HELLO WORLD'
  }
}

export default App
