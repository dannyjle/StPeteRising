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
            <div className="container">
              <div className="dropdown">
                <img src={list} alt="nav dropdown" width="35" height="35" />
                <div className="dropdown-content">
                  <a href="#">Home</a>
                  <a href="#">Developments</a>
                  <a href="#">Login</a>
                </div>
              </div>
            </div>
          </div>

          <h1>
            <a to="/">
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
          <div className="dropdown">
            <img src={filter} alt="filter content" width="35" height="35" />
            <div className="dropdown-content">
              <a href="#">Last Updated</a>
              <a href="#">By Date Added</a>
              <a href="#">A-Z</a>
            </div>
          </div>
        </form>
        <main className="results">
          {projects.map((project) => (
            <dl className="projectResults">
              <h3>{project.name}</h3>
              <dt className="status">
                Status: <dd>{project.status}</dd>{' '}
              </dt>
              <article>
                <dt>
                  Address: <dd>{project.address}</dd>
                </dt>
                <dt>
                  Class: <dd>{project.class}</dd>
                </dt>
                <dt>
                  Floor: <dd>{project.floor}</dd>
                </dt>
              </article>
              <article>
                <dt>
                  Units: <dd>{project.units}</dd>
                </dt>
                <dt>
                  Completion: <dd>{project.completion}</dd>
                </dt>
                <dt>
                  Website:
                  <dd>
                    <a className="webpage" href="{project.website}">
                      Link
                    </a>
                  </dd>
                </dt>
              </article>

              {/* <a href="https://www.w3schools.com">Visit W3Schools</a>  */}
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
