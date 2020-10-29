import React from 'react'

const TurtleForm = props => {
  const { name, species, diet, image, habitat, owner } = props.formData
  const { handleChange, handleSubmit } = props

  return (
    <div className="column">
      <form onSubmit={handleSubmit}className="column is-half is-offset-one-quarter box has-background-success">
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
        <div className="field">
          <label className="label">Species</label>
          <div className="control">
            <input 
              className="input"
              placeholder="Species"
              name="species"
              value={species}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Diet</label>
          <div className="control">
            <input 
              className="input"
              placeholder="Herbivore, Carnivore or Omnivore"
              name="diet"
              value={diet}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Habitat</label>
          <div className="control">
            <input 
              className="Habitat"
              placeholder="1 - Aquatic, 2 - Terrestrial, 3 - Hybrid"
              name="habitat"
              value={habitat}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Image</label>
          <div className="control">
            <input 
              className="input"
              placeholder="Image Address Here"
              name="image"
              value={image}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Owner</label>
          <div className="control">
            <input 
              className="input"
              placeholder="Owner ID here (editing only)"
              name="owner"
              value={owner}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <button type="submit" className="button is-fullwidth is-warning is-success is-inverted is-outlined has-text-black">Submit</button>
        </div>
      </form>
    </div>
  )

}

export default TurtleForm