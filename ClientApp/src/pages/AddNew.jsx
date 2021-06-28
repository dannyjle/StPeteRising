import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { authHeader } from '../auth'

export function AddNew() {
  const [newProject, setNewProject] = useState({
    name: '',
    status: '',
    address: '',
    class: '',
    floor: '',
    units: '',
    completion: '',
    website: '',
  })

  const [errorMessage, setErrorMessage] = useState()
  const history = useHistory()

  function handleStringFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedProject = { ...newProject, [fieldName]: value }

    setNewProject(updatedProject)
  }

  function handleIntegerFieldChange(event) {
    const value = parseInt(event.target.value) || 0

    const fieldName = event.target.name

    const updatedProject = { ...newProject, [fieldName]: value }

    setNewProject(updatedProject)
  }

  async function handleFormSubmit(event) {
    event.preventDefault()
    const response = await fetch('/api/Projects', {
      method: 'POST',
      // send JSON ~and~ (token)
      headers: { 'content-type': 'application/json', ...authHeader() },
      body: JSON.stringify(newProject),
    })

    if (response.status === 401) {
      // @ts-ignore
      setErrorMessage('Not Authorized')
    } else {
      if (response.ok) {
        history.push('/')
      }
    }
  }

  return (
    <>
      {errorMessage ? <p className="submit-error">{errorMessage}</p> : null}
      <form className="add-new" onSubmit={handleFormSubmit}>
        <p className="form-input">
          <label htmlFor="name">Name: </label>
          <input
            required
            type="text"
            name="name"
            value={newProject.name}
            onChange={handleStringFieldChange}
          />
        </p>
        <p className="form-input">
          <label htmlFor="status">Status: </label>
          <input
            type="text"
            name="status"
            value={newProject.status}
            onChange={handleStringFieldChange}
          ></input>
        </p>
        <p className="form-input">
          <label htmlFor="address">Address: </label>
          <input
            type="text"
            name="address"
            value={newProject.address}
            onChange={handleStringFieldChange}
          ></input>
        </p>
        <p className="form-input">
          <label htmlFor="class">Class: </label>
          <input
            type="text"
            name="class"
            value={newProject.class}
            onChange={handleStringFieldChange}
          />
        </p>
        <p className="form-input">
          <label htmlFor="floor">Floor: </label>
          <input
            type="text"
            name="floor"
            value={newProject.floor}
            onChange={handleIntegerFieldChange}
          />
        </p>
        <p className="form-input">
          <label htmlFor="units">Units: </label>
          <input
            type="text"
            name="units"
            value={newProject.units}
            onChange={handleIntegerFieldChange}
          />
        </p>{' '}
        <p className="form-input">
          <label htmlFor="completion">Completion: </label>
          <input
            type="text"
            name="completion"
            value={newProject.completion}
            onChange={handleStringFieldChange}
          />
        </p>
        <p className="form-input">
          <label htmlFor="website">Website: </label>
          <input
            type="text"
            name="website"
            value={newProject.website}
            onChange={handleStringFieldChange}
          />
        </p>
        <div className="picture">
          <p className="form-input">
            <label htmlFor="picture">Picture: </label>
            <input className="img-select" type="file" name="picture" />
          </p>
        </div>
        <p>
          <input className="submit" type="submit" value="Submit" />
        </p>
      </form>
    </>
  )
}
