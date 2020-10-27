import React from 'react'

const TurtleForm = props => {
  const { name } = props.formData
  const { handleChange, handleSubmit } = props

  return (
    <div className="columsn">
      <div onSubmit={handleSubmit}className="column is-half is-offset-one-quarter box">
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input 
              className="input"
              placeholder="Name"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  )

}

export default TurtleForm