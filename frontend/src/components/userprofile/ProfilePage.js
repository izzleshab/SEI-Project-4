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
        <div className="column has-background-success-dark">
          <div className="box radius is-small has-background-success">
            <h4 className="title is-3">
              Username: 
            </h4>
            <h6 className="title is-4">
              {this.state.userData.username}
            </h6>
          </div>
          <div className="box has-background-success">
            <h4 className="title is-3">
              Submitted Turtles:
            </h4>
            <div>
              {this.state.userData.created_turtles.map(turtle => (
                <div className="title is-4" key="turtle">
                  <p key={turtle.name}><strong>{turtle.name}</strong></p>
                  <br />
                  <div className="column is-one-third has-background-success-dark">
                    <img className="" src={turtle.image}></img>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="box is-half has-background-success">
            <h4 className="title is-3">
              Posted Comments:
            </h4>
            {this.state.userData.posted_comments.map(comment => (
              <p key={comment.text}>
                <strong>{comment.text}</strong>
              </p>
            ))}
          </div>
        </div>
      </section>
    )
  }
}

export default ProfilePage