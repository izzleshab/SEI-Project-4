import React from 'react'
import { getUserProfile } from '../../lib/api'

class ProfilePage extends React.Component {

  state = {
    userData: null
  }


  async componentDidMount() {
    const response = await getUserProfile()
    // console.log(getData)
    this.setState({
      userData: response.data
    })
  }


  render() {
    if (!this.state.userData)
      return null
    console.log(this.state)
    return (
      <section>
        <div className="column is-half">
          <h4 className="title is-4">
            Username:
          </h4>
          <p>{this.state.userData.username}</p>
        </div>
        <div className="column is-half">
          <h4 className="title is-4">
            Submitted Turtles:
          </h4>
          {this.state.userData.created_turtles.map(turtle => (
            <div key="turtle">
              <p key={turtle.name}>{turtle.name}</p>
              <img src={turtle.image}></img>
            </div>
          ))}
        </div>
        <div className="column is-half">
          <h4 className="title is-4">
            Posted Comments:
          </h4>
          {this.state.userData.posted_comments.map(comment => (
            <p key={comment.text}>{comment.text}</p>
          ))}
        </div>
      </section>
    )
  }
}

export default ProfilePage