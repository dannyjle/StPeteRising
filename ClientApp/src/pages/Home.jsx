import { useEffect, useState } from 'react'
import facebook from './images/facebook.svg'
import instagram from './images/instagram.svg'
import twitter from './images/twitter.svg'
import linkedin from './images/linkedin.svg'
import spr from './images/sprlogo.png'
import dtspSky from './images/dtspskyline.jpeg'

export function Home() {
  const [projects, setProjects] = useState([])
  const [filterText, setFilterText] = useState('')

  useEffect(
    function () {
      async function loadProjects() {
        const url =
          filterText.length === 0
            ? '/api/projects'
            : `/api/projects?filter=${filterText}`
        const response = await fetch(url)
        if (response.status === 200) {
          const json = await response.json()
          setProjects(json)
        }
      }
      loadProjects()
    },
    [filterText]
  )

  return (
    <>
      <div className="layout">
        <header>
          <div className="spr-img">
            <div className="container">{/* drop down menu */}</div>
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
            <a href="/">Projects</a>
            <div className="nav-right">
              <a href="/">Login</a>
            </div>
          </nav>
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
            placeholder="&#x1F50D; Search..."
            value={filterText}
            onChange={function (event) {
              setFilterText(event.target.value)
            }}
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
              <button>
                <a href="/">More</a>
              </button>
            </dl>
          ))}
        </main>
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
