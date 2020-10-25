import React from 'react'
import { Link } from 'react-router-dom'

const TurtleCard = ({ id, image, name, species, diet }) => {
  return (
    <div id={id} className="column is-one-quarter-desktop">
      <Link to={`/turtles/${id}`}>
        <div className="card">
          <div className="card-header">
            <h4 className="card-header-title">{name}</h4>
          </div>
          <div className="card-image">
            <figure className="image image is-1by1">
              <img src={image} alt={name} loading="lazy" width="255" height="255" />
            </figure>
            <div className="card-content">
              <h5 className="">{species}</h5>
              <h6 className="">{diet}</h6>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default TurtleCard