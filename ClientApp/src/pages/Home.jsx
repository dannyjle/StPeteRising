import { useEffect, useState } from 'react'
import facebook from './images/facebook.svg'
import instagram from './images/instagram.svg'
import twitter from './images/twitter.svg'
import linkedin from './images/linkedin.svg'
import list from './images/list.svg'
import filter from './images/filter.svg'
import spr from './images/sprlogo.png'
import dtspSky from './images/dtspskyline.jpeg'

export function Home() {
  const [projects, setProjects] = useState([])

  useEffect(function () {
    async function loadProjects() {
      const response = await fetch('/api/projects')
      if (response.status === 200) {
        const json = await response.json()
        setProjects(json)
      }
    }
    loadProjects()
  }, [])

  return (
    <>
      <div className="layout">
        <header>
          <div className="spr-img">
            <div className="container">{/* drop down menu */}</div>
          </div>

          <h1>
            <a to="#">
              <img
                className="spr-logo"
                src={spr}
                alt="St.Pete Rising Logo"
                width="475"
                height="225"
              />
            </a>
          </h1>
          <h2 className="text-container">
            <img
              className="dtsp-skyline"
              src={dtspSky}
              alt="nav dropdown"
              width="495"
              height="200"
            />
            <div className="text-centered">(Link Name)</div>
          </h2>
        </header>
        <form>
          <input
            className="search-bar"
            type="text"
            placeholder="&#x1F50D; Search"
          ></input>
        </form>
        <main className="results">
          {projects.map((project) => (
            <dl key={project.id} className="projectResults">
              <h3>{project.name}</h3>
              <dt className="status">
                <div className="subject">Status:</div>{' '}
              </dt>
              <dd className="project-status">{project.status}</dd>{' '}
              <article>
                <dt>
                  <div className="subject">Class:</div>
                </dt>
                <dd>{project.class}</dd>
                <dt>
                  <div className="subject">Floor:</div>
                </dt>
                <dd>{project.floor}</dd>
              </article>
              <article>
                <dt>
                  <div className="subject">Units:</div>
                </dt>
                <dd>{project.units}</dd>
                <dt>
                  <div className="subject">Completion:</div>{' '}
                </dt>
                <dd>{project.completion}</dd>
                {/* <dt>
                  <div className="subject">Website:</div>
                </dt>
                <dd>
                  <a className="webpage" href="{project.website}">
                    Link
                  </a>
                </dd> */}
              </article>
            </dl>
          ))}
        </main>

        <footer>
          <div className="social-media">
            <img
              className="social-icon"
              src={facebook}
              alt="Facebook icon"
              width="35"
              height="35"
            />
            <img
              className="social-icon"
              src={instagram}
              alt="Instagram icon"
              width="35"
              height="35"
            />
            <img
              className="social-icon"
              src={twitter}
              alt="Twitter icon"
              width="35"
              height="35"
            />
            <img
              className="social-icon"
              src={linkedin}
              alt="LinkedIn icon"
              width="35"
              height="35"
            />
          </div>
          <p></p>
          Terms of Use - Privacy Policy © 2021 St. Pete Rising, LLC
        </footer>
      </div>
    </>
  )
}
