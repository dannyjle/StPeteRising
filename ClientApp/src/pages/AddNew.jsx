import facebook from './images/facebook.svg'
import instagram from './images/instagram.svg'
import twitter from './images/twitter.svg'
import linkedin from './images/linkedin.svg'
import spr from './images/sprlogo.png'
import dtspSky from './images/dtspskyline.jpeg'
import { useState } from 'react'

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
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newProject),
    })

    if (response.ok) {
      console.log('BAM!')
    }
  }

  return (
    <>
      <div className="layout">
        <header>
          <div className="spr-img">
            <div className="container"></div>
          </div>

          <h1>
            <a href="/">
              <img
                className="spr-logo"
                src={spr}
                alt="St.Pete Rising Logo"
                width="475"
                height="225"
              />
            </a>
          </h1>

          <nav className="nav">
            <a href="/">Home</a>
            <a href="/add">Add Project</a>
            <a href="/admin">Login</a>
          </nav>
          <h2 className="text-container">
            <img
              className="dtsp-skyline"
              src={dtspSky}
              alt="nav dropdown"
              width="495"
              height="200"
            />
            <div className="text-centered">New Project</div>
          </h2>
        </header>

        <form className="add-new" onSubmit={handleFormSubmit}>
          <p className="form-input">
            <label htmlFor="name">Name: </label>
            <input
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

        <footer>
          <div className="social-media">
            <a href="https://www.facebook.com/stpeterising/">
              <img
                className="social-icon"
                src={facebook}
                alt="Facebook icon"
                width="35"
                height="35"
              />
            </a>
            <a href="https://www.instagram.com/stpeterising/">
              <img
                className="social-icon"
                src={instagram}
                alt="Instagram icon"
                width="35"
                height="35"
              />
            </a>
            <a href="https://twitter.com/StPeteRising">
              <img
                className="social-icon"
                src={twitter}
                alt="Twitter icon"
                width="35"
                height="35"
              />
            </a>
            <a href="https://www.linkedin.com/company/stpeterising">
              <img
                className="social-icon"
                src={linkedin}
                alt="LinkedIn icon"
                width="35"
                height="35"
              />
            </a>
          </div>
        </footer>
        <div className="footer-link">
          <a href="https://stpeterising.com/terms">Terms of Use</a>
          <a href="https://stpeterising.com/privacy">
            Privacy Policy © 2021 St. Pete Rising, LLC
          </a>
        </div>
      </div>
    </>
  )
}
