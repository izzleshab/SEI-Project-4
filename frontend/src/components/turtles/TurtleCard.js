import React from 'react'
import { Link } from 'react-router-dom'

const TurtleCard = ({ id, image, name, species, diet }) => {
  return (
    <div id={id} className="column is-one-quarter-desktop">
      <Link to={`/turtles/${id}`}>
        <div className="card has-background-success">
          <div className="card-header">
            <h3 className="card-header-title is-size-5">{name}</h3>
          </div>
          <div className="card-image">
            <figure className="image image is-1by1">
              <img src={image} alt={name} loading="lazy" width="255" height="255" />
            </figure>
            <div className="card-content">
              <h5 className="is-italic is-size-5"><strong>{species}</strong></h5>
              <h6 className="has-text-weight-bold is-size-6">{diet}</h6>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default TurtleCard